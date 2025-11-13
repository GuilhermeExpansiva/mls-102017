/// <mls shortName="organismProductList" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  addToCart: 'Adicionar ao Carrinho'
}
const message_en = {
  addToCart: 'Add to Cart'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
}

interface ProductsResponse {
  products: Product[];
}

const inMemoryDb = {
  products: [
    { id: 1, name: "Ração Premium para Cães", price: "R$ 89,90", image: "https://images.unsplash.com/photo-1672664408117-a58d7e489264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxyYSVDMyVBNyVDMyVBM28lMjBwYXJhJTIwYyVDMyVBM2VzJTIwcHJlbWl1bXxlbnwwfHx8fDE3NjI3OTUwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Ração para Cães" },
    { id: 2, name: "Brinquedo Bola para Gatos", price: "R$ 19,90", image: "https://images.unsplash.com/photo-1691351943492-cfee023e9cbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxicmlucXVlZG8lMjBib2xhJTIwcGFyYSUyMGdhdG9zfGVufDB8fHx8MTc2Mjc5NTA2NHww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Brinquedo para Gatos" },
    { id: 3, name: "Coleira Ajustável", price: "R$ 29,90", image: "https://images.unsplash.com/photo-1756789347834-0ed8a08b5fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjb2xlaXJhJTIwYWp1c3QlQzMlQTF2ZWwlMjBwYXJhJTIwcGV0c3xlbnwwfHx8fDE3NjI3OTUwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Coleira para Pets" },
    { id: 4, name: "Shampoo Antialérgico", price: "R$ 39,90", image: "https://images.unsplash.com/photo-1647002380358-fc70ed2f04e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxzaGFtcG9vJTIwYW50aWFsJUMzJUE5cmdpY28lMjBwYXJhJTIwcGV0c3xlbnwwfHx8fDE3NjI3OTUwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Shampoo para Pets" }
  ]
};

@customElement('petshop--organism-product-list-102017')
export class organismProductList extends IcaOrganismBase {
  private i18n: MessageType = messages['en'];

  @state() productsResponse?: ProductsResponse;

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchProducts();
    this.updateStatesFromProducts(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch the list of products.
   * method: GET
   * notes: used by this organism to populate the product list.
   */
  private mockFetchProducts(): ProductsResponse {
    return { products: inMemoryDb.products };
  }

  private updateStatesFromProducts(resp: ProductsResponse) {
    setState("ui.petshop.organismProductList", resp);
    this.productsResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="product-grid" id="petshop--product-list-102017-1">
      ${this.productsResponse?.products.map(product => html`
        <div class="product-item" id="petshop--product-list-102017-${product.id * 5 + 1}">
          <img src="${product.image}" alt="${product.alt}" class="product-image" id="petshop--product-list-102017-${product.id * 5 + 2}">
          <div class="product-name" id="petshop--product-list-102017-${product.id * 5 + 3}">${product.name}</div>
          <div class="product-price" id="petshop--product-list-102017-${product.id * 5 + 4}">${product.price}</div>
          <button class="add-to-cart" id="petshop--product-list-102017-${product.id * 5 + 5}">${this.i18n.addToCart}</button>
        </div>
      `)}
    </div>`;
  }
}