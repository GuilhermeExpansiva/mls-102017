/// <mls shortName="organismConfirmation" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  confirmationTitle: 'Confirmação do Agendamento',
  serviceLabel: 'Serviço:',
  dateLabel: 'Data:',
  timeLabel: 'Horário:',
  priceLabel: 'Preço:',
  confirmButton: 'Confirmar Agendamento',
  notification: 'Você receberá uma confirmação por e-mail e SMS.'
}
const message_en = {
  confirmationTitle: 'Appointment Confirmation',
  serviceLabel: 'Service:',
  dateLabel: 'Date:',
  timeLabel: 'Time:',
  priceLabel: 'Price:',
  confirmButton: 'Confirm Appointment',
  notification: 'You will receive a confirmation by email and SMS.'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

const inMemoryDb = {
  appointment: {
    service: 'Banho',
    date: '15 de Novembro de 2025',
    time: '10:00',
    price: 'R$ 50,00'
  }
};

interface AppointmentResponse {
  service: string;
  date: string;
  time: string;
  price: string;
}

@customElement('petshop--organism-confirmation-102017')
export class organismConfirmation extends IcaOrganismBase {
  @state() appointmentResponse?: AppointmentResponse;

  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchAppointment();
    this.updateStatesFromAppointment(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch the current appointment details for confirmation.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.appointment
   */
  private mockFetchAppointment(): AppointmentResponse {
    return inMemoryDb.appointment;
  }

  private updateStatesFromAppointment(resp: AppointmentResponse) {
    setState('ui.petshop.organismConfirmation.appointment', resp);
    this.appointmentResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="confirmation-container" id="petshop--confirmation-102017-1">
      <h2 class="confirmation-header" id="petshop--confirmation-102017-2">${this.i18n.confirmationTitle}</h2>
      <div class="summary" id="petshop--confirmation-102017-3">
        <div class="summary-item" id="petshop--confirmation-102017-4">
          <span class="summary-label" id="petshop--confirmation-102017-5">${this.i18n.serviceLabel}</span>
          <span class="summary-value" id="petshop--confirmation-102017-6">${this.appointmentResponse?.service}</span>
        </div>
        <div class="summary-item" id="petshop--confirmation-102017-7">
          <span class="summary-label" id="petshop--confirmation-102017-8">${this.i18n.dateLabel}</span>
          <span class="summary-value" id="petshop--confirmation-102017-9">${this.appointmentResponse?.date}</span>
        </div>
        <div class="summary-item" id="petshop--confirmation-102017-10">
          <span class="summary-label" id="petshop--confirmation-102017-11">${this.i18n.timeLabel}</span>
          <span class="summary-value" id="petshop--confirmation-102017-12">${this.appointmentResponse?.time}</span>
        </div>
        <div class="summary-item" id="petshop--confirmation-102017-13">
          <span class="summary-label" id="petshop--confirmation-102017-14">${this.i18n.priceLabel}</span>
          <span class="summary-value" id="petshop--confirmation-102017-15">${this.appointmentResponse?.price}</span>
        </div>
      </div>
      <button class="confirm-button" id="petshop--confirmation-102017-16">${this.i18n.confirmButton}</button>
      <p class="notification" id="petshop--confirmation-102017-17">${this.i18n.notification}</p>
    </div>`;
  }
}