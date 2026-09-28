import {
  ArrowLeft,
  CheckCircle2,
  HandHeart,
  Handshake,
  Laptop,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  contactDetails,
  support,
  supportDomains,
  supportTypes,
  supporterProfiles,
  volunteering,
} from "../data/site-content";
import { submitForm } from "../lib/forms";

const wayIcons = [HandHeart, Laptop, Users, Handshake];

const inputClass =
  "w-full rounded-2xl border border-black/[0.07] bg-white px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-ink-mute/60 transition-all outline-none focus:border-brand focus:ring-2 focus:ring-brand/15";
const labelClass = "text-ink-mute block text-[0.78rem] font-medium";

type FormState = "idle" | "sending" | "sent" | "handoff" | "error";

const emptySupport = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  organisation: "",
  profile: supporterProfiles[0],
  supportType: supportTypes[0],
  domain: supportDomains[supportDomains.length - 2],
  amount: "",
  material: "",
  message: "",
  consent: false,
  website: "",
};

const emptyVolunteer = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  profession: "",
  interests: "",
  participation: volunteering.participationTypes[0],
  availability: "",
  message: "",
  consent: false,
  website: "",
};

/** Écran de confirmation partagé par les deux formulaires. */
const Confirmation = ({
  state,
  label,
  text,
  onReset,
}: {
  state: FormState;
  label: string;
  text: string;
  onReset: () => void;
}) => (
  <div className="rounded-[2rem] border border-black/[0.06] bg-white p-8 text-center md:p-12">
    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-black/[0.07]">
      <CheckCircle2 size={24} className="text-brand" strokeWidth={1.8} />
    </div>
    <p className="text-ink-mute text-[0.72rem] tracking-[0.22em] uppercase">
      {state === "sent" ? label : "Message préparé"}
    </p>
    <p className="text-ink mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed">
      {state === "sent"
        ? text
        : "Votre proposition a été ouverte dans votre application de messagerie. Cliquez sur Envoyer pour la transmettre à l'ISAJ."}
    </p>
    <button
      type="button"
      onClick={onReset}
      className="text-ink mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-black/[0.08] px-6 text-[0.9rem] font-medium transition-colors hover:bg-black/[0.03]"
    >
      Envoyer une autre proposition
    </button>
  </div>
);

const ErrorNote = () => (
  <p
    role="alert"
    className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-[0.88rem] leading-relaxed text-red-700"
  >
    L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez, ou écrivez
    directement à{" "}
    <a
      href={`mailto:${contactDetails.email}`}
      className="font-medium break-all underline underline-offset-2"
    >
      {contactDetails.email}
    </a>
    .
  </p>
);

/** Champ piège anti-robot : invisible pour les visiteurs. */
const Honeypot = ({
  value,
  onChange,
  id,
}: {
  value: string;
  onChange: (v: string) => void;
  id: string;
}) => (
  <div aria-hidden="true" className="hidden">
    <label htmlFor={id}>Ne pas remplir</label>
    <input
      id={id}
      type="text"
      tabIndex={-1}
      autoComplete="off"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const SupportPageContent = () => {
  const [supportState, setSupportState] = useState<FormState>("idle");
  const [volunteerState, setVolunteerState] = useState<FormState>("idle");
  const [supportData, setSupportData] = useState(emptySupport);
  const [volunteerData, setVolunteerData] = useState(emptyVolunteer);
  const startedAt = useRef(Date.now());

  // Un bouton « Soutenir ce projet » arrive avec le domaine déjà choisi.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("domaine");
    if (requested && supportDomains.includes(requested)) {
      setSupportData((previous) => ({ ...previous, domain: requested }));
    }
  }, []);

  const handleSupport = async (event: React.FormEvent) => {
    event.preventDefault();
    setSupportState("sending");
    const body = [
      "INSTITUTION LE SAINT JUSTIEN (ISAJ) — PROPOSITION DE SOUTIEN",
      "",
      `Nom complet : ${supportData.fullName.trim()}`,
      `Adresse e-mail : ${supportData.email.trim()}`,
      `Téléphone / WhatsApp : ${supportData.phone.trim() || "Non communiqué"}`,
      `Pays : ${supportData.country.trim()}`,
      `Organisation / entreprise : ${supportData.organisation.trim() || "Non communiquée"}`,
      `Profil : ${supportData.profile}`,
      `Type de soutien : ${supportData.supportType}`,
      `Projet ou domaine : ${supportData.domain}`,
      `Montant envisagé : ${supportData.amount.trim() || "Non précisé"}`,
      `Nature du matériel proposé : ${supportData.material.trim() || "Non précisée"}`,
      "",
      "MESSAGE",
      supportData.message.trim() || "Aucune précision complémentaire.",
      "",
      `Consentement au contact : ${supportData.consent ? "oui" : "non"}`,
    ].join("\n");

    const result = await submitForm({
      subject: `Proposition de soutien — ${supportData.fullName.trim()}`,
      body,
      fromName: supportData.fullName.trim(),
      replyTo: supportData.email.trim(),
      honeypot: supportData.website,
      startedAt: startedAt.current,
      fields: {
        nom_complet: supportData.fullName.trim(),
        email: supportData.email.trim(),
        telephone: supportData.phone.trim(),
        pays: supportData.country.trim(),
        organisation: supportData.organisation.trim(),
        profil: supportData.profile,
        type_de_soutien: supportData.supportType,
        projet_ou_domaine: supportData.domain,
        montant_envisage: supportData.amount.trim(),
        materiel_propose: supportData.material.trim(),
      },
    });
    setSupportState(
      result === "sent" ? "sent" : result === "handoff" ? "handoff" : "error",
    );
  };

  const handleVolunteer = async (event: React.FormEvent) => {
    event.preventDefault();
    setVolunteerState("sending");
    const body = [
      "INSTITUTION LE SAINT JUSTIEN (ISAJ) — PROPOSITION DE BÉNÉVOLAT / EXPERTISE",
      "",
      `Nom complet : ${volunteerData.fullName.trim()}`,
      `Adresse e-mail : ${volunteerData.email.trim()}`,
      `Téléphone / WhatsApp : ${volunteerData.phone.trim() || "Non communiqué"}`,
      `Pays : ${volunteerData.country.trim() || "Non communiqué"}`,
      `Profession / domaine de compétence : ${volunteerData.profession.trim()}`,
      `Domaines d'intérêt : ${volunteerData.interests.trim() || "Non précisés"}`,
      `Type de participation : ${volunteerData.participation}`,
      `Disponibilité : ${volunteerData.availability.trim() || "Non précisée"}`,
      "",
      "MESSAGE",
      volunteerData.message.trim() || "Aucune précision complémentaire.",
      "",
      `Consentement au contact : ${volunteerData.consent ? "oui" : "non"}`,
    ].join("\n");

    const result = await submitForm({
      subject: `Proposition de bénévolat — ${volunteerData.fullName.trim()}`,
      body,
      fromName: volunteerData.fullName.trim(),
      replyTo: volunteerData.email.trim(),
      honeypot: volunteerData.website,
      startedAt: startedAt.current,
      fields: {
        nom_complet: volunteerData.fullName.trim(),
        email: volunteerData.email.trim(),
        telephone: volunteerData.phone.trim(),
        pays: volunteerData.country.trim(),
        profession: volunteerData.profession.trim(),
        domaines_interet: volunteerData.interests.trim(),
        type_de_participation: volunteerData.participation,
        disponibilite: volunteerData.availability.trim(),
      },
    });
    setVolunteerState(
      result === "sent" ? "sent" : result === "handoff" ? "handoff" : "error",
    );
  };

  const ways = support.ways.map((way, index) => ({
    ...way,
    icon: wayIcons[index] ?? HandHeart,
  }));

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-16">
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

        <div className="mt-10 grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-ink-mute mb-4 text-[0.72rem] tracking-[0.22em] uppercase">
              Soutenir l'ISAJ
            </p>
            <h1 className="tracking-headline balance text-ink text-[2rem] leading-[1.02] font-semibold sm:text-5xl md:text-[4.5rem]">
              Soutenir l'Institution{" "}
              <span className="font-display text-brand-deep font-normal italic">
                Le Saint Justien.
              </span>
            </h1>
          </div>
          <div className="space-y-4 lg:col-span-5">
            {support.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="pretty text-ink-mute text-[0.98rem] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <h2 className="tracking-headline text-ink mb-12 text-[1.75rem] leading-[1.05] font-semibold sm:text-4xl">
            {support.waysTitle}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ways.map((way, index) => (
              <article
                key={way.title}
                className="rounded-[1.5rem] border border-black/[0.06] bg-[var(--color-paper)] p-7 lg:p-8"
              >
                <div className="flex items-start justify-between">
                  <way.icon size={22} strokeWidth={1.6} className="text-brand" />
                  <span className="tabular text-ink-mute text-[0.7rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-ink mt-8 text-[1.25rem] leading-tight font-medium">
                  {way.title}
                </h3>
                <p className="text-ink-mute mt-2 text-[0.92rem] leading-relaxed">
                  {way.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Proposition de soutien ---------- */}
      <section
        id="proposition"
        className="mx-auto max-w-4xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <h2 className="tracking-headline text-ink mb-8 text-[1.75rem] leading-[1.05] font-semibold sm:text-4xl">
          {support.formTitle}
        </h2>

        {supportState === "sent" || supportState === "handoff" ? (
          <Confirmation
            state={supportState}
            label="Proposition reçue"
            text={support.confirmation}
            onReset={() => {
              startedAt.current = Date.now();
              setSupportData(emptySupport);
              setSupportState("idle");
            }}
          />
        ) : (
          <form
            onSubmit={handleSupport}
            className="space-y-6 rounded-[2rem] border border-black/[0.06] bg-white p-6 sm:p-8 md:p-12"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="s-name" className={labelClass}>
                  Nom complet *
                </label>
                <input
                  id="s-name"
                  required
                  autoComplete="name"
                  className={inputClass}
                  value={supportData.fullName}
                  onChange={(e) =>
                    setSupportData({ ...supportData, fullName: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="s-email" className={labelClass}>
                  Adresse e-mail *
                </label>
                <input
                  id="s-email"
                  required
                  type="email"
                  autoComplete="email"
                  className={inputClass}
                  value={supportData.email}
                  onChange={(e) =>
                    setSupportData({ ...supportData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="s-phone" className={labelClass}>
                  Téléphone / WhatsApp{" "}
                  <span className="text-ink-mute/60">(optionnel)</span>
                </label>
                <input
                  id="s-phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputClass}
                  value={supportData.phone}
                  onChange={(e) =>
                    setSupportData({ ...supportData, phone: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="s-country" className={labelClass}>
                  Pays *
                </label>
                <input
                  id="s-country"
                  required
                  autoComplete="country-name"
                  className={inputClass}
                  value={supportData.country}
                  onChange={(e) =>
                    setSupportData({ ...supportData, country: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="s-org" className={labelClass}>
                Organisation / entreprise{" "}
                <span className="text-ink-mute/60">(optionnel)</span>
              </label>
              <input
                id="s-org"
                autoComplete="organization"
                className={inputClass}
                value={supportData.organisation}
                onChange={(e) =>
                  setSupportData({
                    ...supportData,
                    organisation: e.target.value,
                  })
                }
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="s-profile" className={labelClass}>
                  Je suis
                </label>
                <select
                  id="s-profile"
                  className={`${inputClass} appearance-none`}
                  value={supportData.profile}
                  onChange={(e) =>
                    setSupportData({ ...supportData, profile: e.target.value })
                  }
                >
                  {supporterProfiles.map((profile) => (
                    <option key={profile}>{profile}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="s-type" className={labelClass}>
                  Type de soutien
                </label>
                <select
                  id="s-type"
                  className={`${inputClass} appearance-none`}
                  value={supportData.supportType}
                  onChange={(e) =>
                    setSupportData({
                      ...supportData,
                      supportType: e.target.value,
                    })
                  }
                >
                  {supportTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="s-domain" className={labelClass}>
                Projet ou domaine
              </label>
              <select
                id="s-domain"
                className={`${inputClass} appearance-none`}
                value={supportData.domain}
                onChange={(e) =>
                  setSupportData({ ...supportData, domain: e.target.value })
                }
              >
                {supportDomains.map((domain) => (
                  <option key={domain}>{domain}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="s-amount" className={labelClass}>
                  Montant envisagé{" "}
                  <span className="text-ink-mute/60">(optionnel)</span>
                </label>
                <input
                  id="s-amount"
                  className={inputClass}
                  value={supportData.amount}
                  onChange={(e) =>
                    setSupportData({ ...supportData, amount: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="s-material" className={labelClass}>
                  Nature du matériel proposé{" "}
                  <span className="text-ink-mute/60">(optionnel)</span>
                </label>
                <input
                  id="s-material"
                  className={inputClass}
                  value={supportData.material}
                  onChange={(e) =>
                    setSupportData({ ...supportData, material: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="s-message" className={labelClass}>
                Message / précisions
              </label>
              <textarea
                id="s-message"
                rows={5}
                className={`${inputClass} resize-none`}
                value={supportData.message}
                onChange={(e) =>
                  setSupportData({ ...supportData, message: e.target.value })
                }
              />
            </div>

            <label className="flex items-start gap-3 text-[0.88rem] leading-relaxed">
              <input
                type="checkbox"
                required
                checked={supportData.consent}
                onChange={(e) =>
                  setSupportData({ ...supportData, consent: e.target.checked })
                }
                className="accent-brand mt-1 h-4 w-4 shrink-0"
              />
              <span className="text-ink-mute">{support.consent}</span>
            </label>

            <Honeypot
              id="s-website"
              value={supportData.website}
              onChange={(v) => setSupportData({ ...supportData, website: v })}
            />

            {supportState === "error" && <ErrorNote />}

            <button
              type="submit"
              disabled={supportState === "sending"}
              className="group bg-ink hover:bg-ink-soft flex min-h-13 w-full items-center justify-center gap-2 rounded-full text-[0.95rem] font-medium text-white transition-all active:scale-[0.99] disabled:opacity-60"
            >
              {supportState === "sending"
                ? "Envoi en cours…"
                : support.submitLabel}
              <Send size={16} />
            </button>
          </form>
        )}
      </section>

      {/* ---------- Bénévolat et expertise ---------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <h2 className="tracking-headline text-ink text-[1.75rem] leading-[1.05] font-semibold sm:text-4xl">
            {volunteering.title}
          </h2>
          <p className="text-ink-mute mt-6 max-w-2xl text-[1rem] leading-[1.75]">
            {volunteering.intro}
          </p>

          <div className="mt-10">
            {volunteerState === "sent" || volunteerState === "handoff" ? (
              <Confirmation
                state={volunteerState}
                label="Proposition reçue"
                text={volunteering.confirmation}
                onReset={() => {
                  startedAt.current = Date.now();
                  setVolunteerData(emptyVolunteer);
                  setVolunteerState("idle");
                }}
              />
            ) : (
              <form
                onSubmit={handleVolunteer}
                className="space-y-6 rounded-[2rem] border border-black/[0.06] bg-[var(--color-paper)] p-6 sm:p-8 md:p-10"
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="v-name" className={labelClass}>
                      Nom complet *
                    </label>
                    <input
                      id="v-name"
                      required
                      autoComplete="name"
                      className={inputClass}
                      value={volunteerData.fullName}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          fullName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="v-email" className={labelClass}>
                      Adresse e-mail *
                    </label>
                    <input
                      id="v-email"
                      required
                      type="email"
                      autoComplete="email"
                      className={inputClass}
                      value={volunteerData.email}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="v-phone" className={labelClass}>
                      Téléphone / WhatsApp{" "}
                      <span className="text-ink-mute/60">(optionnel)</span>
                    </label>
                    <input
                      id="v-phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputClass}
                      value={volunteerData.phone}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="v-country" className={labelClass}>
                      Pays
                    </label>
                    <input
                      id="v-country"
                      autoComplete="country-name"
                      className={inputClass}
                      value={volunteerData.country}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          country: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="v-profession" className={labelClass}>
                      Profession / domaine de compétence
                    </label>
                    <input
                      id="v-profession"
                      className={inputClass}
                      value={volunteerData.profession}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          profession: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="v-interests" className={labelClass}>
                      Domaines d'intérêt
                    </label>
                    <input
                      id="v-interests"
                      className={inputClass}
                      value={volunteerData.interests}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          interests: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="v-participation" className={labelClass}>
                      Type de participation
                    </label>
                    <select
                      id="v-participation"
                      className={`${inputClass} appearance-none`}
                      value={volunteerData.participation}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          participation: e.target.value,
                        })
                      }
                    >
                      {volunteering.participationTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="v-availability" className={labelClass}>
                      Disponibilité
                    </label>
                    <input
                      id="v-availability"
                      className={inputClass}
                      value={volunteerData.availability}
                      onChange={(e) =>
                        setVolunteerData({
                          ...volunteerData,
                          availability: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="v-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="v-message"
                    rows={4}
                    className={`${inputClass} resize-none`}
                    value={volunteerData.message}
                    onChange={(e) =>
                      setVolunteerData({
                        ...volunteerData,
                        message: e.target.value,
                      })
                    }
                  />
                </div>

                <label className="flex items-start gap-3 text-[0.88rem] leading-relaxed">
                  <input
                    type="checkbox"
                    required
                    checked={volunteerData.consent}
                    onChange={(e) =>
                      setVolunteerData({
                        ...volunteerData,
                        consent: e.target.checked,
                      })
                    }
                    className="accent-brand mt-1 h-4 w-4 shrink-0"
                  />
                  <span className="text-ink-mute">{support.consent}</span>
                </label>

                <Honeypot
                  id="v-website"
                  value={volunteerData.website}
                  onChange={(v) =>
                    setVolunteerData({ ...volunteerData, website: v })
                  }
                />

                {volunteerState === "error" && <ErrorNote />}

                <button
                  type="submit"
                  disabled={volunteerState === "sending"}
                  className="group bg-ink hover:bg-ink-soft flex min-h-13 w-full items-center justify-center gap-2 rounded-full text-[0.95rem] font-medium text-white transition-all active:scale-[0.99] disabled:opacity-60"
                >
                  {volunteerState === "sending"
                    ? "Envoi en cours…"
                    : volunteering.submitLabel}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          <p className="text-ink-mute mt-6 text-[0.88rem] leading-relaxed">
            {volunteering.note}
          </p>
        </div>
      </section>

      {/* ---------- Transparence ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-10 rounded-[2rem] border border-black/[0.06] bg-white p-8 md:grid-cols-12 md:p-14">
          <div className="md:col-span-4">
            <ShieldCheck size={24} className="text-brand" />
            <h2 className="tracking-headline text-ink mt-6 text-[1.6rem] leading-[1.08] font-semibold md:text-[2rem]">
              {support.transparency.title}
            </h2>
          </div>
          <p className="text-ink-mute text-[1rem] leading-[1.8] md:col-span-8">
            {support.transparency.text}
          </p>
        </div>
      </section>
    </>
  );
};

export default SupportPageContent;
