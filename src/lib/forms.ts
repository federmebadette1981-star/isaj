import { officialEmail } from "../data/site-content";

/**
 * Envoi réel des formulaires du site.
 *
 * Le site est statique : l'envoi passe par un service de formulaire configuré
 * par variable d'environnement au moment du build (voir README).
 *
 *   PUBLIC_WEB3FORMS_KEY  clé d'accès Web3Forms (https://web3forms.com, gratuite)
 *   PUBLIC_FORM_ENDPOINT  URL d'un autre service compatible (Formspree, etc.)
 *
 * Tant qu'aucune des deux n'est définie, le formulaire reste pleinement
 * utilisable : le message est remis au logiciel de messagerie du visiteur,
 * sans dépendance à Gmail ni à un compte particulier.
 */
const WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY as string | undefined;
const CUSTOM_ENDPOINT = import.meta.env.PUBLIC_FORM_ENDPOINT as
  | string
  | undefined;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const isRemoteFormConfigured = Boolean(WEB3FORMS_KEY || CUSTOM_ENDPOINT);

/** Délai minimum de remplissage, en millisecondes — barrière anti-robot. */
const MIN_FILL_TIME = 3000;

export type SubmitResult = "sent" | "handoff" | "error";

export type FormSubmission = {
  subject: string;
  /** Corps du message, déjà mis en forme, utilisé en cas de remise au client mail. */
  body: string;
  /** Champs structurés transmis au service de formulaire. */
  fields: Record<string, string>;
  replyTo?: string;
  fromName?: string;
  /** Valeur du champ piège : doit rester vide. */
  honeypot: string;
  /** Horodatage d'ouverture du formulaire. */
  startedAt: number;
};

/** Ouvre le logiciel de messagerie du visiteur avec le message pré-rempli. */
const handOffToMailClient = (submission: FormSubmission): SubmitResult => {
  const url = `mailto:${officialEmail}?subject=${encodeURIComponent(
    submission.subject,
  )}&body=${encodeURIComponent(submission.body)}`;
  if (typeof window !== "undefined") window.location.href = url;
  return "handoff";
};

export const submitForm = async (
  submission: FormSubmission,
): Promise<SubmitResult> => {
  // Protection anti-spam : champ piège rempli ou formulaire envoyé trop vite.
  if (submission.honeypot.trim() !== "") return "sent";
  if (Date.now() - submission.startedAt < MIN_FILL_TIME) return "error";

  if (!isRemoteFormConfigured) return handOffToMailClient(submission);

  const endpoint = WEB3FORMS_KEY ? WEB3FORMS_ENDPOINT : CUSTOM_ENDPOINT!;
  const payload: Record<string, unknown> = {
    ...submission.fields,
    subject: submission.subject,
    message: submission.body,
    from_name: submission.fromName ?? "Site ISAJ",
    replyto: submission.replyTo,
    _replyto: submission.replyTo,
  };
  if (WEB3FORMS_KEY) payload.access_key = WEB3FORMS_KEY;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) return "error";
    const data = await response.json().catch(() => ({}));
    if (data && data.success === false) return "error";
    return "sent";
  } catch {
    return "error";
  }
};
