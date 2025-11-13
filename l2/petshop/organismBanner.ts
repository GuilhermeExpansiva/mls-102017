/// <mls shortName="organismBanner" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  bannerAlt: 'Pets felizes no petshop'
}
const message_en = {
  bannerAlt: 'Happy pets in the petshop'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

const inMemoryDb = {
  content: {
    bannerUrl: "https://images.unsplash.com/photo-1760726403694-73aacccff16f?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZ3MlMjBhbmQlMjBjYXRzJTIwaW4lMjBhJTIwcGV0JTIwc2hvcHxlbnwwfHx8fDE3NjI3OTUwMjl8MA&amp;ixlib=rb-4.1.0&amp;q=85",
    title: "Bem-vindo ao PetShop Amigo!",
    subtitle: "Tudo para o seu pet com amor e cuidado. Descubra produtos e serviços incríveis.",
    ctaText: "Explorar Produtos",
    ctaLink: "#"
  }
};

interface ContentResponse {
  bannerUrl: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

@customElement('petshop--organism-banner-102017')
export class organismBanner extends IcaOrganismBase {
  @state() contentResponse?: ContentResponse;
  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    this.updateStatesFromContent(this.mockFetchContent());
  }

  /**
   * endpoint-intent: I need an endpoint to fetch the banner content.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.content
   */
  private mockFetchContent(): ContentResponse {
    return inMemoryDb.content;
  }

  private updateStatesFromContent(resp: ContentResponse) {
    setState("ui.petshop.organismBanner", resp);
    this.contentResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="banner-container" id="petshop--banner-102017-1">
      <img src="${this.contentResponse?.bannerUrl}" alt="${this.i18n.bannerAlt}" class="banner-image" id="petshop--banner-102017-2">
      <div class="banner-overlay" id="petshop--banner-102017-3"></div>
      <div class="banner-content" id="petshop--banner-102017-4">
        <h1 class="banner-title" id="petshop--banner-102017-5">${this.contentResponse?.title}</h1>
        <p class="banner-subtitle" id="petshop--banner-102017-6">${this.contentResponse?.subtitle}</p>
        <a href="${this.contentResponse?.ctaLink}" class="banner-cta" id="petshop--banner-102017-7">${this.contentResponse?.ctaText}</a>
      </div>
    </div>`;
  }
}