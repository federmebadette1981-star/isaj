import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
};

export type GalleryVideo = {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
};

type Props = {
  items: GalleryItem[];
  videos: GalleryVideo[];
};

const ALL = "Tout";

const GalleryContentPage = ({ items, videos }: Props) => {
  const categories = [ALL, ...Array.from(new Set(items.map((i) => i.category)))];
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeVideoId, setActiveVideoId] = useState(videos[0]?.id ?? "");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const filteredItems =
    activeCategory === ALL
      ? items
      : items.filter((item) => item.category === activeCategory);

  const activeVideo = videos.find((v) => v.id === activeVideoId) ?? videos[0];

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight")
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % filteredItems.length,
        );
      if (event.key === "ArrowLeft")
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + filteredItems.length) % filteredItems.length,
        );
    };

    window.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex, filteredItems.length]);

  const handleNext = () =>
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % filteredItems.length,
    );
  const handlePrev = () =>
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + filteredItems.length) % filteredItems.length,
    );

  const handleSelectVideo = (id: string) => {
    if (id === activeVideoId) return;
    setActiveVideoId(id);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else void videoRef.current.play();
  };

  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8 lg:pt-16 lg:pb-32">
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

      <div className="mt-10 mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <p className="text-ink-mute mb-4 text-[0.72rem] tracking-[0.22em] uppercase">
            Galerie · {items.length} photographies
          </p>
          <h1 className="tracking-headline balance text-ink text-[2rem] leading-[1.02] font-semibold sm:text-5xl md:text-[5.5rem]">
            L'ISAJ en{" "}
            <span className="font-display text-brand-deep font-normal italic">
              images.
            </span>
          </h1>
        </div>
        <p className="pretty text-ink-mute max-w-md text-[1rem] leading-relaxed lg:col-span-4">
          L'établissement, la vie en classe, nos élèves, notre équipe éducative,
          les activités et les événements de l'Institution Le Saint Justien.
        </p>
      </div>

      <div className="mb-12 flex flex-wrap items-center gap-x-1 gap-y-2 border-y border-black/[0.07] py-4">
        <span className="text-ink-mute mr-2 hidden text-[0.72rem] tracking-[0.18em] uppercase sm:inline">
          Filtrer
        </span>
        {categories.map((category) => {
          const active = activeCategory === category;
          const count =
            category === ALL
              ? items.length
              : items.filter((item) => item.category === category).length;
          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(null);
              }}
              aria-pressed={active}
              className={`group inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 text-[0.88rem] font-medium transition-all ${
                active
                  ? "bg-ink text-white"
                  : "text-ink-mute hover:text-ink hover:bg-black/[0.04]"
              }`}
            >
              {category}
              <span
                className={`tabular text-[0.7rem] ${active ? "text-white/55" : "text-ink-mute/70"}`}
              >
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Agrandir : ${item.title}`}
            className="group bg-ink relative mb-5 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-[1.25rem] text-left lg:mb-6"
          >
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className="h-auto w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="from-ink/85 via-ink/30 pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t to-transparent p-6">
              <div>
                <p className="text-[0.65rem] tracking-[0.18em] text-white/65 uppercase">
                  {item.category}
                </p>
                <h2 className="font-display mt-1 text-[1.15rem] leading-tight font-medium text-white">
                  {item.title}
                </h2>
              </div>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md">
                <ArrowUpRight size={15} />
              </span>
            </div>
          </button>
        ))}
      </div>

      {videos.length > 0 && activeVideo && (
        <div className="mt-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-ink-mute mb-4 text-[0.72rem] tracking-[0.22em] uppercase">
              Vidéos
            </p>
            <h2 className="tracking-headline balance text-ink text-[1.75rem] leading-[1.05] font-semibold sm:text-4xl">
              L'école en{" "}
              <span className="font-display text-brand-deep font-normal italic">
                mouvement.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="bg-ink shadow-ink-lg relative overflow-hidden rounded-[2rem]">
                <div className="relative aspect-video w-full">
                  <video
                    ref={videoRef}
                    key={activeVideo.src}
                    poster={activeVideo.poster}
                    className="h-full w-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    preload="none"
                    playsInline
                    controls={isPlaying}
                  >
                    <source src={activeVideo.src} type="video/mp4" />
                  </video>

                  {!isPlaying && (
                    <div className="bg-ink/50 absolute inset-0 flex flex-col items-center justify-center backdrop-blur-[2px]">
                      <button
                        onClick={handlePlayPause}
                        className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20"
                        aria-label={`Lire la vidéo : ${activeVideo.title}`}
                      >
                        <Play size={28} className="ml-1 text-white" fill="white" />
                      </button>
                      <div className="mt-6 max-w-sm px-8 text-center">
                        <h3 className="font-display text-[1.35rem] leading-tight font-medium text-white italic">
                          {activeVideo.title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4 px-6 py-4">
                  <div>
                    <p className="text-[0.92rem] font-medium text-white">
                      {activeVideo.title}
                    </p>
                    <p className="text-[0.78rem] text-white/50">
                      {activeVideo.description}
                    </p>
                  </div>
                  {isPlaying && (
                    <button
                      type="button"
                      onClick={handlePlayPause}
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white"
                      aria-label="Mettre en pause"
                    >
                      <Pause size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 lg:col-span-4 lg:flex-col">
              {videos.map((video, idx) => {
                const active = video.id === activeVideoId;
                return (
                  <button
                    key={video.id}
                    onClick={() => handleSelectVideo(video.id)}
                    className={`group relative flex flex-1 flex-col overflow-hidden rounded-[1.25rem] text-left transition-all duration-300 lg:flex-none ${
                      active
                        ? "ring-brand ring-2 ring-offset-2"
                        : "ring-1 ring-black/[0.06] hover:ring-black/[0.12]"
                    }`}
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        src={video.poster}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="bg-ink/30 absolute inset-0" />
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-all ${
                            active ? "bg-brand" : "bg-white/20"
                          }`}
                        >
                          <Play size={13} className="ml-0.5 text-white" fill="white" />
                        </div>
                      </div>
                      <span className="tabular absolute top-3 left-3 text-[0.68rem] font-medium text-white/70">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="bg-white px-4 py-3">
                      <p
                        className={`text-[0.88rem] leading-snug font-medium transition-colors ${
                          active ? "text-brand-deep" : "text-ink group-hover:text-brand-deep"
                        }`}
                      >
                        {video.title}
                      </p>
                      <p className="text-ink-mute mt-0.5 text-[0.75rem]">
                        {video.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div
          className="bg-ink/95 fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md md:p-8"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Aperçu de la galerie"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 md:p-7">
            <p className="tabular text-[0.78rem] tracking-[0.18em] text-white/55 uppercase">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(filteredItems.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedIndex(null);
              }}
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white md:left-8"
            aria-label="Image précédente"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white md:right-8"
            aria-label="Image suivante"
          >
            <ChevronRight size={22} />
          </button>
          <div
            className="relative flex max-h-[88vh] w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={filteredItems[selectedIndex].image}
              alt={filteredItems[selectedIndex].alt}
              className="max-h-[74vh] max-w-full rounded-[1.25rem] object-contain"
            />
            <div className="mt-6 max-w-2xl px-4 text-center text-white">
              <p className="text-[0.7rem] tracking-[0.22em] text-white/45 uppercase">
                {filteredItems[selectedIndex].category}
              </p>
              <h2 className="font-display mt-2 text-[1.35rem] leading-tight font-medium md:text-[2rem]">
                {filteredItems[selectedIndex].title}
              </h2>
            </div>
          </div>
        </div>
      )}

      <div className="mt-20 grid grid-cols-1 items-center gap-6 rounded-[1.75rem] border border-black/[0.06] bg-white p-8 md:grid-cols-2 md:p-12">
        <div>
          <p className="text-ink-mute text-[0.72rem] tracking-[0.22em] uppercase">
            Visiter l'ISAJ
          </p>
          <h2 className="tracking-headline text-ink mt-3 text-[1.6rem] leading-[1.1] font-semibold md:text-[2.5rem]">
            Venez découvrir l'école{" "}
            <span className="font-display text-brand-deep font-normal italic">
              en personne.
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="/contact"
            className="group bg-ink hover:bg-ink-soft inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium text-white transition-all active:scale-[0.98]"
          >
            Nous contacter <ArrowUpRight size={16} />
          </a>
          <a
            href="/enrollment"
            className="text-ink-mute decoration-ink/15 hover:text-ink hover:decoration-ink inline-flex min-h-11 items-center text-[0.85rem] font-medium underline decoration-1 underline-offset-[6px] transition-colors"
          >
            Demande de préinscription
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryContentPage;
