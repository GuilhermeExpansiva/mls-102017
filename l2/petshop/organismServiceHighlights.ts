/// <mls shortName="organismServiceHighlights" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  title: 'Destaques de Serviços',
  cta: 'Agendar Agora'
}
const message_en = {
  title: 'Service Highlights',
  cta: 'Schedule Now'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

interface Service {
  name: string;
  description: string;
  imageUrl: string;
}

interface ServicesResponse {
  services: Service[];
}

const inMemoryDb = {
  services: [
    {
      name: 'Banho e Tosa',
      description: 'Deixe seu pet limpo e estiloso com nossos serviços profissionais.',
      imageUrl: 'https://images.unsplash.com/photo-1647002380358-fc70ed2f04e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBnZXR0aW5nJTIwYSUyMGJhdGglMjBhbmQlMjBncm9vbWluZ3xlbnwwfHx8fDE3NjI3OTUwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Consulta Veterinária',
      description: 'Cuidado completo com veterinários parceiros.',
      imageUrl: 'https://images.unsplash.com/photo-1733783489145-f3d3ee7a9ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBhJTIwcGV0fGVufDB8fHx8MTc2Mjc5NTAzMXww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ]
};

@customElement('petshop--organism-service-highlights-102017')
export class organismServiceHighlights extends IcaOrganismBase {
  @state() servicesResponse?: ServicesResponse;

  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchServices();
    this.updateStatesFromServices(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch the list of highlighted services.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.services
   */
  private mockFetchServices(): ServicesResponse {
    return { services: inMemoryDb.services };
  }

  private updateStatesFromServices(resp: ServicesResponse) {
    setState('ui.petshop.organismServiceHighlights.services', resp);
    this.servicesResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="services-container" id="petshop--service-highlights-102017-1">
      <h2 class="services-title" id="petshop--service-highlights-102017-2">${this.i18n.title}</h2>
      <div class="services-grid" id="petshop--service-highlights-102017-3">
        ${this.servicesResponse?.services.map((service, index) => html`
          <div class="service-item" id="petshop--service-highlights-102017-${4 + index * 5}">
            <img src="${service.imageUrl}" alt="${service.name}" class="service-image" id="petshop--service-highlights-102017-${5 + index * 5}">
            <h3 class="service-name" id="petshop--service-highlights-102017-${6 + index * 5}">${service.name}</h3>
            <p class="service-description" id="petshop--service-highlights-102017-${7 + index * 5}">${service.description}</p>
            <a href="#" class="service-cta" id="petshop--service-highlights-102017-${8 + index * 5}">${this.i18n.cta}</a>
          </div>
        `)}
      </div>
    </div>`;
  }
}