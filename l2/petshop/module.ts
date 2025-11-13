/// <mls shortName="module" project="102017" folder="petshop" groupName="petshop" enhancement="_blank" />

export const moduleConfig = {
  theme: "petshop",
  initialPage: "homePage",
  menu: []
}

export const payload3 = {
  "finalModuleDetails": {
    "userLanguage": "pt",
    "executionRegions": "Brazil",
    "userPrompt": "criar site para petshop",
    "moduleGoal": "Desenvolver um site para um petshop que permita aos usuários navegar por produtos, agendar serviços e gerenciar fidelidade, com um design amigável e profissional.",
    "moduleName": "petshop",
    "requirements": [
      "Suportar papéis de usuários: admin para gerenciar o site, clientes para comprar produtos e agendar serviços, e operador para atendimento.",
      "Público-alvo: donos de animais de estimação em geral, especialmente cães e gatos.",
      "Tom do site: amigável e profissional, para atrair famílias e amantes de pets.",
      "Idiomas suportados: apenas português, focado no Brasil.",
      "Recursos principais: catálogo de produtos para pets (como ração e brinquedos) e agendamento de serviços (como banho e tosa).",
      "Funcionalidades específicas: sistema de fidelidade para recompensar clientes recorrentes.",
      "Preferências de design: design colorido com tons de azul e verde, transmitindo frescor e cuidado com os pets.",
      "Integração de pagamentos: cartão de crédito e PIX.",
      "Agendamento de serviços: seleção de data/hora disponíveis, confirmação por e-mail ou SMS.",
      "Sistema de fidelidade: ganhar 1 ponto por real gasto, resgatar por descontos em compras futuras.",
      "Integração externa: lista de veterinários parceiros para recomendações.",
      "Seção de blog: dicas de cuidados com pets para engajar visitantes."
    ],
    "userRequestsEnhancements": [
      {
        "description": "Adicionar um chat ao vivo para suporte aos clientes.",
        "priority": "could"
      },
      {
        "description": "Implementar notificações push para lembretes de agendamentos ou promoções.",
        "priority": "could"
      },
      {
        "description": "Incluir uma seção de adoção de animais abandonados.",
        "priority": "could"
      },
      {
        "description": "Adicionar filtros avançados no catálogo, como por tipo de animal ou alergias.",
        "priority": "could"
      },
      {
        "description": "Permitir avaliações e comentários nos produtos e serviços.",
        "priority": "could"
      }
    ]
  },
  "pages": [
    {
      "pageSequential": 0,
      "pageName": "homePage",
      "pageGoal": "Página inicial para apresentar o petshop, destacar produtos e serviços principais.",
      "pageRequirements": [
        "Exibir banner de boas-vindas com imagens de pets.",
        "Listar categorias de produtos e serviços.",
        "Incluir chamada para ação para navegar no catálogo ou agendar serviços."
      ]
    },
    {
      "pageSequential": 1,
      "pageName": "productCatalog",
      "pageGoal": "Página para navegar e pesquisar produtos para pets.",
      "pageRequirements": [
        "Exibir lista de produtos com filtros por categoria.",
        "Permitir adicionar produtos ao carrinho.",
        "Incluir detalhes do produto como preço e descrição."
      ]
    },
    {
      "pageSequential": 2,
      "pageName": "serviceScheduling",
      "pageGoal": "Página para agendar serviços como banho e tosa.",
      "pageRequirements": [
        "Seleção de data e hora disponíveis.",
        "Confirmação por e-mail ou SMS.",
        "Integração com calendário para evitar conflitos."
      ]
    },
    {
      "pageSequential": 3,
      "pageName": "loyaltyDashboard",
      "pageGoal": "Página para gerenciar pontos de fidelidade e resgatar recompensas.",
      "pageRequirements": [
        "Exibir saldo de pontos.",
        "Listar recompensas disponíveis.",
        "Permitir resgate de descontos."
      ]
    },
    {
      "pageSequential": 4,
      "pageName": "blogPage",
      "pageGoal": "Seção de blog com dicas de cuidados com pets.",
      "pageRequirements": [
        "Listar artigos sobre cuidados com pets.",
        "Permitir leitura e compartilhamento de posts."
      ]
    },
    {
      "pageSequential": 5,
      "pageName": "adminPanel",
      "pageGoal": "Painel para administradores gerenciarem o site.",
      "pageRequirements": [
        "Gerenciar produtos, serviços e usuários.",
        "Visualizar relatórios de vendas e agendamentos."
      ]
    }
  ],
  "plugins": [
    {
      "pluginSequential": 0,
      "pluginName": "pluginstripe",
      "pluginType": "third-party",
      "pluginGoal": "Integrar pagamentos via cartão de crédito e PIX.",
      "pluginRequirements": [
        "Suporte a transações seguras.",
        "Compatibilidade com moedas brasileiras."
      ]
    },
    {
      "pluginSequential": 1,
      "pluginName": "plugincalendar",
      "pluginType": "ui",
      "pluginGoal": "Fornecer interface de calendário para agendamento de serviços.",
      "pluginRequirements": [
        "Exibir datas e horários disponíveis.",
        "Prevenir agendamentos em conflito."
      ]
    },
    {
      "pluginSequential": 2,
      "pluginName": "pluginloyalty",
      "pluginType": "ui",
      "pluginGoal": "Gerenciar sistema de pontos de fidelidade.",
      "pluginRequirements": [
        "Calcular pontos por compras.",
        "Permitir resgate de recompensas."
      ]
    },
    {
      "pluginSequential": 3,
      "pluginName": "pluginblog",
      "pluginType": "ui",
      "pluginGoal": "Gerenciar e exibir conteúdo de blog.",
      "pluginRequirements": [
        "Criar e editar posts.",
        "Categorizar artigos."
      ]
    }
  ],
  "pagesWireframe": [
    {
      "pageSequential": 0,
      "pageName": "homePage",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-banner></organism-banner>",
        "<organism-product-categories></organism-product-categories>",
        "<organism-service-highlights></organism-service-highlights>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 1,
      "pageName": "productCatalog",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<aside>",
        "<organism-filters></organism-filters>",
        "</aside>",
        "<main>",
        "<organism-product-list></organism-product-list>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 2,
      "pageName": "serviceScheduling",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-calendar></organism-calendar>",
        "<organism-service-selection></organism-service-selection>",
        "<organism-confirmation></organism-confirmation>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 3,
      "pageName": "loyaltyDashboard",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-points-balance></organism-points-balance>",
        "<organism-rewards-list></organism-rewards-list>",
        "<organism-redeem-form></organism-redeem-form>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 4,
      "pageName": "blogPage",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-blog-list></organism-blog-list>",
        "<organism-blog-post></organism-blog-post>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 5,
      "pageName": "adminPanel",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<aside>",
        "<organism-admin-menu></organism-admin-menu>",
        "</aside>",
        "<main>",
        "<organism-dashboard-stats></organism-dashboard-stats>",
        "<organism-manage-products></organism-manage-products>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
        "</footer>"
      ]
    }
  ],
  "organism": [
    {
      "organismSequential": 0,
      "organismTag": "organism-nav",
      "planning": {
        "context": "Navegação principal do site, presente em todas as páginas para facilitar o acesso a seções principais.",
        "goal": "Exibir menu de navegação com links para home, catálogo, agendamento, fidelidade e blog.",
        "userStories": [
          {
            "story": "Como usuário, quero acessar rapidamente as seções do site via menu para navegar facilmente.",
            "derivedRequirements": [
              {
                "description": "Implementar links responsivos no menu.",
                "comment": "Usar design mobile-friendly."
              }
            ]
          }
        ],
        "constraints": [
          "Deve ser responsivo para dispositivos móveis.",
          "Incluir ícones para melhor usabilidade."
        ]
      }
    },
    {
      "organismSequential": 1,
      "organismTag": "organism-banner",
      "planning": {
        "context": "Banner de destaque na página inicial para atrair visitantes.",
        "goal": "Mostrar imagens de pets e mensagem de boas-vindas.",
        "userStories": [
          {
            "story": "Como visitante, quero ver um banner atrativo para entender o propósito do site.",
            "derivedRequirements": [
              {
                "description": "Incluir chamada para ação no banner.",
                "comment": "Botão para explorar produtos."
              }
            ]
          }
        ],
        "constraints": [
          "Imagens devem ser otimizadas para carregamento rápido."
        ]
      }
    },
    {
      "organismSequential": 2,
      "organismTag": "organism-product-categories",
      "planning": {
        "context": "Listagem de categorias na home para direcionar usuários ao catálogo.",
        "goal": "Exibir categorias como ração, brinquedos e acessórios.",
        "userStories": [
          {
            "story": "Como cliente, quero ver categorias para encontrar produtos rapidamente.",
            "derivedRequirements": [
              {
                "description": "Links para páginas de categoria.",
                "comment": "Facilitar navegação."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 3,
      "organismTag": "organism-service-highlights",
      "planning": {
        "context": "Destaques de serviços na home.",
        "goal": "Mostrar serviços como banho e tosa com descrições.",
        "userStories": [
          {
            "story": "Como dono de pet, quero ver serviços disponíveis para agendar.",
            "derivedRequirements": [
              {
                "description": "Incluir botão de agendamento.",
                "comment": "Direcionar para página de agendamento."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 4,
      "organismTag": "organism-footer",
      "planning": {
        "context": "Rodapé padrão em todas as páginas.",
        "goal": "Exibir informações de contato, links legais e redes sociais.",
        "userStories": [
          {
            "story": "Como usuário, quero acessar contatos no rodapé.",
            "derivedRequirements": [
              {
                "description": "Incluir mapa ou endereço.",
                "comment": "Para localização física."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 5,
      "organismTag": "organism-filters",
      "planning": {
        "context": "Filtros laterais no catálogo de produtos.",
        "goal": "Permitir filtrar produtos por categoria, preço, etc.",
        "userStories": [
          {
            "story": "Como comprador, quero filtrar produtos para encontrar o que preciso.",
            "derivedRequirements": [
              {
                "description": "Filtros dinâmicos que atualizam a lista.",
                "comment": "Melhorar performance."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 6,
      "organismTag": "organism-product-list",
      "planning": {
        "context": "Lista principal de produtos no catálogo.",
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
        ]
      }
    },
    {
      "organismSequential": 7,
      "organismTag": "organism-calendar",
      "planning": {
        "context": "Calendário para agendamento de serviços.",
        "goal": "Mostrar datas e horários disponíveis.",
        "userStories": [
          {
            "story": "Como usuário, quero selecionar data e hora para agendar serviço.",
            "derivedRequirements": [
              {
                "description": "Integração com plugin de calendário.",
                "comment": "Para disponibilidade em tempo real."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 8,
      "organismTag": "organism-service-selection",
      "planning": {
        "context": "Seleção de serviços no agendamento.",
        "goal": "Listar serviços disponíveis para escolha.",
        "userStories": [
          {
            "story": "Como cliente, quero escolher o serviço desejado.",
            "derivedRequirements": [
              {
                "description": "Descrições e preços dos serviços.",
                "comment": "Para decisão informada."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 9,
      "organismTag": "organism-confirmation",
      "planning": {
        "context": "Confirmação de agendamento.",
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
        ]
      }
    },
    {
      "organismSequential": 10,
      "organismTag": "organism-points-balance",
      "planning": {
        "context": "Saldo de pontos na fidelidade.",
        "goal": "Mostrar pontos acumulados.",
        "userStories": [
          {
            "story": "Como cliente fiel, quero ver meus pontos.",
            "derivedRequirements": [
              {
                "description": "Cálculo automático de pontos.",
                "comment": "Baseado em compras."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 11,
      "organismTag": "organism-rewards-list",
      "planning": {
        "context": "Lista de recompensas disponíveis.",
        "goal": "Exibir opções de resgate.",
        "userStories": [
          {
            "story": "Como usuário, quero ver recompensas para resgatar.",
            "derivedRequirements": [
              {
                "description": "Descontos e brindes.",
                "comment": "Para engajar fidelidade."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 12,
      "organismTag": "organism-redeem-form",
      "planning": {
        "context": "Formulário para resgatar recompensas.",
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
        ]
      }
    },
    {
      "organismSequential": 13,
      "organismTag": "organism-blog-list",
      "planning": {
        "context": "Lista de posts no blog.",
        "goal": "Exibir títulos e resumos de artigos.",
        "userStories": [
          {
            "story": "Como visitante, quero ler dicas sobre pets.",
            "derivedRequirements": [
              {
                "description": "Links para posts completos.",
                "comment": "Para engajamento."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 14,
      "organismTag": "organism-blog-post",
      "planning": {
        "context": "Conteúdo completo de um post.",
        "goal": "Mostrar texto, imagens e comentários.",
        "userStories": [
          {
            "story": "Como leitor, quero ler o artigo completo e comentar.",
            "derivedRequirements": [
              {
                "description": "Seção de comentários.",
                "comment": "Para interação."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 15,
      "organismTag": "organism-admin-menu",
      "planning": {
        "context": "Menu lateral para admins.",
        "goal": "Links para gerenciar produtos, usuários, etc.",
        "userStories": [
          {
            "story": "Como admin, quero acessar ferramentas de gestão rapidamente.",
            "derivedRequirements": [
              {
                "description": "Permissões baseadas em papel.",
                "comment": "Segurança."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 16,
      "organismTag": "organism-dashboard-stats",
      "planning": {
        "context": "Estatísticas no painel admin.",
        "goal": "Mostrar vendas, agendamentos, etc.",
        "userStories": [
          {
            "story": "Como admin, quero ver métricas para tomar decisões.",
            "derivedRequirements": [
              {
                "description": "Gráficos e relatórios.",
                "comment": "Visualização clara."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 17,
      "organismTag": "organism-manage-products",
      "planning": {
        "context": "Gerenciamento de produtos no admin.",
        "goal": "Adicionar, editar e remover produtos.",
        "userStories": [
          {
            "story": "Como admin, quero atualizar o catálogo.",
            "derivedRequirements": [
              {
                "description": "Formulários de edição.",
                "comment": "Fáceis de usar."
              }
            ]
          }
        ]
      }
    }
  ],
  "visualIdentity": {
    "logoDescription": "An SVG logo featuring a playful dog and cat silhouette in blue and green tones, with a paw print icon, conveying care and freshness for pets.",
    "fontFamily": "Arial, sans-serif",
    "iconStyle": "outline",
    "illustrationStyle": "flat illustrations with vibrant blue and green colors, focusing on cute pet themes",
    "colorPalette": {
      "primary": "#1C91CD",
      "secondary": "#52C41A",
      "text": "#403f3f",
      "background": "#ffffff",
      "border": "#E6E6E6",
      "error": "#FF4D4F",
      "warning": "#FAAD14",
      "success": "#52C41A"
    }
  },
  "tokens": {
    "description": "Tokens adaptados para o módulo petshop, com ênfase em tons azuis e verdes para transmitir frescor e cuidado com pets, usando unidades escaláveis e suporte a modo escuro.",
    "themeName": "petshop",
    "color": {
      "text-primary-color-lighter": "#408EC8",
      "text-primary-color-lighter-hover": "#4a9adb",
      "text-primary-color-lighter-focus": "#377bb0",
      "text-primary-color-lighter-disabled": "#629fd2",
      "text-primary-color": "#1C91CD",
      "text-primary-color-hover": "#2a9edb",
      "text-primary-color-focus": "#1786b7",
      "text-primary-color-disabled": "#55b4e1",
      "text-primary-color-darker": "#0F6FA9",
      "text-primary-color-darker-hover": "#1b7bb5",
      "text-primary-color-darker-focus": "#0c6495",
      "text-primary-color-darker-disabled": "#3a9ec1",
      "text-secondary-color-lighter": "#63d42b",
      "text-secondary-color-lighter-hover": "#75d93d",
      "text-secondary-color-lighter-focus": "#55b825",
      "text-secondary-color-lighter-disabled": "#8ade5f",
      "text-secondary-color": "#52C41A",
      "text-secondary-color-hover": "#66d93f",
      "text-secondary-color-focus": "#4ca610",
      "text-secondary-color-disabled": "#8cd78e",
      "text-secondary-color-darker": "#3d9b13",
      "text-secondary-color-darker-hover": "#4ca610",
      "text-secondary-color-darker-focus": "#33800e",
      "text-secondary-color-darker-disabled": "#6bb846",
      "bg-primary-color-lighter": "#ffffff",
      "bg-primary-color-lighter-hover": "#f2f2f2",
      "bg-primary-color-lighter-focus": "#e6e6e6",
      "bg-primary-color-lighter-disabled": "#d9d9d9",
      "bg-primary-color": "#ffffff",
      "bg-primary-color-hover": "#f2f2f2",
      "bg-primary-color-focus": "#e6e6e6",
      "bg-primary-color-disabled": "#d9d9d9",
      "bg-primary-color-darker": "#fafafa",
      "bg-primary-color-darker-hover": "#f5f5f5",
      "bg-primary-color-darker-focus": "#eeeeee",
      "bg-primary-color-darker-disabled": "#e0e0e0",
      "bg-secondary-color-lighter": "#F9F9F9",
      "bg-secondary-color-lighter-hover": "#f4f4f4",
      "bg-secondary-color-lighter-focus": "#efefef",
      "bg-secondary-color-lighter-disabled": "#eaeaea",
      "bg-secondary-color": "#E6E6E6",
      "bg-secondary-color-hover": "#d9d9d9",
      "bg-secondary-color-focus": "#cccccc",
      "bg-secondary-color-disabled": "#bfbfbf",
      "bg-secondary-color-darker": "#C0C0C0",
      "bg-secondary-color-darker-hover": "#b3b3b3",
      "bg-secondary-color-darker-focus": "#a6a6a6",
      "bg-secondary-color-darker-disabled": "#999999",
      "grey-color-lighter": "#F9FAFB",
      "grey-color-light": "#F2F2F2",
      "grey-color": "#E6E6E6",
      "grey-color-dark": "#D3D3D3",
      "grey-color-darker": "#C0C0C0",
      "error-color": "#FF4D4F",
      "error-color-hover": "#ff6666",
      "error-color-focus": "#e63e3e",
      "error-color-disabled": "#ff9999",
      "success-color": "#52C41A",
      "success-color-hover": "#66d93f",
      "success-color-focus": "#4ca610",
      "success-color-disabled": "#8cd78e",
      "warning-color": "#FAAD14",
      "warning-color-hover": "#fbbd34",
      "warning-color-focus": "#e09a0e",
      "warning-color-disabled": "#fdd55e",
      "info-color": "#0a6dc9",
      "info-color-hover": "#1b7edb",
      "info-color-focus": "#006ab3",
      "info-color-disabled": "#66a8e1",
      "active-color": "#1890FF",
      "active-color-hover": "#1a99ff",
      "active-color-focus": "#0e80cc",
      "active-color-disabled": "#66b3ff",
      "link-color": "#1890FF",
      "link-color-hover": "#1a99ff",
      "link-color-focus": "#0e80cc",
      "link-color-disabled": "#66b3ff",
      "_dark-text-primary-color-lighter": "#FFFFFF",
      "_dark-text-primary-color-lighter-hover": "#f2f2f2",
      "_dark-text-primary-color-lighter-focus": "#e6e6e6",
      "_dark-text-primary-color-lighter-disabled": "#d9d9d9",
      "_dark-text-primary-color": "#e6edf3",
      "_dark-text-primary-color-hover": "#d1d9e4",
      "_dark-text-primary-color-focus": "#c3cfd8",
      "_dark-text-primary-color-disabled": "#b0b8c4",
      "_dark-text-primary-color-darker": "#8d96a0",
      "_dark-text-primary-color-darker-hover": "#a1aab0",
      "_dark-text-primary-color-darker-focus": "#7a828a",
      "_dark-text-primary-color-darker-disabled": "#b1b7bd",
      "_dark-text-secondary-color-lighter": "#63d42b",
      "_dark-text-secondary-color-lighter-hover": "#75d93d",
      "_dark-text-secondary-color-lighter-focus": "#55b825",
      "_dark-text-secondary-color-lighter-disabled": "#8ade5f",
      "_dark-text-secondary-color": "#52C41A",
      "_dark-text-secondary-color-hover": "#66d93f",
      "_dark-text-secondary-color-focus": "#4ca610",
      "_dark-text-secondary-color-disabled": "#8cd78e",
      "_dark-text-secondary-color-darker": "#bddef3",
      "_dark-text-secondary-color-darker-hover": "#c7e3f5",
      "_dark-text-secondary-color-darker-focus": "#a3c8e5",
      "_dark-text-secondary-color-darker-disabled": "#d3e9f7",
      "_dark-bg-primary-color-lighter": "#666666",
      "_dark-bg-primary-color-lighter-hover": "#7a7a7a",
      "_dark-bg-primary-color-lighter-focus": "#5c5c5c",
      "_dark-bg-primary-color-lighter-disabled": "#808080",
      "_dark-bg-primary-color": "#0d1117",
      "_dark-bg-primary-color-hover": "#1a1f24",
      "_dark-bg-primary-color-focus": "#0a0e13",
      "_dark-bg-primary-color-disabled": "#2b3036",
      "_dark-bg-primary-color-darker": "#262626",
      "_dark-bg-primary-color-darker-hover": "#333333",
      "_dark-bg-primary-color-darker-focus": "#1f1f1f",
      "_dark-bg-primary-color-darker-disabled": "#404040",
      "_dark-bg-secondary-color-lighter": "#636363",
      "_dark-bg-secondary-color-lighter-hover": "#757575",
      "_dark-bg-secondary-color-lighter-focus": "#4e4e4e",
      "_dark-bg-secondary-color-lighter-disabled": "#808080",
      "_dark-bg-secondary-color": "#161b22",
      "_dark-bg-secondary-color-hover": "#1f2329",
      "_dark-bg-secondary-color-focus": "#0f1418",
      "_dark-bg-secondary-color-disabled": "#2c3238",
      "_dark-bg-secondary-color-darker": "#4b3f3f",
      "_dark-bg-secondary-color-darker-hover": "#5b4f4f",
      "_dark-bg-secondary-color-darker-focus": "#3f2f2f",
      "_dark-bg-secondary-color-darker-disabled": "#6a5c5c",
      "_dark-grey-color-lighter": "#2B2B2B",
      "_dark-grey-color-light": "#414141",
      "_dark-grey-color": "#575757",
      "_dark-grey-color-dark": "#6D6D6D",
      "_dark-grey-color-darker": "#969494",
      "_dark-error-color": "#f9676a",
      "_dark-error-color-hover": "#ff7b7f",
      "_dark-error-color-focus": "#e5565e",
      "_dark-error-color-disabled": "#ff9b9e",
      "_dark-success-color": "#63d42b",
      "_dark-success-color-hover": "#75d93d",
      "_dark-success-color-focus": "#55b825",
      "_dark-success-color-disabled": "#8ade5f",
      "_dark-warning-color": "#eead2b",
      "_dark-warning-color-hover": "#f2b73d",
      "_dark-warning-color-focus": "#d69c1f",
      "_dark-warning-color-disabled": "#f5cd5c",
      "_dark-info-color": "#0b81ef",
      "_dark-info-color-hover": "#1a95f6",
      "_dark-info-color-focus": "#0073d8",
      "_dark-info-color-disabled": "#66b3ef",
      "_dark-active-color": "#0b81ef",
      "_dark-active-color-hover": "#1a95f6",
      "_dark-active-color-focus": "#0073d8",
      "_dark-active-color-disabled": "#66b3ef",
      "_dark-link-color": "#0b81ef",
      "_dark-link-color-hover": "#1a95f6",
      "_dark-link-color-focus": "#0073d8",
      "_dark-link-color-disabled": "#66b3ef"
    },
    "global": {
      "breakpoint-small": "544px",
      "breakpoint-medium": "768px",
      "breakpoint-large": "1012px",
      "transition-slow": "0.2s",
      "transition-normal": "0.3s",
      "transition-fast": "0.5s",
      "space-base-unit": "0.25rem",
      "space-8": "calc(@space-base-unit * 2)",
      "space-16": "calc(@space-base-unit * 4)",
      "space-24": "calc(@space-base-unit * 6)",
      "space-32": "calc(@space-base-unit * 8)",
      "space-40": "calc(@space-base-unit * 10)",
      "space-48": "calc(@space-base-unit * 12)",
      "space-64": "calc(@space-base-unit * 16)"
    },
    "typography": {
      "font-base-unit": ".25rem",
      "font-family-primary": "'Arial', sans-serif",
      "font-family-secondary": "serif",
      "font-size-12": "calc(@font-base-unit * 3)",
      "font-size-16": "calc(@font-base-unit * 4)",
      "font-size-20": "calc(@font-base-unit * 5)",
      "font-size-24": "calc(@font-base-unit * 6)",
      "font-size-40": "calc(@font-base-unit * 10)",
      "font-size-48": "calc(@font-base-unit * 12)",
      "font-size-64": "calc(@font-base-unit * 16)",
      "line-height-base-unit": "1",
      "line-height-small": "calc(@line-height-base-unit * 1.1)",
      "line-height-medium": "calc(@line-height-base-unit * 1.3)",
      "line-height-large": "calc(@line-height-base-unit * 1.5)",
      "font-weight-lighter": "100",
      "font-weight-light": "200",
      "font-weight-normal": "400",
      "font-weight-bold": "700",
      "font-weight-bolder": "900"
    }
  },
  "obs": []
}