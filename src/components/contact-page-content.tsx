import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contactDetails, schoolIdentity } from "../data/site-content";
import { submitForm } from "../lib/forms";

const subjects = [
  "Information générale",
  "Admission et inscription",
  "Devenir partenaire",
  "Visiter l'établissement",
  "Autre demande",
];

type FormState = "idle" | "sending" | "sent" | "handoff" | "error";

const ContactPageContent = () => {
  const [formState, setFormState] = useState<FormState>("idle");
  const startedAt = useRef(Date.now());
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organisation: "",
    subject: subjects[0],
    message: "",
    website: "", // champ piège anti-spam
  });

  useEffect(() => {
    const requestedPurpose = new URLSearchParams(window.location.search).get(
      "purpose",
    );
    if (requestedPurpose === "partner") {
      setFormData((previous) => ({
        ...previous,
        subject: "Devenir partenaire",
      }));
    }
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (formState === "error") setFormState("idle");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFormState("sending");

    const body = [
      "INSTITUTION LE SAINT JUSTIEN (ISAJ) — MESSAGE DEPUIS LE SITE",
      "",
      `Nom complet : ${formData.fullName.trim()}`,
      `Adresse e-mail : ${formData.email.trim()}`,
      `Téléphone : ${formData.phone.trim() || "Non communiqué"}`,
      `Organisation : ${formData.organisation.trim() || "Non communiquée"}`,
      `Objet : ${formData.subject}`,
      "",
      "MESSAGE",
      formData.message.trim(),
    ].join("\n");

    const result = await submitForm({
      subject: `${formData.subject} — ${formData.fullName.trim()}`,
      body,
      fromName: formData.fullName.trim(),
      replyTo: formData.email.trim(),
      honeypot: formData.website,
      startedAt: startedAt.current,
      fields: {
        nom_complet: formData.fullName.trim(),
        email: formData.email.trim(),
        telephone: formData.phone.trim(),
        organisation: formData.organisation.trim(),
        objet: formData.subject,
      },
    });

    setFormState(result === "sent" ? "sent" : result === "handoff" ? "handoff" : "error");
  };

  const inputClass =
    "w-full rounded-2xl border border-black/[0.07] bg-white px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-ink-mute/60 transition-all outline-none focus:border-brand focus:ring-2 focus:ring-brand/15";

  if (formState === "sent" || formState === "handoff") {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-black/[0.07] bg-white">
          <CheckCircle2 size={26} className="text-brand" strokeWidth={1.8} />
        </div>
        <p className="text-ink-mute text-[0.72rem] tracking-[0.22em] uppercase">
          {formState === "sent" ? "Message transmis" : "Message préparé"}
        </p>
        <h1 className="tracking-headline text-ink mt-4 text-[1.9rem] leading-[1.05] font-semibold sm:text-4xl md:text-[3.25rem]">
          Merci.
        </h1>
        <p className="text-ink-mute mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed">
          {formState === "sent"
            ? "Votre message a été envoyé avec succès. L'équipe de l'ISAJ vous répondra dans les meilleurs délais."
            : "Votre message a été ouvert dans votre application de messagerie. Cliquez sur Envoyer pour le transmettre à l'ISAJ."}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="bg-ink hover:bg-ink-soft inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-6 text-[0.9rem] font-medium text-white transition-all active:scale-[0.98]"
          >
            Retour à l'accueil
          </a>
          <button
            type="button"
            onClick={() => {
              startedAt.current = Date.now();
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                organisation: "",
                subject: subjects[0],
                message: "",
                website: "",
              });
              setFormState("idle");
            }}
            className="text-ink inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-black/[0.08] px-6 text-[0.9rem] font-medium transition-colors hover:bg-black/[0.03]"
          >
            Écrire un autre message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8 lg:pt-24 lg:pb-32">
      <div className="mb-16 max-w-3xl">
        <p className="text-ink-mute mb-4 text-[0.72rem] tracking-[0.22em] uppercase">
          Contact · Préscolaire, fondamental et secondaire
        </p>
        <h1 className="tracking-headline balance text-ink text-[2rem] leading-[1.02] font-semibold sm:text-5xl md:text-[5rem]">
          Parlons de{" "}
          <span className="font-display text-brand-deep font-normal italic">
            l'ISAJ.
          </span>
        </h1>
        <p className="pretty text-ink-mute mt-7 max-w-xl text-[1.05rem] leading-relaxed">
          Pour les inscriptions, le programme, une visite, un partenariat ou
          toute autre question, écrivez directement à l'établissement.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-5">
          <ul className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
            <li className="py-7">
              <div className="flex items-start gap-4">
                <MapPin
                  size={18}
                  className="text-ink-mute mt-1 shrink-0"
                  strokeWidth={1.6}
                />
                <div>
                  <p className="text-ink-mute text-[0.72rem] tracking-[0.18em] uppercase">
                    Adresse
                  </p>
                  <address className="font-display text-ink mt-2 space-y-0.5 text-[1.1rem] leading-snug not-italic">
                    <p className="font-medium">{schoolIdentity.name} (ISAJ)</p>
                    {schoolIdentity.addressLines.map((line) => (
                      <p key={line} className="text-ink-mute text-[0.95rem]">
                        {line}
                      </p>
                    ))}
                  </address>
                  <a
                    href={schoolIdentity.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-ink hover:text-brand-deep mt-4 inline-flex min-h-11 items-center gap-2 text-[0.9rem] font-medium underline decoration-1 underline-offset-[6px] transition-colors"
                  >
                    Voir notre localisation
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </li>
            <li className="py-7">
              <div className="flex items-start gap-4">
                <Phone
                  size={18}
                  className="text-ink-mute mt-1 shrink-0"
                  strokeWidth={1.6}
                />
                <div>
                  <p className="text-ink-mute text-[0.72rem] tracking-[0.18em] uppercase">
                    Téléphone
                  </p>
                  <ul className="mt-2 space-y-1">
                    {contactDetails.phones.map((phone) => (
                      <li key={phone.href}>
                        <a
                          href={phone.href}
                          className="font-display text-ink hover:text-brand-deep inline-flex min-h-11 items-center text-[1.1rem] transition-colors"
                        >
                          {phone.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            <li className="py-7">
              <div className="flex items-start gap-4">
                <Mail
                  size={18}
                  className="text-ink-mute mt-1 shrink-0"
                  strokeWidth={1.6}
                />
                <div className="min-w-0">
                  <p className="text-ink-mute text-[0.72rem] tracking-[0.18em] uppercase">
                    E-mail
                  </p>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-ink hover:text-brand-deep mt-2 block text-[0.98rem] leading-relaxed break-all transition-colors"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-white">
            <iframe
              title="Localisation de l'Institution Le Saint Justien"
              src="https://www.google.com/maps?q=Bon-Repos%2C%20Croix-des-Bouquets%2C%20Ha%C3%AFti&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0"
            />
          </div>
        </aside>

        <div className="lg:col-span-7">
          <div className="rounded-[2rem] border border-black/[0.06] bg-white p-6 sm:p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-display text-ink text-[1.5rem] leading-snug italic">
                  Écrivez-nous.
                </p>
                <span className="text-ink-mute text-[0.72rem] tracking-[0.18em] uppercase">
                  Formulaire de contact
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-ink-mute block text-[0.78rem] font-medium"
                  >
                    Nom complet
                  </label>
                  <input
                    id="fullName"
                    required
                    name="fullName"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    type="text"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-ink-mute block text-[0.78rem] font-medium"
                  >
                    Adresse e-mail
                  </label>
                  <input
                    id="email"
                    required
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-ink-mute block text-[0.78rem] font-medium"
                  >
                    Téléphone{" "}
                    <span className="text-ink-mute/60">(optionnel)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="organisation"
                    className="text-ink-mute block text-[0.78rem] font-medium"
                  >
                    Organisation{" "}
                    <span className="text-ink-mute/60">(optionnel)</span>
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    autoComplete="organization"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    type="text"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-ink-mute block text-[0.78rem] font-medium"
                >
                  Objet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`${inputClass} appearance-none`}
                >
                  {subjects.map((subject) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-ink-mute block text-[0.78rem] font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Champ piège anti-spam — invisible pour les visiteurs */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor="website">Ne pas remplir</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>

              {formState === "error" && (
                <p
                  role="alert"
                  className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-[0.88rem] leading-relaxed text-red-700"
                >
                  L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez,
                  ou écrivez directement à{" "}
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="font-medium break-all underline underline-offset-2"
                  >
                    {contactDetails.email}
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "sending"}
                className="group bg-ink hover:bg-ink-soft flex min-h-13 w-full items-center justify-center gap-2 rounded-full text-[0.95rem] font-medium text-white transition-all active:scale-[0.99] disabled:opacity-60"
              >
                {formState === "sending" ? "Envoi en cours…" : "Envoyer le message"}
                <Send size={16} />
              </button>

              <p className="text-ink-mute text-center text-[0.78rem] leading-relaxed">
                Vos informations sont transmises au secrétariat de l'ISAJ,
                uniquement pour répondre à votre demande.{" "}
                <a
                  href="/confidentialite"
                  className="underline underline-offset-2 hover:text-ink"
                >
                  Politique de confidentialité
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageContent;
