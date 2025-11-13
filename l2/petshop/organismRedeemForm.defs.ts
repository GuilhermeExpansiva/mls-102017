/// <mls shortName="organismRedeemForm" project="102017" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs = {
  "meta": {
    "projectId": 102017,
    "folder": "petshop",
    "shortName": "organismRedeemForm",
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
    "generalDescription": "Formulário para resgatar recompensas.",
    "goal": "Permitir seleção e confirmação de resgate.",
    "userStories": [
      {
        "story": "Como cliente, quero resgatar meus pontos por descontos.",
        "derivedRequirements": [
          {
            "description": "Validação de saldo suficiente.",
            "comment": "Prevenir resgates inválidos."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
