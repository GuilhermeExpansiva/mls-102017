/// <mls shortName="organismNav" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  // No static texts to translate in this organism, as all are dynamic from mock
}
const message_en = {
  // No static texts to translate in this organism, as all are dynamic from mock
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

const inMemoryDb = {
  nav: {
    logo: "PetShop Amigo",
    menuItems: [
      { icon: "🏠", text: "Início", href: "#" },
      { icon: "📦", text: "Catálogo", href: "#" },
      { icon: "📅", text: "Agendamento", href: "#" },
      { icon: "⭐", text: "Fidelidade", href: "#" },
      { icon: "📝", text: "Blog", href: "#" }
    ]
  }
};

interface NavData {
  logo: string;
  menuItems: { icon: string; text: string; href: string }[];
}

@customElement('petshop--organism-nav-102017')
export class organismNav extends IcaOrganismBase {
  @state() navData?: NavData;
  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchNavData();
    this.updateStatesFromNav(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch navigation data for the petshop site.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.nav
   */
  private mockFetchNavData(): NavData {
    return inMemoryDb.nav;
  }

  private updateStatesFromNav(resp: NavData) {
    setState("ui.petshop.organismNav", resp);
    this.navData = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="nav-container" id="petshop--nav-102017-1">
      <div class="nav-logo" id="petshop--nav-102017-2">${this.navData?.logo}</div>
      <ul class="nav-menu" id="petshop--nav-102017-3">
        ${this.navData?.menuItems.map((item, index) => html`
          <li class="nav-item" id="petshop--nav-102017-${4 + index * 4}">
            <a href="${item.href}" class="nav-link" id="petshop--nav-102017-${5 + index * 4}">
              <span class="nav-icon" id="petshop--nav-102017-${6 + index * 4}">${item.icon}</span>${item.text}
            </a>
          </li>
        `)}
      </ul>
    </div>`;
  }
}