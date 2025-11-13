/// <mls shortName="organismDashboardStats" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

const inMemoryDb = {
  stats: {
    totalSales: 50000,
    todayAppointments: 25,
    activeClients: 1200,
    stockProducts: 150
  }
};

interface StatsResponse {
  totalSales: number;
  todayAppointments: number;
  activeClients: number;
  stockProducts: number;
}

/// **collab_i18n_start**
const message_pt = {
  dashboardStatsTitle: 'Estatísticas do Dashboard',
  totalSales: 'Vendas Totais',
  todayAppointments: 'Agendamentos Hoje',
  activeClients: 'Clientes Ativos',
  stockProducts: 'Produtos em Estoque'
}
const message_en = {
  dashboardStatsTitle: 'Dashboard Statistics',
  totalSales: 'Total Sales',
  todayAppointments: 'Today Appointments',
  activeClients: 'Active Clients',
  stockProducts: 'Products in Stock'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

@customElement('petshop--organism-dashboard-stats-102017')
export class organismDashboardStats extends IcaOrganismBase {
  @state() statsResponse?: StatsResponse;
  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchStats();
    this.updateStatesFromStats(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch dashboard statistics.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.stats
   */
  private mockFetchStats(): StatsResponse {
    return inMemoryDb.stats;
  }

  private updateStatesFromStats(resp: StatsResponse) {
    setState("ui.petshop.organismDashboardStats", resp);
    this.statsResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="stats-container" id="petshop--dashboard-stats-102017-1">
<h2 id="petshop--dashboard-stats-102017-2">${this.i18n.dashboardStatsTitle}</h2>
<div class="stat-item" id="petshop--dashboard-stats-102017-3">
<h3 id="petshop--dashboard-stats-102017-4">${this.i18n.totalSales}</h3>
<p id="petshop--dashboard-stats-102017-5">R$ ${this.statsResponse?.totalSales.toLocaleString('pt-BR', { minimumFractionDigits: 2 })},00</p>
</div>
<div class="stat-item" id="petshop--dashboard-stats-102017-6">
<h3 id="petshop--dashboard-stats-102017-7">${this.i18n.todayAppointments}</h3>
<p id="petshop--dashboard-stats-102017-8">${this.statsResponse?.todayAppointments}</p>
</div>
<div class="stat-item" id="petshop--dashboard-stats-102017-9">
<h3 id="petshop--dashboard-stats-102017-10">${this.i18n.activeClients}</h3>
<p id="petshop--dashboard-stats-102017-11">${this.statsResponse?.activeClients.toLocaleString('pt-BR')}</p>
</div>
<div class="stat-item" id="petshop--dashboard-stats-102017-12">
<h3 id="petshop--dashboard-stats-102017-13">${this.i18n.stockProducts}</h3>
<p id="petshop--dashboard-stats-102017-14">${this.statsResponse?.stockProducts}</p>
</div>
</div>
`
  }
}