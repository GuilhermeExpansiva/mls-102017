/// <mls shortName="organismProductCategories" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  categoriesTitle: 'Categorias de Produtos',
  viewProducts: 'Ver produtos'
}
const message_en = {
  categoriesTitle: 'Product Categories',
  viewProducts: 'View products'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

interface Category {
  id: number;
  name: string;
  imageUrl: string;
  alt: string;
  link: string;
}

interface CategoriesResponse {
  categories: Category[];
}

const inMemoryDb = {
  categories: [
    {
      id: 1,
      name: 'Ração',
      imageUrl: 'https://images.unsplash.com/photo-1761486691834-cd4925ad60b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBmb29kJTIwYmFnc3xlbnwwfHx8fDE3NjI3OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Ração para pets',
      link: '#'
    },
    {
      id: 2,
      name: 'Brinquedos',
      imageUrl: 'https://images.unsplash.com/photo-1734526742079-026fa3b65082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjB0b3lzJTIwYXNzb3J0bWVudHxlbnwwfHx8fDE3NjI3OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Brinquedos para pets',
      link: '#'
    },
    {
      id: 3,
      name: 'Acessórios',
      imageUrl: 'https://images.unsplash.com/photo-1705147293254-1d8048b14797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBhY2Nlc3NvcmllcyUyMGxpa2UlMjBjb2xsYXJzJTIwYW5kJTIwYmVkc3xlbnwwfHx8fDE3NjI3OTUwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Acessórios para pets',
      link: '#'
    }
  ]
};

@customElement('petshop--organism-product-categories-102017')
export class organismProductCategories extends IcaOrganismBase {
  private i18n: MessageType = messages['en'];

  @state() categoriesResponse?: CategoriesResponse;

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchCategories();
    this.updateStatesFromCategories(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch product categories.
   * method: GET
   * notes: used by this organism to populate the categories list.
   */
  private mockFetchCategories(): CategoriesResponse {
    return { categories: inMemoryDb.categories };
  }

  private updateStatesFromCategories(resp: CategoriesResponse) {
    setState('ui.petshop.organismProductCategories', resp);
    this.categoriesResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="categories-container" id="petshop--product-categories-102017-1">
      <h2 class="categories-title" id="petshop--product-categories-102017-2">${this.i18n.categoriesTitle}</h2>
      <div class="categories-grid" id="petshop--product-categories-102017-3">
        ${this.categoriesResponse?.categories.map((category, index) => html`
          <div class="category-item" id="petshop--product-categories-102017-${4 + index * 4}">
            <img src="${category.imageUrl}" alt="${category.alt}" class="category-image" id="petshop--product-categories-102017-${5 + index * 4}">
            <h3 class="category-name" id="petshop--product-categories-102017-${6 + index * 4}">${category.name}</h3>
            <a href="${category.link}" class="category-link" id="petshop--product-categories-102017-${7 + index * 4}">${this.i18n.viewProducts}</a>
          </div>
        `)}
      </div>
    </div>`;
  }
}