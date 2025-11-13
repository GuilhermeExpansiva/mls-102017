/// <mls shortName="organismPointsBalance" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  balanceTitle: 'Saldo de Pontos',
  pointsDisplay: 'Você possui {points} pontos acumulados.',
  pointsInfo: 'Ganhe 1 ponto por real gasto em compras.'
}
const message_en = {
  balanceTitle: 'Points Balance',
  pointsDisplay: 'You have {points} accumulated points.',
  pointsInfo: 'Earn 1 point per real spent on purchases.'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

interface PointsResponse {
  points: number;
}

const inMemoryDb = {
  points: 1500
};

@customElement('petshop--organism-points-balance-102017')
export class organismPointsBalance extends IcaOrganismBase {
  @state() pointsResponse?: PointsResponse;
  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchPoints();
    this.updateStatesFromPoints(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch the user's loyalty points balance.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.points
   */
  private mockFetchPoints(): PointsResponse {
    return { points: inMemoryDb.points };
  }

  private updateStatesFromPoints(resp: PointsResponse) {
    setState('ui.petshop.organismPointsBalance', resp);
    this.pointsResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="balance-container" id="petshop--points-balance-102017-1">
      <h2 id="petshop--points-balance-102017-2">${this.i18n.balanceTitle}</h2>
      <p class="points-display" id="petshop--points-balance-102017-3">${this.i18n.pointsDisplay.replace('{points}', this.pointsResponse?.points.toString() || '0')}</p>
      <p class="points-info" id="petshop--points-balance-102017-5">${this.i18n.pointsInfo}</p>
    </div>`;
  }
}