'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

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
      <Image src="/images/fachada-depois-01.jpg" alt="Fachada renovada após retrofit" fill sizes="(max-width: 900px) 100vw, 55vw" />
      <div className="before-layer"><Image src="/images/fachada-antes-01.jpg" alt="Fachada antes do retrofit, com manchas e desgaste" fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
      <span className="compare-label before-label">Antes</span><span className="compare-label after-label">Depois</span>
      <div className="compare-line" aria-hidden="true"><i>↔</i></div>
      <label className="sr-only" htmlFor="comparison">Comparar fachada antes e depois</label>
      <input id="comparison" type="range" min="8" max="92" value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-valuetext={`${position}% da imagem antes`} />
    </div>
  );
}
