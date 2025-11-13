/// <mls shortName="organismFooter" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  contact: 'Contato',
  usefulLinks: 'Links Úteis',
  socialNetworks: 'Redes Sociais',
  copyright: '© 2025 PetShop Amigo. Todos os direitos reservados.'
}
const message_en = {
  contact: 'Contact',
  usefulLinks: 'Useful Links',
  socialNetworks: 'Social Networks',
  copyright: '© 2025 PetShop Amigo. All rights reserved.'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

const inMemoryDb = {
  footer: {
    contact: {
      phone: '(11) 1234-5678',
      email: 'contato@petshopamigo.com',
      address: 'Rua dos Pets, 123, São Paulo'
    },
    usefulLinks: [
      { text: 'Política de Privacidade', href: '#' },
      { text: 'Termos de Uso', href: '#' },
      { text: 'Sobre Nós', href: '#' }
    ],
    socialNetworks: [
      { icon: '📘', href: '#' },
      { icon: '🐦', href: '#' },
      { icon: '📷', href: '#' }
    ],
    copyright: '© 2025 PetShop Amigo. Todos os direitos reservados.'
  }
};

interface FooterResponse {
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  usefulLinks: Array<{ text: string; href: string }>;
  socialNetworks: Array<{ icon: string; href: string }>;
  copyright: string;
}

@customElement('petshop--organism-footer-102017')
export class organismFooter extends IcaOrganismBase {
  @state() footerResponse?: FooterResponse;

  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchFooter();
    this.updateStatesFromFooter(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch footer content.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.footer
   */
  private mockFetchFooter(): FooterResponse {
    return inMemoryDb.footer;
  }

  private updateStatesFromFooter(resp: FooterResponse) {
    setState('ui.petshop.organismFooter', resp);
    this.footerResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    if (!this.footerResponse) return html``;
    return html`<div class="footer-container" id="petshop--footer-102017-1">
<div class="footer-content" id="petshop--footer-102017-2">
<div class="footer-section" id="petshop--footer-102017-3">
<h3 class="footer-title" id="petshop--footer-102017-4">${this.i18n.contact}</h3>
<ul class="footer-list" id="petshop--footer-102017-5">
<li class="footer-item" id="petshop--footer-102017-6">Telefone: ${this.footerResponse.contact.phone}</li>
<li class="footer-item" id="petshop--footer-102017-7">Email: ${this.footerResponse.contact.email}</li>
<li class="footer-item" id="petshop--footer-102017-8">Endereço: ${this.footerResponse.contact.address}</li>
</ul>
</div>
<div class="footer-section" id="petshop--footer-102017-9">
<h3 class="footer-title" id="petshop--footer-102017-10">${this.i18n.usefulLinks}</h3>
<ul class="footer-list" id="petshop--footer-102017-11">
${this.footerResponse.usefulLinks.map(link => html`<li class="footer-item" id="petshop--footer-102017-12"><a href="${link.href}" class="footer-link" id="petshop--footer-102017-13">${link.text}</a></li>`)}
</ul>
</div>
<div class="footer-section" id="petshop--footer-102017-18">
<h3 class="footer-title" id="petshop--footer-102017-19">${this.i18n.socialNetworks}</h3>
<div class="footer-social" id="petshop--footer-102017-20">
${this.footerResponse.socialNetworks.map(social => html`<a href="${social.href}" class="footer-social-link" id="petshop--footer-102017-21">${social.icon}</a>`)}
</div>
</div>
</div>
<div class="footer-bottom" id="petshop--footer-102017-24">
${this.footerResponse.copyright}
</div>
</div>
`
  }
}