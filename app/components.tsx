'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, Images, X } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';

const projectAlbums = [
  {
    category: 'Fachadas',
    title: 'Recuperação e retrofit de fachada',
    summary: 'Registros de inspeção e execução em altura para recuperação dos revestimentos e proteção da fachada.',
    cover: '/images/projetos/fachada-02-trabalho-em-altura.webp',
    coverAlt: 'Profissional executando serviço em altura na fachada de um edifício',
    photos: [
      {
        src: '/images/projetos/fachada-02-trabalho-em-altura.webp',
        alt: 'Profissional em trabalho vertical durante recuperação de fachada',
        caption: 'Execução em altura para recuperação e proteção dos revestimentos.',
      },
      {
        src: '/images/projetos/fachada-03-hidrojateamento.webp',
        alt: 'Profissional executando hidrojateamento em fachada com acesso por cordas',
        caption: 'Hidrojateamento da fachada para limpeza e preparação das superfícies.',
      },
      {
        src: '/images/projetos/fachada-04-selagem-trincas.webp',
        alt: 'Profissional executando a selagem de trincas na fachada de um edifício',
        caption: 'Tratamento e selagem de trincas antes da aplicação do acabamento.',
      },
      {
        src: '/images/projetos/fachada-05-pintura.webp',
        alt: 'Profissional realizando pintura de fachada com acesso por cordas',
        caption: 'Pintura da fachada após a preparação e o tratamento das superfícies.',
      },
      {
        src: '/images/projetos/fachada-01-detalhe.webp',
        alt: 'Plataforma suspensa posicionada na fachada para intervenção localizada',
        caption: 'Intervenção localizada com plataforma suspensa e acesso técnico à fachada.',
      },
    ],
  },
  {
    category: 'Recuperação estrutural',
    title: 'Recuperação estrutural',
    summary: 'Intervenções em pilares, vigas, lajes e elementos de concreto, incluindo reforço com fibra de carbono, injeção química e outras soluções definidas conforme o diagnóstico.',
    cover: '/images/projetos/fibra-carbono-pilar-01.webp',
    coverAlt: 'Aplicação de reforço com fibra de carbono ao redor de um pilar',
    photos: [
      {
        src: '/images/projetos/fibra-carbono-pilar-01.webp',
        alt: 'Reforço estrutural com fibra de carbono aplicado ao redor de um pilar',
        caption: 'Aplicação e consolidação do reforço com fibra de carbono no pilar.',
      },
      {
        src: '/images/projetos/estrutural-03-fibra-carbono-vigas-01.webp',
        alt: 'Vigas reforçadas com sistema de fibra de carbono',
        caption: 'Reforço estrutural de vigas com aplicação de compósito de fibra de carbono.',
      },
      {
        src: '/images/projetos/estrutural-04-fibra-carbono-vigas-02.webp',
        alt: 'Detalhe do reforço com fibra de carbono aplicado em vigas',
        caption: 'Detalhe do sistema de reforço com fibra de carbono aplicado às vigas.',
      },
      {
        src: '/images/projetos/estrutural-05-escoramento-vigas.webp',
        alt: 'Conjunto de escoras metálicas instalado sob as vigas de uma garagem',
        caption: 'Escoramento provisório das vigas para estabilização e segurança durante a intervenção.',
      },
      {
        src: '/images/projetos/estrutural-06-injecao-fissuras.webp',
        alt: 'Sistema de injeção química instalado em fissuras de uma viga',
        caption: 'Injeção química em viga para preenchimento de fissuras e recomposição da continuidade do elemento.',
      },
      {
        src: '/images/projetos/estrutural-02-injecao-vazios-01.webp',
        alt: 'Pontos de injeção química distribuídos em uma viga de concreto',
        caption: 'Instalação dos pontos de injeção para o preenchimento controlado de vazios na viga.',
      },
      {
        src: '/images/projetos/estrutural-07-injecao-vazios-02.webp',
        alt: 'Bicos instalados em uma viga para aplicação de material por injeção',
        caption: 'Distribuição dos pontos de injeção química para preenchimento de vazios no concreto.',
      },
      {
        src: '/images/projetos/estrutural-08-encamisamento-pilar.webp',
        alt: 'Armadura instalada ao redor de um pilar para execução de encamisamento estrutural',
        caption: 'Preparação da armadura para encamisamento do pilar e ampliação de sua seção resistente.',
      },
    ],
  },
  {
    category: 'Construções e áreas externas',
    title: 'Construção e revitalização de área externa',
    summary: 'Sequência executiva da escavação e fundações à alvenaria, laje, concretagem e entrega da área revitalizada.',
    cover: '/images/projetos/area-externa-09-concluida.webp',
    coverAlt: 'Área externa concluída com circulação, jardim e guarda-corpo',
    photos: [
      {
        src: '/images/projetos/area-externa-01-escavacao.webp',
        alt: 'Escavadeira preparando o terreno para a construção da área externa',
        caption: 'Escavação e preparação do terreno.',
      },
      {
        src: '/images/projetos/area-externa-02-fundacao.webp',
        alt: 'Fundação em execução com blocos e armaduras',
        caption: 'Execução das fundações e amarrações estruturais.',
      },
      {
        src: '/images/projetos/area-externa-03-alvenaria.webp',
        alt: 'Alvenaria estrutural em execução na área externa',
        caption: 'Elevação da alvenaria e organização dos novos espaços.',
      },
      {
        src: '/images/projetos/area-externa-04-elevacao-muros.webp',
        alt: 'Muros de blocos de concreto em construção',
        caption: 'Desenvolvimento dos muros e divisões da área externa.',
      },
      {
        src: '/images/projetos/area-externa-05-revestimento.webp',
        alt: 'Aplicação de revestimento em muro externo',
        caption: 'Aplicação do revestimento e regularização das superfícies.',
      },
      {
        src: '/images/projetos/area-externa-06-acabamento-muro.webp',
        alt: 'Muro externo após etapa de acabamento',
        caption: 'Acabamento e proteção do muro executado.',
      },
      {
        src: '/images/projetos/area-externa-07-laje.webp',
        alt: 'Laje com vigotas, blocos cerâmicos e armaduras preparada para concretagem',
        caption: 'Montagem da laje e preparação para a concretagem.',
      },
      {
        src: '/images/projetos/area-externa-08-concretagem.webp',
        alt: 'Circulação externa durante a concretagem',
        caption: 'Concretagem da nova circulação externa.',
      },
      {
        src: '/images/projetos/area-externa-09-concluida.webp',
        alt: 'Área externa concluída com circulação, jardim e guarda-corpo',
        caption: 'Área revitalizada após a conclusão dos serviços.',
      },
    ],
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="progress-bar" aria-hidden="true"><span /></div>
      <a className="brand" href="#inicio" aria-label="Randaza Engenharia - início" onClick={close}>
        <Image src="/images/logo-randaza-hd.png" alt="Randaza Engenharia" width={1514} height={1039} priority unoptimized />
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        <a href="#atuacao">Atuação</a><a href="#projetos">Projetos</a><a href="#metodo">Método</a><a href="#historia">História</a><a href="#contato">Contato</a>
      </nav>
      <a className="header-cta" href="https://wa.me/5511973431618" target="_blank" rel="noreferrer">Solicite um orçamento</a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <nav className="mobile-menu" id="mobile-menu" aria-label="Navegação móvel">
        {['atuacao', 'projetos', 'metodo', 'historia', 'contato'].map((item) => <a key={item} href={`#${item}`} onClick={close}>{item[0].toUpperCase() + item.slice(1)}</a>)}
      </nav>
    </header>
  );
}

export function MotionEnhancer() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty('--scroll-progress', max > 0 ? `${(window.scrollY / max) * 100}%` : '0%');
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-reveal]').forEach((node) => node.classList.add('is-visible'));
      return () => { root.classList.remove('motion-ready'); window.removeEventListener('scroll', updateProgress); };
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });
    document.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node));
    return () => { root.classList.remove('motion-ready'); observer.disconnect(); window.removeEventListener('scroll', updateProgress); };
  }, []);
  return null;
}

export function BeforeAfter() {
  const [position, setPosition] = useState(52);
  return (
    <div className="before-after" style={{ '--split': `${position}%` } as React.CSSProperties}>
      <Image src="/images/fachada-depois-original.png" alt="Fachada renovada após retrofit" fill sizes="(max-width: 680px) 100vw, (max-width: 980px) 40vw, 430px" />
      <div className="before-layer"><Image src="/images/fachada-antes-original.png" alt="Fachada antes do retrofit, com manchas e desgaste" fill sizes="(max-width: 680px) 100vw, (max-width: 980px) 40vw, 430px" /></div>
      <span className="compare-label before-label">Antes</span><span className="compare-label after-label">Depois</span>
      <div className="compare-line" aria-hidden="true"><i>↔</i></div>
      <label className="sr-only" htmlFor="comparison">Comparar fachada antes e depois</label>
      <input id="comparison" type="range" min="8" max="92" value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-valuetext={`${position}% da imagem antes`} />
    </div>
  );
}

export function ProjectAlbums() {
  const [activeAlbum, setActiveAlbum] = useState<number | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openAlbum = (albumIndex: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActivePhoto(0);
    setActiveAlbum(albumIndex);
  };

  const closeAlbum = () => setActiveAlbum(null);

  const movePhoto = (direction: number) => {
    if (activeAlbum === null) return;
    const total = projectAlbums[activeAlbum].photos.length;
    setActivePhoto((current) => (current + direction + total) % total);
  };

  useEffect(() => {
    if (activeAlbum === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveAlbum(null);
      if (event.key === 'ArrowLeft') {
        setActivePhoto((current) => {
          const total = projectAlbums[activeAlbum].photos.length;
          return (current - 1 + total) % total;
        });
      }
      if (event.key === 'ArrowRight') {
        setActivePhoto((current) => {
          const total = projectAlbums[activeAlbum].photos.length;
          return (current + 1) % total;
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [activeAlbum]);

  const album = activeAlbum === null ? null : projectAlbums[activeAlbum];
  const photo = album?.photos[activePhoto];

  return (
    <section className="project-albums" aria-labelledby="project-albums-title">
      <div className="project-albums-head" data-reveal>
        <p className="eyebrow dark">Novos registros de obra</p>
        <h3 id="project-albums-title">Projetos vistos por inteiro.</h3>
        <p>Abra os álbuns para acompanhar etapas, métodos executivos e resultados em campo.</p>
      </div>

      <div className="album-grid">
        {projectAlbums.map((item, albumIndex) => (
          <article className="album-card" key={item.title} data-reveal>
            <button
              className="album-card-media"
              type="button"
              onClick={(event) => openAlbum(albumIndex, event.currentTarget)}
              aria-label={`Abrir álbum ${item.title}`}
            >
              <Image src={item.cover} alt={item.coverAlt} fill sizes="(max-width: 680px) 100vw, 50vw" quality={90} style={{ objectFit: 'contain' }} />
              <span className="album-count"><Images aria-hidden="true" />{item.photos.length} fotos</span>
            </button>
            <div className="album-card-copy">
              <p>{item.category}</p>
              <h4>{item.title}</h4>
              <span>{item.summary}</span>
              <button className="album-open" type="button" onClick={(event) => openAlbum(albumIndex, event.currentTarget)}>
                Ver álbum <ArrowUpRight aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {album && photo && (
        <div className="album-lightbox" role="dialog" aria-modal="true" aria-labelledby="active-album-title" onMouseDown={(event) => event.target === event.currentTarget && closeAlbum()}>
          <div className="album-dialog">
            <header className="album-dialog-head">
              <div>
                <p>{album.category}</p>
                <h2 id="active-album-title">{album.title}</h2>
              </div>
              <button ref={closeButtonRef} type="button" onClick={closeAlbum} aria-label="Fechar álbum"><X aria-hidden="true" /></button>
            </header>

            <div className="album-stage">
              <Image key={photo.src} src={photo.src} alt={photo.alt} fill sizes="(max-width: 680px) 100vw, 1100px" quality={92} style={{ objectFit: 'contain' }} />
              <button className="album-nav album-prev" type="button" onClick={() => movePhoto(-1)} aria-label="Foto anterior"><ArrowLeft aria-hidden="true" /></button>
              <button className="album-nav album-next" type="button" onClick={() => movePhoto(1)} aria-label="Próxima foto"><ArrowRight aria-hidden="true" /></button>
            </div>

            <div className="album-caption" aria-live="polite">
              <p>{photo.caption}</p>
              <span>{String(activePhoto + 1).padStart(2, '0')} / {String(album.photos.length).padStart(2, '0')}</span>
            </div>

            <div className="album-thumbnails" aria-label="Fotos do álbum">
              {album.photos.map((item, photoIndex) => (
                <button
                  className={photoIndex === activePhoto ? 'is-active' : ''}
                  type="button"
                  key={item.src}
                  onClick={() => setActivePhoto(photoIndex)}
                  aria-label={`Ver foto ${photoIndex + 1}: ${item.caption}`}
                  aria-current={photoIndex === activePhoto ? 'true' : undefined}
                >
                  <Image src={item.src} alt="" fill sizes="90px" style={{ objectFit: 'contain' }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
