import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  Phone,
  School,
  Send,
  User,
} from "lucide-react";
import { useRef, useState } from "react";
import {
  admissionNote,
  admissionSteps,
  contactDetails,
  schoolLevels,
} from "../data/site-content";
import { submitForm } from "../lib/forms";

const levelOptions = schoolLevels.map((level) => level.title);

type FormState = "idle" | "sending" | "sent" | "handoff" | "error";

const emptyForm = {
  studentLastName: "",
  studentFirstName: "",
  level: "",
  guardianName: "",
  phone: "",
  email: "",
  message: "",
  website: "", // champ piège anti-spam
};

const EnrollmentPageContent = () => {
  const [formState, setFormState] = useState<FormState>("idle");
  const startedAt = useRef(Date.now());
  const [formData, setFormData] = useState(emptyForm);

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
      "INSTITUTION LE SAINT JUSTIEN (ISAJ) — DEMANDE DE PRÉINSCRIPTION",
      "",
      "ÉLÈVE",
      `Nom : ${formData.studentLastName.trim()}`,
      `Prénom : ${formData.studentFirstName.trim()}`,
      `Niveau souhaité : ${formData.level}`,
      "",
      "PARENT OU TUTEUR",
      `Nom : ${formData.guardianName.trim()}`,
      `Téléphone : ${formData.phone.trim()}`,
      `E-mail : ${formData.email.trim()}`,
      "",
      "INFORMATION COMPLÉMENTAIRE",
      formData.message.trim() || "Aucune information complémentaire.",
    ].join("\n");

    const result = await submitForm({
      subject: `Demande de préinscription — ${formData.studentFirstName.trim()} ${formData.studentLastName.trim()}`,
      body,
      fromName: formData.guardianName.trim(),
      replyTo: formData.email.trim(),
      honeypot: formData.website,
      startedAt: startedAt.current,
      fields: {
        eleve_nom: formData.studentLastName.trim(),
        eleve_prenom: formData.studentFirstName.trim(),
        niveau_souhaite: formData.level,
        parent_tuteur: formData.guardianName.trim(),
        telephone: formData.phone.trim(),
        email: formData.email.trim(),
      },
    });

    setFormState(
      result === "sent" ? "sent" : result === "handoff" ? "handoff" : "error",
    );
  };

  const inputClass =
    "w-full rounded-2xl border border-black/[0.07] bg-white px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-ink-mute/60 transition-all outline-none focus:border-brand focus:ring-2 focus:ring-brand/15";

  if (formState === "sent" || formState === "handoff") {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-black/[0.07] bg-white">
          <CheckCircle2 size={26} className="text-brand" strokeWidth={1.8} />
        </div>
        <p className="text-ink-mute text-[0.72rem] tracking-[0.22em] uppercase">
          {formState === "sent" ? "Demande transmise" : "Demande préparée"}
        </p>
        <h1 className="tracking-headline text-ink mt-4 text-[1.9rem] leading-[1.05] font-semibold sm:text-4xl md:text-[3.25rem]">
          Merci.
        </h1>
        <p className="text-ink-mute mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed">
          {formState === "sent"
            ? "Votre demande de préinscription a bien été transmise. Le secrétariat de l'ISAJ vous contactera pour vous informer des prochaines étapes."
            : "Votre demande a été ouverte dans votre application de messagerie. Cliquez sur Envoyer pour la transmettre au secrétariat de l'ISAJ."}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="bg-ink hover:bg-ink-soft inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-6 text-[0.9rem] font-medium text-white transition-all active:scale-[0.98]"
          >
            Retour à l'accueil
          </a>
          <a
            href="/curriculum"
            className="text-ink inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-black/[0.08] px-6 text-[0.9rem] font-medium transition-colors hover:bg-black/[0.03]"
          >
            Découvrir le programme
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8 lg:pt-16 lg:pb-32">
      <a
        href="/"
        className="group text-ink-mute hover:text-ink inline-flex items-center gap-2 text-[0.85rem] transition-colors"
      >
        <ArrowLeft
          size={15}
          className="transition-transform group-hover:-translate-x-0.5"
        />
        Retour à l'accueil
      </a>
      <div className="mt-10 mb-16 max-w-3xl">
        <p className="text-ink-mute mb-4 text-[0.72rem] tracking-[0.22em] uppercase">
          Admissions · Préscolaire, fondamental et secondaire
        </p>
        <h1 className="tracking-headline balance text-ink text-[2rem] leading-[1.02] font-semibold sm:text-5xl md:text-[5rem]">
          Demande de{" "}
          <span className="font-display text-brand-deep font-normal italic">
            préinscription.
          </span>
        </h1>
        <p className="pretty text-ink-mute mt-7 max-w-xl text-[1.05rem] leading-relaxed">
          Complétez le formulaire ci-dessous. Le secrétariat de l'ISAJ vous
          contactera pour vous informer des prochaines étapes.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="space-y-8 lg:col-span-5">
          <div>
            <p className="text-ink-mute mb-6 text-[0.72rem] tracking-[0.22em] uppercase">
              Procédure d'inscription
            </p>
            <ol className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
              {admissionSteps.map((step, index) => (
                <li key={step.title} className="flex items-start gap-4 py-5">
                  <span className="tabular text-brand-deep mt-0.5 text-[0.78rem] font-medium">
                    {index + 1}.
                  </span>
                  <div>
                    <p className="text-ink text-[0.98rem] font-medium">
                      {step.title}
                    </p>
                    <p className="text-ink-mute mt-1 text-[0.9rem] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-ink-mute mt-6 text-[0.9rem] leading-relaxed">
              {admissionNote}
            </p>
          </div>

          <div className="grain bg-ink relative overflow-hidden rounded-[1.75rem] p-7 text-white">
            <Mail size={22} strokeWidth={1.6} className="text-white/85" />
            <p className="font-display mt-5 text-[1.25rem] leading-tight italic">
              Une question avant l'inscription ?
            </p>
            <ul className="mt-5 space-y-1 text-[0.9rem]">
              {contactDetails.phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="inline-flex min-h-11 items-center text-white/75 transition-colors hover:text-white"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="break-all text-white/75 transition-colors hover:text-white"
                >
                  {contactDetails.email}
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white">
            <div className="border-b border-black/[0.06] px-6 py-7 sm:px-8 md:px-12 md:py-9">
              <p className="text-ink-mute text-[0.72rem] tracking-[0.22em] uppercase">
                Formulaire
              </p>
              <h2 className="font-display text-ink mt-2 text-[1.6rem] leading-tight font-medium md:text-[2.25rem]">
                Demande de préinscription
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-7 p-6 sm:p-8 md:p-12"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="studentLastName"
                    className="text-ink-mute flex items-center gap-1.5 text-[0.78rem] font-medium"
                  >
                    <User size={13} />
                    Nom de l'élève
                  </label>
                  <input
                    id="studentLastName"
                    required
                    type="text"
                    name="studentLastName"
                    value={formData.studentLastName}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="studentFirstName"
                    className="text-ink-mute flex items-center gap-1.5 text-[0.78rem] font-medium"
                  >
                    <User size={13} />
                    Prénom de l'élève
                  </label>
                  <input
                    id="studentFirstName"
                    required
                    type="text"
                    name="studentFirstName"
                    value={formData.studentFirstName}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="level"
                  className="text-ink-mute flex items-center gap-1.5 text-[0.78rem] font-medium"
                >
                  <School size={13} />
                  Niveau souhaité
                </label>
                <select
                  id="level"
                  required
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="">Sélectionner le niveau</option>
                  {levelOptions.map((level) => (
                    <option key={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="guardianName"
                  className="text-ink-mute flex items-center gap-1.5 text-[0.78rem] font-medium"
                >
                  <User size={13} />
                  Nom du parent ou tuteur
                </label>
                <input
                  id="guardianName"
                  required
                  type="text"
                  name="guardianName"
                  autoComplete="name"
                  value={formData.guardianName}
                  onChange={handleInputChange}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-ink-mute flex items-center gap-1.5 text-[0.78rem] font-medium"
                  >
                    <Phone size={13} />
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-ink-mute flex items-center gap-1.5 text-[0.78rem] font-medium"
                  >
                    <Mail size={13} />
                    E-mail
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-ink-mute text-[0.78rem] font-medium"
                >
                  Message / information complémentaire{" "}
                  <span className="text-ink-mute/60">(optionnel)</span>
                </label>
                <textarea
                  id="message"
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
                  ou contactez le secrétariat au{" "}
                  <a
                    href={contactDetails.phones[0].href}
                    className="font-medium underline underline-offset-2"
                  >
                    {contactDetails.phones[0].display}
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "sending"}
                className="group bg-ink hover:bg-ink-soft flex min-h-13 w-full items-center justify-center gap-2 rounded-full text-[0.95rem] font-medium text-white transition-all active:scale-[0.99] disabled:opacity-60"
              >
                {formState === "sending" ? "Envoi en cours…" : "Envoyer la demande"}
                <Send size={16} />
              </button>

              <p className="text-ink-mute text-center text-[0.78rem] leading-relaxed">
                Les informations transmises servent uniquement à traiter la
                demande de préinscription.{" "}
                <a
                  href="/confidentialite"
                  className="hover:text-ink underline underline-offset-2"
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

export default EnrollmentPageContent;
