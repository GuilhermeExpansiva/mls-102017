/// <mls shortName="blogPage" project="102017" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102017,
    "folder": "petshop",
    "shortName": "blogPage",
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
        "tag": "organism-blog-list",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-blog-post",
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
    "goal": "Seção de blog com dicas de cuidados com pets.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"blogPage\" para seção de blog com dicas de cuidados com pets.",
        "derivedRequirements": [
          {
            "description": "Listar artigos sobre cuidados com pets."
          },
          {
            "description": "Permitir leitura e compartilhamento de posts."
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

Step Trace: provider: xai user:'Guilherme' model:grok-code-fast-1 inputTokens:4265 outputTokens:2501 inputCost:0.20/1M outputCost:1.50/1M total:$0.0046 llmTime: 00:00:20.471
finished at 2025-11-10T17:18:58.324Z
Organism used in page: [
  "organism-nav",
  "organism-blog-list",
  "organism-blog-post",
  "organism-footer"
] 

Images:
 [
  {
    "key": "blog-image-1",
    "searchText": "cachorro saudável comendo ração",
    "type": "regular",
    "height": 200,
    "width": 300,
    "toolTip": "Imagem ilustrativa de um cachorro saudável"
  },
  {
    "key": "blog-image-2",
    "searchText": "gato brincando com brinquedo",
    "type": "regular",
    "height": 200,
    "width": 300,
    "toolTip": "Imagem ilustrativa de um gato brincando"
  },
  {
    "key": "blog-image-3",
    "searchText": "cachorro no veterinário",
    "type": "regular",
    "height": 200,
    "width": 300,
    "toolTip": "Imagem ilustrativa de um cachorro na consulta veterinária"
  },
  {
    "key": "blog-post-image-1",
    "searchText": "cachorro saudável comendo ração detalhada",
    "type": "full",
    "height": 400,
    "width": 800,
    "toolTip": "Imagem principal do post sobre saúde do pet"
  }
]
 

*/
