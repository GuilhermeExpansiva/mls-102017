/// <mls shortName="organismConfirmation" project="102017" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs = {
  "meta": {
    "projectId": 102017,
    "folder": "petshop",
    "shortName": "organismConfirmation",
    "type": "organism",
    "devFidelity": "organismMock",
    "group": "petshop",
    "tags": [
      "lit",
      "organism"
    ]
  },
  "references": {
    "widgets": [],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": []
  },
  "planning": {
    "generalDescription": "Confirmação de agendamento.",
    "goal": "Exibir resumo e enviar confirmação.",
    "userStories": [
      {
        "story": "Como usuário, quero confirmar meu agendamento e receber notificação.",
        "derivedRequirements": [
          {
            "description": "Integração com e-mail/SMS.",
            "comment": "Para confirmação automática."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
