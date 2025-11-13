/// <mls shortName="organismCalendar" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  selectDateTime: 'Selecione Data e Horário'
}
const message_en = {
  selectDateTime: 'Select Date and Time'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

const inMemoryDb = {
  availability: {
    dates: [1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26, 28, 29, 31],
    times: ['09:00', '10:00', '14:00', '15:00']
  }
};

interface AvailabilityResponse {
  dates: number[];
  times: string[];
}

@customElement('petshop--organism-calendar-102017')
export class organismCalendar extends IcaOrganismBase {
  @state() availabilityResponse?: AvailabilityResponse;
  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchAvailability();
    this.updateStatesFromAvailability(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch available dates and times for scheduling.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.availability
   */
  private mockFetchAvailability(): AvailabilityResponse {
    return inMemoryDb.availability;
  }

  private updateStatesFromAvailability(resp: AvailabilityResponse) {
    setState('ui.petshop.organismCalendar.availability', resp);
    this.availabilityResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="calendar-container" id="petshop--calendar-102017-1">
      <h2 class="calendar-header" id="petshop--calendar-102017-2">${this.i18n.selectDateTime}</h2>
      <div class="calendar-grid" id="petshop--calendar-102017-3">
        ${Array.from({ length: 31 }, (_, i) => i + 1).map(day => html`<div class="day ${this.availabilityResponse?.dates.includes(day) ? 'available' : ''}" id="petshop--calendar-102017-${4 + day}">${day}</div>`)}
      </div>
      <div class="time-slots" id="petshop--calendar-102017-35">
        ${this.availabilityResponse?.times.map(time => html`<div class="time-slot available">${time}</div>`)}
      </div>
    </div>`;
  }
}