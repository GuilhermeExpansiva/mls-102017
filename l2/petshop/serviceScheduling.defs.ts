/// <mls shortName="serviceScheduling" project="102017" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102017,
    "folder": "petshop",
    "shortName": "serviceScheduling",
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
        "tag": "organism-calendar",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-service-selection",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-confirmation",
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
    "goal": "Página para agendar serviços como banho e tosa.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"serviceScheduling\" para página para agendar serviços como banho e tosa.",
        "derivedRequirements": [
          {
            "description": "Seleção de data e hora disponíveis."
          },
          {
            "description": "Confirmação por e-mail ou SMS."
          },
          {
            "description": "Integração com calendário para evitar conflitos."
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

Step Trace: provider: xai user:'Guilherme' model:grok-code-fast-1 inputTokens:4306 outputTokens:3140 inputCost:0.20/1M outputCost:1.50/1M total:$0.0056 llmTime: 00:00:14.126
finished at 2025-11-10T17:18:04.107Z
Organism used in page: [
  "organism-nav",
  "organism-calendar",
  "organism-service-selection",
  "organism-confirmation",
  "organism-footer"
] 

Images:
 [
  {
    "key": "service_bath",
    "searchText": "ícone de banho para pets",
    "type": "small",
    "height": 40,
    "width": 40,
    "toolTip": "Ícone representando serviço de banho"
  },
  {
    "key": "service_grooming",
    "searchText": "ícone de tosa para pets",
    "type": "small",
    "height": 40,
    "width": 40,
    "toolTip": "Ícone representando serviço de tosa"
  },
  {
    "key": "service_bath_grooming",
    "searchText": "ícone de banho e tosa para pets",
    "type": "small",
    "height": 40,
    "width": 40,
    "toolTip": "Ícone representando serviço de banho e tosa"
  }
]
 

*/
