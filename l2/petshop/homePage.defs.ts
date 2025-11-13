/// <mls shortName="homePage" project="102017" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102017,
    "folder": "petshop",
    "shortName": "homePage",
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
        "tag": "organism-banner",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-product-categories",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-service-highlights",
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
    "goal": "Página inicial para apresentar o petshop, destacar produtos e serviços principais.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"homePage\" para página inicial para apresentar o petshop, destacar produtos e serviços principais.",
        "derivedRequirements": [
          {
            "description": "Exibir banner de boas-vindas com imagens de pets."
          },
          {
            "description": "Listar categorias de produtos e serviços."
          },
          {
            "description": "Incluir chamada para ação para navegar no catálogo ou agendar serviços."
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

Step Trace: provider: xai user:'Guilherme' model:grok-code-fast-1 inputTokens:4263 outputTokens:4110 inputCost:0.20/1M outputCost:1.50/1M total:$0.0070 llmTime: 00:00:22.736
finished at 2025-11-10T17:17:08.733Z
Organism used in page: [
  "organism-nav",
  "organism-banner",
  "organism-product-categories",
  "organism-service-highlights",
  "organism-footer"
] 

Images:
 [
  {
    "key": "banner_pets",
    "searchText": "happy dogs and cats in a pet shop",
    "type": "full",
    "height": 400,
    "width": 1200,
    "toolTip": "Imagem de pets felizes para o banner de boas-vindas"
  },
  {
    "key": "category_racao",
    "searchText": "pet food bags",
    "type": "regular",
    "height": 150,
    "width": 200,
    "toolTip": "Imagem representando ração para pets"
  },
  {
    "key": "category_brinquedos",
    "searchText": "pet toys assortment",
    "type": "regular",
    "height": 150,
    "width": 200,
    "toolTip": "Imagem de brinquedos para pets"
  },
  {
    "key": "category_acessorios",
    "searchText": "pet accessories like collars and beds",
    "type": "regular",
    "height": 150,
    "width": 200,
    "toolTip": "Imagem de acessórios para pets"
  },
  {
    "key": "service_banho",
    "searchText": "dog getting a bath and grooming",
    "type": "regular",
    "height": 150,
    "width": 250,
    "toolTip": "Imagem de banho e tosa para pets"
  },
  {
    "key": "service_consulta",
    "searchText": "veterinarian examining a pet",
    "type": "regular",
    "height": 150,
    "width": 250,
    "toolTip": "Imagem de consulta veterinária"
  }
]
 

*/
