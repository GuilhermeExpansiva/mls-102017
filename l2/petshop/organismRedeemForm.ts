/// <mls shortName="organismRedeemForm" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  redeemTitle: 'Resgatar Recompensa',
  selectReward: 'Selecione a recompensa:',
  currentBalance: 'Saldo atual:',
  confirmRedeem: 'Confirmar Resgate',
  validationMsg: 'Certifique-se de ter pontos suficientes antes de resgatar.',
  insufficientPoints: 'Pontos insuficientes para resgatar esta recompensa.',
  redeemSuccess: 'Resgate realizado com sucesso!'
}
const message_en = {
  redeemTitle: 'Redeem Reward',
  selectReward: 'Select the reward:',
  currentBalance: 'Current balance:',
  confirmRedeem: 'Confirm Redeem',
  validationMsg: 'Make sure you have enough points before redeeming.',
  insufficientPoints: 'Insufficient points to redeem this reward.',
  redeemSuccess: 'Redeem successful!'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

const inMemoryDb = {
  rewards: [
    { id: 'discount10', name: 'Desconto de 10%', points: 100 },
    { id: 'brinde', name: 'Brinde: Brinquedo', points: 200 },
    { id: 'discount20', name: 'Desconto de 20% em serviços', points: 300 }
  ],
  userBalance: 1500
};

interface RedeemResponse {
  rewards: Array<{ id: string; name: string; points: number }>;
  userBalance: number;
}

interface RedeemRequest {
  rewardId: string;
}

@customElement('petshop--organism-redeem-form-102017')
export class organismRedeemForm extends IcaOrganismBase {
  @state() redeemResponse?: RedeemResponse;
  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchRedeemData();
    this.updateStatesFromRedeem(resp);
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="redeem-container" id="petshop--redeem-form-102017-1">
      <h2 id="petshop--redeem-form-102017-2">${this.i18n.redeemTitle}</h2>
      <form class="redeem-form" id="petshop--redeem-form-102017-3" @submit="${this.handleSubmit}">
        <label for="reward-select" id="petshop--redeem-form-102017-4">${this.i18n.selectReward}</label>
        <select id="reward-select" name="reward" id="petshop--redeem-form-102017-5">
          ${this.redeemResponse?.rewards.map(reward => html`<option value="${reward.id}">${reward.name} (${reward.points} pontos)</option>`)}
        </select>
        <p class="balance-check" id="petshop--redeem-form-102017-8">${this.i18n.currentBalance} ${this.redeemResponse?.userBalance} pontos</p>
        <button type="submit" class="submit-btn" id="petshop--redeem-form-102017-9">${this.i18n.confirmRedeem}</button>
      </form>
      <p class="validation-msg" id="petshop--redeem-form-102017-10">${this.i18n.validationMsg}</p>
    </div>`;
  }

  /**
   * endpoint-intent: I need an endpoint to fetch available rewards and user balance.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb
   */
  private mockFetchRedeemData(): RedeemResponse {
    return inMemoryDb;
  }

  /**
   * endpoint-intent: I need an endpoint to process reward redemption.
   * method: POST
   * notes: client-only mock, updates inMemoryDb and state
   */
  private mockRedeemReward(request: RedeemRequest): boolean {
    const reward = inMemoryDb.rewards.find(r => r.id === request.rewardId);
    if (!reward || inMemoryDb.userBalance < reward.points) {
      return false;
    }
    inMemoryDb.userBalance -= reward.points;
    return true;
  }

  private updateStatesFromRedeem(resp: RedeemResponse) {
    setState("ui.petshop.organismRedeemForm", resp);
    this.redeemResponse = resp;
  }

  private handleSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const rewardId = formData.get('reward') as string;
    const success = this.mockRedeemReward({ rewardId });
    if (success) {
      alert(this.i18n.redeemSuccess);
      const resp = this.mockFetchRedeemData();
      this.updateStatesFromRedeem(resp);
    } else {
      alert(this.i18n.insufficientPoints);
    }
  }
}