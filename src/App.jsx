import React, { useCallback, useEffect, useState } from 'react';
import {
  ArrowDown, ArrowLeft, ArrowRight, BookOpen, Check, ChevronDown, ChevronLeft,
  ChevronRight, CircleHelp, Clock3, Command, Expand, ExternalLink, FileText,
  FlaskConical, Layers3, Maximize2, Minimize2, PanelLeft, Play, RotateCcw,
  Search, Sparkles, X
} from 'lucide-react';
import { chapters, synthesis } from './data.js';

function Brand() {
  return <div className="brand"><div className="brand-mark"><Layers3 size={18}/></div><div><b>DATA<span>LAB</span></b><small>DATABASE FIELD NOTES</small></div></div>;
}

function Flow({ items, accent }) {
  return <div className="flowline">{items.map((item, i) => <React.Fragment key={item}><div className={`flow-node ${i === items.length - 1 ? 'flow-node-end' : ''}`}><span>{String(i + 1).padStart(2, '0')}</span><b>{item}</b></div>{i < items.length - 1 && <div className={`flow-arrow ${accent}`}><ArrowRight size={16}/></div>}</React.Fragment>)}</div>;
}

function MiniBars({ accent }) {
  return <div className={`signal-bars ${accent}`} aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>;
}

function Sidebar({ active, onSelect, mode, setMode, onClose }) {
  return <aside className="sidebar">
    <div className="sidebar-top"><Brand/><button className="icon-btn mobile-close" onClick={onClose} aria-label="Fechar menu"><X size={18}/></button></div>
    <div className="side-label">CADERNOS / 2026</div>
    <nav className="chapter-nav" aria-label="Navegação dos cadernos">
      {chapters.map((c, i) => <button key={c.id} className={`nav-chapter ${active === i ? 'active' : ''}`} onClick={() => onSelect(i)}>
        <span className={`nav-index ${c.accent}`}>{c.id}</span><span className="nav-copy"><b>{c.short}</b><small>{c.week}</small></span>{active === i && <span className="nav-active-dot"/>}
      </button>)}
    </nav>
    <div className="side-bottom">
      <div className="side-progress"><div className="side-progress-head"><span>PROGRESSO</span><b>{Math.round(((active + 1) / chapters.length) * 100)}%</b></div><div className="progress-track"><i style={{width: `${((active + 1) / chapters.length) * 100}%`}}/></div><small>{active + 1} de {chapters.length} capítulos</small></div>
      <div className="mode-switch"><button className={mode === 'present' ? 'selected' : ''} onClick={() => setMode('present')}><Play size={14}/> Apresentar</button><button className={mode === 'explore' ? 'selected' : ''} onClick={() => setMode('explore')}><BookOpen size={14}/> Explorar</button></div>
      <div className="side-foot"><span className="status-dot"/> HTML · CSS · REACT <span>v1.0</span></div>
    </div>
  </aside>;
}

function Topbar({ mode, setMode, onFullscreen, onMenu, active }) {
  return <header className="topbar">
    <button className="icon-btn mobile-menu" onClick={onMenu} aria-label="Abrir menu"><PanelLeft size={18}/></button>
    <div className="breadcrumb"><span>DATA LAB</span><ChevronRight size={13}/><b>{chapters[active].short.toUpperCase()}</b></div>
    <div className="top-actions">
      <div className="mode-pill"><button className={mode === 'present' ? 'on' : ''} onClick={() => setMode('present')}><Play size={13}/> Apresentação</button><button className={mode === 'explore' ? 'on' : ''} onClick={() => setMode('explore')}><BookOpen size={13}/> Exploração</button></div>
      <button className="icon-btn fullscreen-btn" onClick={onFullscreen} aria-label="Tela cheia"><Maximize2 size={16}/></button>
    </div>
  </header>;
}

function ChapterHero({ chapter, active, total }) {
  return <section className={`chapter-hero accent-${chapter.accent}`}>
    <div className="hero-grid"/>
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-line"/>{chapter.week} <span className="eyebrow-dot"/> CADERNO {chapter.id}</div>
      <h1>{chapter.title}</h1>
      <p className="hero-subtitle">{chapter.subtitle}</p>
      <p className="hero-summary">{chapter.summary}</p>
      <div className="hero-tags">{chapter.concepts.map(tag => <span key={tag}>{tag}</span>)}</div>
    </div>
    <div className="hero-art">
      <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
      <div className="core-card"><span className="core-icon">{chapter.icon}</span><b>{chapter.id}</b><small>DATA FLOW</small></div>
      <div className="float-chip chip-one"><span className="chip-dot"/> ingest <b>OK</b></div>
      <div className="float-chip chip-two"><Sparkles size={13}/><span>context aware</span></div>
      <div className="float-chip chip-three"><span className="mini-wave">∿</span><span>pipeline</span></div>
      <MiniBars accent={chapter.accent}/>
    </div>
    <div className="hero-index"><b>{String(active + 1).padStart(2,'0')}</b><span>/ {String(total).padStart(2,'0')}</span></div>
  </section>;
}

function Evidence({ chapter }) {
  return <div className="evidence-grid">{chapter.evidence.map((e, i) => <article className="evidence-card" key={e.label}>
    <div className="evidence-top"><span className="evidence-number">0{i + 1}</span><span className="evidence-mark"><Check size={13}/></span></div>
    <small>{e.label}</small><strong>{e.value}</strong><p>{e.detail}</p>
  </article>)}</div>;
}

function ChapterDetails({ chapter, mode }) {
  const [openTerm, setOpenTerm] = useState(0);
  return <div className={`content-layout ${mode === 'present' ? 'presentation-layout' : ''}`}>
    <div className="main-column">
      <section className="section-block">
        <div className="section-heading"><div><span className="section-kicker">01 / COMO FUNCIONA</span><h2>O fluxo em uma visão</h2></div><span className="section-icon"><Layers3 size={18}/></span></div>
        <Flow items={chapter.flow} accent={chapter.accent}/>
      </section>
      <section className="section-block">
        <div className="section-heading"><div><span className="section-kicker">02 / EVIDÊNCIAS DA PRÁTICA</span><h2>O que foi observado</h2></div><span className="section-icon"><FlaskConical size={18}/></span></div>
        <Evidence chapter={chapter}/>
      </section>
      {mode === 'explore' && <section className="section-block detail-section">
        <div className="section-heading"><div><span className="section-kicker">03 / DETALHAMENTO</span><h2>O que foi desenvolvido</h2></div><span className="section-icon"><FileText size={18}/></span></div>
        <p className="detail-copy">{chapter.detail}</p>
        {chapter.caution && <div className="caution-note"><CircleHelp size={17}/><p>{chapter.caution}</p></div>}
      </section>}
    </div>
    <aside className="right-column">
      <div className="insight-card"><div className="insight-label"><Sparkles size={14}/> IDEIA-CHAVE</div><p>{chapter.takeaway}</p><div className="insight-rule"><i/></div><small>SÍNTESE DO CADERNO</small></div>
      {mode === 'explore' && <div className="terms-card"><div className="terms-head"><div><span className="section-kicker">GLOSSÁRIO</span><h3>Conceitos essenciais</h3></div><span className="terms-count">{chapter.terms.length} termos</span></div>
        {chapter.terms.map(([term, desc], i) => <div className={`term-item ${openTerm === i ? 'expanded' : ''}`} key={term}>
          <button onClick={() => setOpenTerm(openTerm === i ? -1 : i)}><span>{term}</span><ChevronDown size={15}/></button>
          {openTerm === i && <p>{desc}</p>}
        </div>)}
      </div>}
      <div className="note-card"><div className="note-icon"><Clock3 size={15}/></div><div><b>{mode === 'present' ? 'Ponto de fala' : 'Conexão com o próximo tema'}</b><p>{mode === 'present' ? 'Explique o problema, mostre o fluxo e destaque uma evidência concreta.' : 'Cada etapa prepara uma parte da cadeia de dados: representação, preparação, armazenamento, controle e execução.'}</p></div></div>
    </aside>
  </div>;
}

function Overview({ onSelect, setMode }) {
  return <div className="overview">
    <section className="overview-hero">
      <div className="overview-glow"/><div className="eyebrow"><span className="eyebrow-line"/> VISÃO GERAL <span className="eyebrow-dot"/> 5 CADERNOS</div>
      <h1>Do dado bruto<br/>à <em>inteligência confiável.</em></h1>
      <p>Uma jornada prática por cinco fundamentos da engenharia de dados — da busca semântica à automação de pipelines.</p>
      <div className="overview-buttons"><button className="primary-btn" onClick={() => {onSelect(0); setMode('present')}}><Play size={15} fill="currentColor"/> Iniciar apresentação <ArrowRight size={15}/></button><button className="secondary-btn" onClick={() => setMode('explore')}><BookOpen size={15}/> Explorar os cadernos</button></div>
      <div className="overview-stats"><div><b>05</b><span>CADERNOS</span></div><div><b>01</b><span>JORNADA</span></div><div><b>∞</b><span>POSSIBILIDADES</span></div></div>
      <div className="overview-visual"><div className="visual-ring r1"/><div className="visual-ring r2"/><div className="visual-ring r3"/><div className="visual-center"><Layers3 size={26}/><span>DATA<br/>LIFECYCLE</span></div>{chapters.map((c,i)=><div key={c.id} className={`visual-node node-${i} ${c.accent}`}><span>{c.icon}</span></div>)}</div>
    </section>
    <section className="overview-list"><div className="overview-list-head"><div><span className="section-kicker">A JORNADA</span><h2>Cinco etapas. Uma cadeia de valor.</h2></div><span className="list-count">01 — 05</span></div>
      <div className="overview-cards">{chapters.map((c,i)=><button key={c.id} className={`overview-card accent-${c.accent}`} onClick={() => onSelect(i)}><span className="overview-card-number">{c.id}</span><span className="overview-card-icon">{c.icon}</span><span className="overview-card-text"><small>{c.week}</small><b>{c.short}</b><span>{c.subtitle}</span></span><ArrowRight size={17} className="overview-card-arrow"/></button>)}</div>
    </section>
    <section className="synthesis-section"><div><span className="section-kicker">MAPA CONCEITUAL</span><h2>O ciclo da confiança nos dados</h2><p>Os cadernos se conectam como partes de uma mesma arquitetura.</p></div><div className="synthesis-grid">{synthesis.map((s,i)=><div className={`synthesis-item ${s.color}`} key={s.label}><span>0{i+1}</span><b>{s.label}</b><p>{s.text}</p></div>)}</div></section>
    <footer className="page-footer"><Brand/><span>CONTEÚDO BASEADO NOS CADERNOS DE PRÁTICA · 2026</span></footer>
  </div>;
}

export default function App() {
  const [active, setActive] = useState(-1);
  const [mode, setMode] = useState('present');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const selectChapter = useCallback((i) => { setActive(i); setMobileOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); }, []);
  const next = useCallback(() => setActive(a => a < 0 ? 0 : Math.min(chapters.length - 1, a + 1)), []);
  const previous = useCallback(() => setActive(a => Math.max(0, a - 1)), []);
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) { await document.documentElement.requestFullscreen(); setFullscreen(true); }
      else { await document.exitFullscreen(); setFullscreen(false); }
    } catch { setFullscreen(false); }
  }, []);
  useEffect(() => {
    const handler = (e) => {
      if (['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); previous(); }
      if (e.key.toLowerCase() === 'h') setShowHelp(v => !v);
      if (e.key === 'Escape') { setShowHelp(false); setMobileOpen(false); }
    };
    window.addEventListener('keydown', handler);
    const fs = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', fs);
    return () => { window.removeEventListener('keydown', handler); document.removeEventListener('fullscreenchange', fs); };
  }, [next, previous]);
  const chapter = active >= 0 ? chapters[active] : null;

  return <div className="app-shell">
    {mobileOpen && <button className="mobile-scrim" onClick={() => setMobileOpen(false)} aria-label="Fechar menu"/>}
    <div className={`sidebar-wrap ${mobileOpen ? 'mobile-open' : ''}`}><Sidebar active={active} onSelect={selectChapter} mode={mode} setMode={setMode} onClose={() => setMobileOpen(false)}/></div>
    <main className="workspace">
      <Topbar mode={mode} setMode={setMode} onFullscreen={toggleFullscreen} onMenu={() => setMobileOpen(true)} active={Math.max(active,0)}/>
      {active < 0 ? <Overview onSelect={selectChapter} setMode={setMode}/> : <>
        <div className="chapter-progress"><span style={{width: `${((active + 1) / chapters.length) * 100}%`}}/></div>
        <div className="chapter-wrap" key={chapter.id}>
          <ChapterHero chapter={chapter} active={active} total={chapters.length}/>
          <ChapterDetails chapter={chapter} mode={mode}/>
          <div className="chapter-footer"><button className="text-btn" onClick={() => active === 0 ? setActive(-1) : previous()}><ArrowLeft size={15}/> {active === 0 ? 'Visão geral' : 'Capítulo anterior'}</button><span>{String(active + 1).padStart(2,'0')} / {String(chapters.length).padStart(2,'0')}</span><button className="primary-btn next-btn" onClick={() => active === chapters.length - 1 ? setActive(-1) : next()}>{active === chapters.length - 1 ? 'Voltar à visão geral' : 'Próximo capítulo'} <ArrowRight size={15}/></button></div>
        </div>
      </>}
      <button className="help-fab" onClick={() => setShowHelp(true)} aria-label="Ajuda de navegação"><CircleHelp size={17}/></button>
    </main>
    {showHelp && <div className="modal-backdrop" onClick={() => setShowHelp(false)}><section className="help-modal" onClick={e => e.stopPropagation()}><div className="modal-head"><div><span className="section-kicker">ATALHOS</span><h2>Navegue sem tirar as mãos do teclado</h2></div><button className="icon-btn" onClick={() => setShowHelp(false)} aria-label="Fechar"><X size={18}/></button></div><div className="shortcut-row"><span>Próximo capítulo</span><kbd>→</kbd><kbd>Space</kbd></div><div className="shortcut-row"><span>Capítulo anterior</span><kbd>←</kbd></div><div className="shortcut-row"><span>Ajuda</span><kbd>H</kbd></div><div className="shortcut-row"><span>Fechar janelas</span><kbd>Esc</kbd></div><p>Use os botões de modo para alternar entre uma apresentação mais objetiva e a exploração detalhada dos conceitos.</p></section></div>}
  </div>;
}