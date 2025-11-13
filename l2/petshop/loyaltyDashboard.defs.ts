/// <mls shortName="loyaltyDashboard" project="102017" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102017,
    "folder": "petshop",
    "shortName": "loyaltyDashboard",
    "type": "page",
    "devFidelity": "scaffold",
    "group": "petshop",
    "tags": [
      "lit",
      "page"
    ]
  },
  "references": {
    "widgets": [
      {
        "tag": "organism-nav",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-points-balance",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-rewards-list",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-redeem-form",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-footer",
        "bindings": [],
        "purpose": "",
        "used": true
      }
    ],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": []
  },
  "planning": {
    "generalDescription": "",
    "goal": "Página para gerenciar pontos de fidelidade e resgatar recompensas.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"loyaltyDashboard\" para página para gerenciar pontos de fidelidade e resgatar recompensas.",
        "derivedRequirements": [
          {
            "description": "Exibir saldo de pontos."
          },
          {
            "description": "Listar recompensas disponíveis."
          },
          {
            "description": "Permitir resgate de descontos."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


/*

Task Id: 20251110171509.1001

Step Trace: provider: xai user:'Guilherme' model:grok-code-fast-1 inputTokens:4346 outputTokens:1907 inputCost:0.20/1M outputCost:1.50/1M total:$0.0037 llmTime: 00:00:19.265
finished at 2025-11-10T17:18:30.643Z
Organism used in page: [
  "organism-nav",
  "organism-points-balance",
  "organism-rewards-list",
  "organism-redeem-form",
  "organism-footer"
] 

Images:
 [
  {
    "key": "reward-discount",
    "searchText": "ícone de desconto para recompensa",
    "type": "small",
    "height": 50,
    "width": 50,
    "toolTip": "Ícone representando desconto em compras"
  },
  {
    "key": "reward-brinde",
    "searchText": "ícone de brinde ou presente",
    "type": "small",
    "height": 50,
    "width": 50,
    "toolTip": "Ícone representando brinde para pet"
  },
  {
    "key": "reward-service",
    "searchText": "ícone de serviço de petshop",
    "type": "small",
    "height": 50,
    "width": 50,
    "toolTip": "Ícone representando desconto em serviços"
  }
]
 

*/
