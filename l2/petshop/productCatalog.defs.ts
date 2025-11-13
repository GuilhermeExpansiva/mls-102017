/// <mls shortName="productCatalog" project="102017" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102017,
    "folder": "petshop",
    "shortName": "productCatalog",
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
        "tag": "organism-filters",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-product-list",
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
    "goal": "Página para navegar e pesquisar produtos para pets.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"productCatalog\" para página para navegar e pesquisar produtos para pets.",
        "derivedRequirements": [
          {
            "description": "Exibir lista de produtos com filtros por categoria."
          },
          {
            "description": "Permitir adicionar produtos ao carrinho."
          },
          {
            "description": "Incluir detalhes do produto como preço e descrição."
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

Step Trace: provider: xai user:'Guilherme' model:grok-code-fast-1 inputTokens:4199 outputTokens:2040 inputCost:0.20/1M outputCost:1.50/1M total:$0.0039 llmTime: 00:00:15.091
finished at 2025-11-10T17:17:44.325Z
Organism used in page: [
  "organism-nav",
  "organism-filters",
  "organism-product-list",
  "organism-footer"
] 

Images:
 [
  {
    "key": "product-1",
    "searchText": "ração para cães premium",
    "type": "regular",
    "height": 150,
    "width": 250,
    "toolTip": "Imagem de ração premium para cães"
  },
  {
    "key": "product-2",
    "searchText": "brinquedo bola para gatos",
    "type": "regular",
    "height": 150,
    "width": 250,
    "toolTip": "Imagem de brinquedo bola para gatos"
  },
  {
    "key": "product-3",
    "searchText": "coleira ajustável para pets",
    "type": "regular",
    "height": 150,
    "width": 250,
    "toolTip": "Imagem de coleira ajustável para pets"
  },
  {
    "key": "product-4",
    "searchText": "shampoo antialérgico para pets",
    "type": "regular",
    "height": 150,
    "width": 250,
    "toolTip": "Imagem de shampoo antialérgico para pets"
  }
]
 

*/
