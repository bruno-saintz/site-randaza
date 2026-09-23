import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solicitação recebida | Randaza Engenharia',
  description: 'Confirmação do envio de uma solicitação de orçamento para a Randaza Engenharia.',
  robots: { index: false, follow: false },
};

export default function QuoteThankYouPage() {
  return (
    <main className="thank-you-page">
      <div className="thank-you-grid" aria-hidden="true" />
      <header className="thank-you-header">
        <Link href="/" aria-label="Voltar ao início da Randaza Engenharia">
          <Image src="/images/logo-randaza-original.png" alt="Randaza Engenharia" width={180} height={74} priority />
        </Link>
      </header>

      <section className="thank-you-card" aria-labelledby="thank-you-title">
        <p className="eyebrow">Solicitação enviada</p>
        <h1 id="thank-you-title">Obrigado pelo contato.</h1>
        <p>
          Sua solicitação foi preparada e o atendimento continuará pelo WhatsApp.
          Nossa equipe analisará as informações para orientar os próximos passos.
        </p>
        <div className="thank-you-actions">
          <Link className="button button-gold" href="/">Voltar ao site</Link>
          <a className="thank-you-link" href="https://wa.me/5511973431618" target="_blank" rel="noreferrer">
            Abrir o WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
