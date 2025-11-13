/// <mls shortName="organismServiceSelection" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { state } from 'lit/decorators.js';
import { setState } from '_100554_collabState';
import { IcaOrganismBase } from '_100554_icaOrganismBase';

/// **collab_i18n_start**
const message_pt = {
  selectService: 'Selecione o Serviço'
}
const message_en = {
  selectService: 'Select the Service'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  iconUrl: string;
}

interface ServicesResponse {
  services: Service[];
}

const inMemoryDb = {
  services: [
    {
      id: '1',
      name: 'Banho',
      description: 'Banho completo com shampoo especial para pets.',
      price: 'R$ 50,00',
      iconUrl: 'https://images.unsplash.com/photo-1719903448677-86656e0e4ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwZGUlMjBiYW5obyUyMHBhcmElMjBwZXRzfGVufDB8fHx8MTc2Mjc5NTA4NHww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '2',
      name: 'Tosa',
      description: 'Tosa profissional para manter seu pet estiloso.',
      price: 'R$ 70,00',
      iconUrl: 'https://images.unsplash.com/photo-1676395379273-dc209a125e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwZGUlMjB0b3NhJTIwcGFyYSUyMHBldHN8ZW58MHx8fHwxNzYyNzk1MDg1fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: '3',
      name: 'Banho e Tosa',
      description: 'Pacote completo de banho e tosa.',
      price: 'R$ 100,00',
      iconUrl: 'https://images.unsplash.com/photo-1723238217346-584c3b628ced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwZGUlMjBiYW5obyUyMGUlMjB0b3NhJTIwcGFyYSUyMHBldHN8ZW58MHx8fHwxNzYyNzk1MDg1fDA&ixlib=rb-4.1.0&q=80&w=400'
    }
  ]
};

@customElement('petshop--organism-service-selection-102017')
export class organismServiceSelection extends IcaOrganismBase {
  @state() servicesResponse?: ServicesResponse;
  @state() selectedServiceId?: string;
  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchServices();
    this.updateStatesFromServices(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch available services for selection.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.services
   */
  private mockFetchServices(): ServicesResponse {
    return { services: inMemoryDb.services };
  }

  private updateStatesFromServices(resp: ServicesResponse) {
    setState('ui.petshop.organismServiceSelection.services', resp);
    this.servicesResponse = resp;
    this.selectedServiceId = resp.services[0]?.id; // Default to first service
  }

  private selectService(serviceId: string) {
    this.selectedServiceId = serviceId;
    setState('ui.petshop.organismServiceSelection.selectedService', { id: serviceId });
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="services-container" id="petshop--service-selection-102017-1">
      <h2 class="services-header" id="petshop--service-selection-102017-2">${this.i18n.selectService}</h2>
      <div class="service-list" id="petshop--service-selection-102017-3">
        ${this.servicesResponse?.services.map(service => html`
          <div class="service-item ${this.selectedServiceId === service.id ? 'selected' : ''}" id="petshop--service-selection-102017-${service.id}" @click=${() => this.selectService(service.id)}>
            <img class="service-icon" src="${service.iconUrl}" alt="Ícone de ${service.name}" id="petshop--service-selection-102017-icon-${service.id}">
            <div class="service-details" id="petshop--service-selection-102017-details-${service.id}">
              <div class="service-name" id="petshop--service-selection-102017-name-${service.id}">${service.name}</div>
              <div class="service-description" id="petshop--service-selection-102017-desc-${service.id}">${service.description}</div>
              <div class="service-price" id="petshop--service-selection-102017-price-${service.id}">${service.price}</div>
            </div>
          </div>
        `)}
      </div>
    </div>`;
  }
}