/// <mls shortName="organismAdminMenu" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  manageProducts: 'Gerenciar Produtos',
  manageServices: 'Gerenciar Serviços',
  manageUsers: 'Gerenciar Usuários',
  reports: 'Relatórios',
  settings: 'Configurações'
}
const message_en = {
  manageProducts: 'Manage Products',
  manageServices: 'Manage Services',
  manageUsers: 'Manage Users',
  reports: 'Reports',
  settings: 'Settings'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

const inMemoryDb = {
  adminMenu: [
    { id: 1, labelKey: 'manageProducts', href: '#', visible: true },
    { id: 2, labelKey: 'manageServices', href: '#', visible: true },
    { id: 3, labelKey: 'manageUsers', href: '#', visible: true },
    { id: 4, labelKey: 'reports', href: '#', visible: true },
    { id: 5, labelKey: 'settings', href: '#', visible: true }
  ]
};

interface MenuItem {
  id: number;
  labelKey: string;
  href: string;
  visible: boolean;
}

interface AdminMenuResponse {
  items: MenuItem[];
}

@customElement('petshop--organism-admin-menu-102017')
export class organismAdminMenu extends IcaOrganismBase {
  private i18n: MessageType = messages['en'];

  @state() adminMenuResponse?: AdminMenuResponse;

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchAdminMenu();
    this.updateStatesFromAdminMenu(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch the admin menu items based on user permissions.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.adminMenu
   */
  private mockFetchAdminMenu(): AdminMenuResponse {
    return { items: inMemoryDb.adminMenu.filter(item => item.visible) };
  }

  private updateStatesFromAdminMenu(resp: AdminMenuResponse) {
    setState('ui.petshop.organismAdminMenu', resp);
    this.adminMenuResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<nav id="petshop--admin-menu-102017-1">
<ul id="petshop--admin-menu-102017-2">
${this.adminMenuResponse?.items.map(item => html`<li id="petshop--admin-menu-102017-${item.id}"><a href="${item.href}" id="petshop--admin-menu-102017-${item.id}-link">${this.i18n[item.labelKey as keyof MessageType]}</a></li>`)}
</ul>
</nav>`;
  }
}