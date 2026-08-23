import Image from 'next/image';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr/ArrowUpRight';
import { Broom } from '@phosphor-icons/react/dist/ssr/Broom';
import { ChatCircleText } from '@phosphor-icons/react/dist/ssr/ChatCircleText';
import { HardHat } from '@phosphor-icons/react/dist/ssr/HardHat';
import { Monitor } from '@phosphor-icons/react/dist/ssr/Monitor';
import { SealCheck } from '@phosphor-icons/react/dist/ssr/SealCheck';
import { ShieldCheck } from '@phosphor-icons/react/dist/ssr/ShieldCheck';
import { BeforeAfter, MotionEnhancer, SiteHeader } from './components';

const services = [
  { number: '01', title: 'Recuperação estrutural com fibra de carbono', text: 'Intervenções em vigas, pilares, lajes e elementos de concreto, do diagnóstico ao reforço localizado.', image: '/images/reforco-fibra-carbono.jpg' },
  { number: '02', title: 'Retrofit e recuperação de fachadas', text: 'Requalificação de fachadas com atenção à patologia, estanqueidade, estética, segurança e valor do ativo.', image: '/images/retrofit-fachada-hd.jpg' },
  { number: '03', title: 'Laudos técnicos', text: 'Laudos, pareceres e registros para orientar decisões, planejar intervenções e documentar responsabilidades.', image: '/images/reforco-estrutura.jpg' },
  { number: '04', title: 'Construções e reformas', text: 'Obras novas, adequações, áreas externas e acabamentos com coordenação técnica de cada etapa.', image: '/images/construcoes-reformas-escavadeira.png' },
];

const method = [
  ['01', 'Diagnóstico', 'Leitura das condições existentes, patologias, restrições de uso e prioridades do cliente.'],
  ['02', 'Plano executivo', 'Definição de escopo, sequência, materiais, proteções, acessos e frentes de trabalho.'],
  ['03', 'Execução técnica', 'Equipe orientada, controle de etapas, registros fotográficos e ajustes conforme o campo.'],
  ['04', 'Entrega e registro', 'Organização final, documentação do serviço e recomendações de uso e manutenção.'],
];

export default function Home() {
  return (
    <main id="conteudo">
      <a className="skip-link" href="#atuacao">Pular para o conteúdo</a>
      <MotionEnhancer /><SiteHeader />

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <Image className="hero-image" src="/images/hero-edificio-hd.jpg" alt="Conjunto residencial atendido pela Randaza visto de baixo para cima" fill sizes="100vw" priority />
        <div className="hero-overlay" /><div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow reveal">Engenharia estrutural · São Paulo</p>
          <h1 className="reveal" id="hero-title">Estruturas confiáveis começam por decisões claras.</h1>
          <p className="hero-copy reveal">Diagnóstico, execução especializada e acompanhamento transparente para preservar, reforçar e valorizar edificações.</p>
          <div className="hero-actions reveal">
            <a className="button button-gold" href="#projetos">Conheça nossos projetos</a>
          </div>
        </div>
        <div className="hero-proof" aria-label="Credenciais da Randaza">
          <div><strong>30+</strong><span>anos de experiência<br />em engenharia</span></div>
          <div><strong>USP</strong><span>mestre em estruturas<br />na direção técnica</span></div>
          <div><strong>04</strong><span>frentes integradas<br />de atuação</span></div>
        </div>
        <a className="scroll-cue" href="#atuacao"><span>Explore</span><i aria-hidden="true" /></a>
      </section>

      <section className="manifesto section-shell" id="atuacao">
        <div className="section-index" data-reveal><span>01</span><i /></div>
        <div className="manifesto-copy" data-reveal>
          <p className="eyebrow dark">Clareza que sustenta</p>
          <h2>A engenharia não termina no cálculo. Ela continua em cada decisão de obra.</h2>
          <p>Transformamos complexidade técnica em um processo que o cliente consegue compreender, acompanhar e documentar — da leitura inicial à entrega.</p>
        </div>
        <div className="commitments" data-reveal>
          <article><span>01</span><h3>Precisão técnica</h3><p>Soluções orientadas pelo problema, risco e custo-benefício real.</p></article>
          <article><span>02</span><h3>Clareza no processo</h3><p>Comunicação objetiva para que decisões importantes não fiquem escondidas no jargão.</p></article>
          <article><span>03</span><h3>Rastreabilidade</h3><p>Registros fotográficos e histórico das etapas relevantes para controle e transparência.</p></article>
        </div>
      </section>

      <section className="services-section" aria-labelledby="services-title">
        <div className="section-shell services-heading" data-reveal>
          <p className="eyebrow">Áreas de atuação</p>
          <h2 id="services-title">Soluções técnicas para ativos exigentes.</h2>
          <p>Atuação integrada para preservar, avaliar, valorizar e requalificar edificações.</p>
        </div>
        <div className="services-list section-shell">
          {services.map((service) => (
            <article className="service-row" key={service.number} data-reveal>
              <span className="service-number">{service.number}</span>
              <div><h3>{service.title}</h3><p>{service.text}</p></div>
              <div className="service-image"><Image src={service.image} alt="" fill sizes="(max-width: 800px) 100vw, 30vw" /></div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section-shell" id="projetos" aria-labelledby="projects-title">
        <div className="section-index" data-reveal><span>02</span><i /></div>
        <div className="projects-head" data-reveal>
          <div><p className="eyebrow dark">Projetos e campo executivo</p><h2 id="projects-title">Competência explicada por aquilo que entregamos.</h2></div>
          <p>Uma seleção de registros reais de recuperação, retrofit, impermeabilização e construção. No site final, cada caso poderá receber contexto completo de desafio, solução e resultado.</p>
        </div>

        <article className="feature-project" data-reveal>
          <BeforeAfter />
          <div className="feature-copy">
            <p className="project-tag">Caso em destaque · Retrofit</p>
            <h3>Fachada renovada, protegida e reposicionada.</h3>
            <p>Leitura das patologias, preparação das superfícies e aplicação de soluções para melhorar acabamento, impermeabilização e proteção contra infiltrações.</p>
            <dl><div><dt>Escopo</dt><dd>Retrofit de fachada</dd></div><div><dt>Objetivo</dt><dd>Proteção e desempenho</dd></div><div><dt>Registro</dt><dd>Antes e depois</dd></div></dl>
          </div>
        </article>

        <div className="project-grid">
          <article data-reveal><div className="project-image"><Image src="/images/reforco-fibra-carbono.jpg" alt="Vigas de garagem reforçadas com lâminas de fibra de carbono" fill sizes="(max-width: 800px) 100vw, 33vw" /></div><p>Recuperação estrutural</p><h3>Recuperação estrutural com fibra de carbono e injeção química</h3></article>
          <article data-reveal><div className="project-image"><Image src="/images/concretagem-rampa.jpg" alt="Equipe executando concretagem de rampa" fill sizes="(max-width: 800px) 100vw, 33vw" /></div><p>Construções e áreas externas</p><h3>Preparo de base e concretagem coordenada</h3></article>
          <article data-reveal><div className="project-image"><Image src="/images/impermeabilizacao-cisterna.png" alt="Impermeabilização verde aplicada no interior de uma cisterna" fill sizes="(max-width: 800px) 100vw, 33vw" /></div><p>Impermeabilização</p><h3>Impermeabilização de cisterna</h3></article>
        </div>
      </section>

      <section className="transparency" aria-labelledby="transparency-title">
        <div className="section-shell transparency-grid">
          <div className="transparency-copy" data-reveal>
            <p className="eyebrow">Transparência aplicada à obra</p>
            <h2 id="transparency-title">Você não precisa esperar uma reunião para saber o que está acontecendo.</h2>
            <p>Relatórios fotográficos, diário de obra e gestão própria transformam o acompanhamento em evidência — não em promessa.</p>
            <ul><li>Evolução registrada por etapa</li><li>Fotos e observações organizadas</li><li>Histórico de decisões e pendências</li><li>Visão clara do andamento da obra</li></ul>
          </div>
          <div className="system-frame" data-reveal aria-label="Representação ilustrativa do sistema próprio de gestão da Randaza">
            <div className="system-top"><span>RANDAZA / Gestão de obra</span><i>Visão do cliente</i></div>
            <div className="system-body">
              <aside><b>Visão geral</b><span>Diário de obra</span><span>Relatórios</span><span>Documentos</span></aside>
              <div className="system-content">
                <div className="system-title"><div><small>OBRA EM ACOMPANHAMENTO</small><h3>Relatório executivo</h3></div><em>Atualizado hoje</em></div>
                <div className="system-stats"><div><small>Andamento</small><strong>68%</strong></div><div><small>Registros</small><strong>124</strong></div><div><small>Pendências</small><strong>03</strong></div></div>
                <div className="system-report"><div className="report-photo"><Image src="/images/injecao-fissuras.jpg" alt="Registro fotográfico de tratamento de fissuras" fill sizes="340px" /></div><div><small>DIÁRIO DE OBRA · ETAPA 03</small><h4>Tratamento localizado de fissuras</h4><p>Preparação concluída e pontos de injeção registrados para acompanhamento técnico.</p><span>Ver relatório completo →</span></div></div>
              </div>
            </div>
            <small className="prototype-note">Interface ilustrativa para o protótipo</small>
          </div>
        </div>
      </section>

      <section className="method section-shell" id="metodo" aria-labelledby="method-title">
        <div className="section-index" data-reveal><span>03</span><i /></div>
        <div className="method-head" data-reveal><p className="eyebrow dark">Método Randaza</p><h2 id="method-title">Da leitura técnica à entrega documentada.</h2></div>
        <div className="method-steps">
          {method.map(([number, title, text]) => <article key={number} data-reveal><span>{number}</span><i /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="differentials" aria-labelledby="dif-title">
        <div className="section-shell">
          <div className="differentials-head" data-reveal><p className="eyebrow">Diferenciais</p><h2 id="dif-title">Segurança técnica que também se percebe na experiência.</h2></div>
          <div className="differentials-grid">
            <article data-reveal><div className="differential-mark"><ChatCircleText aria-hidden="true" /><span>01</span></div><h3>Comunicação clara</h3><p><strong>Você entende cada decisão antes que ela seja tomada.</strong>Documentamos as ocorrências da obra em informes técnicos claros — diagnóstico, solução e justificativa técnica, sem jargão desnecessário.</p></article>
            <article data-reveal><div className="differential-mark"><HardHat aria-hidden="true" /><span>02</span></div><h3>Segurança e conformidade</h3><p>Equipe treinada nas NR-18, NR-33 e NR-35, com seguro individual e apólice de responsabilidade civil — proteção para o trabalhador e para o contratante.</p></article>
            <article data-reveal><div className="differential-mark"><Monitor aria-hidden="true" /><span>03</span></div><h3>Sistema próprio</h3><p>Todo o andamento da obra fica registrado em plataforma desenvolvida internamente: etapas concluídas, pendências e documentação técnica. Cada intervenção é rastreável do diagnóstico à conclusão.</p></article>
            <article data-reveal><div className="differential-mark"><Broom aria-hidden="true" /><span>04</span></div><h3>Acabamento e limpeza</h3><p>Superfícies protegidas contra respingos, poeira e resíduos de obra, com limpeza a cada etapa concluída.</p></article>
            <article data-reveal><div className="differential-mark"><SealCheck aria-hidden="true" /><span>05</span></div><h3>Responsabilidade formal</h3><p>Cada serviço é executado sob responsabilidade técnica formal, com ART, memorial e registro fotográfico — respaldo documental para o cliente e para eventuais exigências futuras.</p></article>
            <article data-reveal><div className="differential-mark"><ShieldCheck aria-hidden="true" /><span>06</span></div><h3>Garantia</h3><p>Obras com ART, garantia dos serviços e acompanhamento direto de engenheiro — segurança e tranquilidade do início ao fim.</p></article>
          </div>
        </div>
      </section>

      <section className="history section-shell" id="historia" aria-labelledby="history-title">
        <div className="history-image" data-reveal><Image src="/images/historia-edificio-randaza.jpeg" alt="Edifícios residenciais acompanhados pela Randaza vistos de baixo para cima" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
        <div className="history-copy" data-reveal>
          <p className="eyebrow dark">Nossa história</p>
          <h2 id="history-title">Experiência construída com rigor técnico e presença em campo.</h2>
          <p>A Randaza reúne mais de 30 anos de experiência em engenharia para solucionar patologias e conduzir intervenções estruturais de diferentes complexidades.</p>
          <p>Sua Direção-Executiva é conduzida por Luiz Carlos, Engenheiro Civil, pós-graduado em Estruturas, Mestre pela USP em Estruturas e Perito Judicial. Formação e vivência executiva dentro e fora do Brasil se encontram em uma atuação próxima, organizada e responsável.</p>
          <blockquote>“Mais do que executar, oferecemos segurança técnica, documentação e transparência durante todo o processo.”</blockquote>
        </div>
      </section>

      <section className="insights section-shell" aria-labelledby="insights-title">
        <div className="insights-head" data-reveal><div><p className="eyebrow dark">Conhecimento em movimento</p><h2 id="insights-title">Conteúdo para decisões melhores.</h2></div><span>Área editorial preparada para o site final</span></div>
        <div className="insights-grid">
          <article data-reveal><span>Patologias estruturais</span><h3>Quando uma fissura exige avaliação técnica?</h3><p>Os sinais que ajudam síndicos e gestores a separar manutenção de um possível risco estrutural.</p></article>
          <article data-reveal><span>Fachadas</span><h3>Infiltração, acabamento e segurança: por onde começar?</h3><p>Como organizar o diagnóstico antes de definir materiais, acesso e cronograma.</p></article>
          <article data-reveal><span>Gestão transparente</span><h3>Por que documentar cada etapa de uma obra técnica?</h3><p>Relatórios e registros fotográficos reduzem ruído e preservam o histórico do ativo.</p></article>
        </div>
      </section>

      <section className="contact" id="contato" aria-labelledby="contact-title">
        <Image src="/images/contato-area-externa-hd.jpg" alt="Área externa com deck e espaço de convivência executados pela Randaza" fill sizes="100vw" />
        <div className="contact-overlay" />
        <div className="section-shell contact-content" data-reveal>
          <p className="eyebrow">Vamos conversar</p><h2 id="contact-title">Conte o desafio estrutural do seu projeto.</h2>
          <p>Fale diretamente com Luiz Carlos, Diretor Executivo e Engenheiro Civil.</p>
          <a className="button button-gold" href="https://wa.me/5511973431618" target="_blank" rel="noreferrer">Iniciar conversa no WhatsApp ↗</a>
        </div>
      </section>

      <footer className="footer">
        <div className="section-shell footer-grid">
          <div><Image src="/images/logo-randaza-hd.png" alt="Randaza Engenharia" width={1514} height={1039} unoptimized /><p>A estrutura segura para sua obra</p></div>
          <div><small>CONTATO</small><a href="tel:+5511973431618">(11) 97343-1618</a><a href="mailto:luizpalman@randazaengenharia.com.br">luizpalman@randazaengenharia.com.br</a></div>
          <div><small>ENDEREÇO</small><p>Av. Paulista, 1636 · Sala 1105<br />São Paulo / SP</p><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Av.%20Paulista%2C%201636%2C%20Sala%201105%2C%20S%C3%A3o%20Paulo%20-%20SP" target="_blank" rel="noopener noreferrer" aria-label="Ver endereço no Google Maps (abre em nova aba)">Ver no mapa <ArrowUpRight aria-hidden="true" /></a></div>
        </div>
        <div className="section-shell footer-bottom"><span>© Randaza Engenharia Estrutural LTDA</span><a href="#inicio">Voltar ao topo ↑</a></div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/5511973431618" target="_blank" rel="noreferrer" aria-label="Conversar com a Randaza pelo WhatsApp"><b>Fale conosco</b><Image src="/images/whatsapp-logo.png" alt="" width={28} height={28} /></a>
    </main>
  );
}
