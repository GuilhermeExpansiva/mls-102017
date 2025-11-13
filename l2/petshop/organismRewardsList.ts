/// <mls shortName="organismRewardsList" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  availableRewards: 'Recompensas Disponíveis',
  cost: 'Custo:',
  redeem: 'Resgatar'
}
const message_en = {
  availableRewards: 'Available Rewards',
  cost: 'Cost:',
  redeem: 'Redeem'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

interface Reward {
  id: string;
  imageUrl: string;
  altText: string;
  title: string;
  cost: number;
}

interface RewardsResponse {
  rewards: Reward[];
}

const inMemoryDb = {
  rewards: [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1687580712188-b15f16b1f2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwZGUlMjBkZXNjb250byUyMHBhcmElMjByZWNvbXBlbnNhfGVufDB8fHx8MTc2Mjc5NTExMXww&ixlib=rb-4.1.0&q=80&w=400',
      altText: 'Ícone de desconto',
      title: 'Desconto de 10% em compras',
      cost: 100
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1658238613242-1641e15d8509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwZGUlMjBicmluZGUlMjBvdSUyMHByZXNlbnRlfGVufDB8fHx8MTc2Mjc5NTExMXww&ixlib=rb-4.1.0&q=80&w=400',
      altText: 'Ícone de brinde',
      title: 'Brinde: Brinquedo para Pet',
      cost: 200
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1740174459699-487aec1f7bc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwZGUlMjBzZXJ2aSVDMyVBN28lMjBkZSUyMHBldHNob3B8ZW58MHx8fHwxNzYyNzk1MTEyfDA&ixlib=rb-4.1.0&q=80&w=400',
      altText: 'Ícone de serviço',
      title: 'Desconto de 20% em serviços',
      cost: 300
    }
  ]
};

@customElement('petshop--organism-rewards-list-102017')
export class organismRewardsList extends IcaOrganismBase {
  private i18n: MessageType = messages['en'];

  @state() rewardsResponse?: RewardsResponse;

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchRewards();
    this.updateStatesFromRewards(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch available rewards for redemption.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.rewards
   */
  private mockFetchRewards(): RewardsResponse {
    return { rewards: inMemoryDb.rewards };
  }

  private updateStatesFromRewards(resp: RewardsResponse) {
    setState('ui.petshop.organismRewardsList.rewards', resp);
    this.rewardsResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="rewards-container" id="petshop--rewards-list-102017-1">
<h2 id="petshop--rewards-list-102017-2">${this.i18n.availableRewards}</h2>
<ul class="rewards-list" id="petshop--rewards-list-102017-3">
${this.rewardsResponse?.rewards.map(reward => html`
<li class="reward-item" id="petshop--rewards-list-102017-4-${reward.id}">
<img src="${reward.imageUrl}" alt="${reward.altText}" id="petshop--rewards-list-102017-5-${reward.id}">
<div class="reward-details" id="petshop--rewards-list-102017-6-${reward.id}">
<h3 id="petshop--rewards-list-102017-7-${reward.id}">${reward.title}</h3>
<p id="petshop--rewards-list-102017-8-${reward.id}">${this.i18n.cost} ${reward.cost} pontos</p>
<button class="redeem-btn" id="petshop--rewards-list-102017-9-${reward.id}">${this.i18n.redeem}</button>
</div>
</li>`)}
</ul>
</div>`;
  }
}