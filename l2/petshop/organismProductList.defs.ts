/// <mls shortName="organismProductList" project="102017" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs = {
  "meta": {
    "projectId": 102017,
    "folder": "petshop",
    "shortName": "organismProductList",
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
    "generalDescription": "Lista principal de produtos no catálogo.",
    "goal": "Exibir produtos em grid com imagem, nome e preço.",
    "userStories": [
      {
        "story": "Como cliente, quero ver produtos e adicioná-los ao carrinho.",
        "derivedRequirements": [
          {
            "description": "Botão de adicionar ao carrinho.",
            "comment": "Integração com carrinho de compras."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
