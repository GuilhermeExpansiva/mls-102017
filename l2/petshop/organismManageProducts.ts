/// <mls shortName="organismManageProducts" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  manageProducts: 'Gerenciar Produtos',
  name: 'Nome',
  category: 'Categoria',
  price: 'Preço',
  stock: 'Estoque',
  actions: 'Ações',
  edit: 'Editar',
  remove: 'Remover',
  addProduct: 'Adicionar Produto'
}
const message_en = {
  manageProducts: 'Manage Products',
  name: 'Name',
  category: 'Category',
  price: 'Price',
  stock: 'Stock',
  actions: 'Actions',
  edit: 'Edit',
  remove: 'Remove',
  addProduct: 'Add Product'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

const inMemoryDb = {
  products: [
    { id: 1, name: 'Ração para Cães', category: 'Alimentação', price: 45.00, stock: 50 },
    { id: 2, name: 'Brinquedo para Gatos', category: 'Brinquedos', price: 15.00, stock: 30 }
  ]
};

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

interface ProductsResponse {
  products: Product[];
}

interface ProductRequest {
  // Para futuras operações como adicionar ou editar
}

@customElement('petshop--organism-manage-products-102017')
export class organismManageProducts extends IcaOrganismBase {
  @state() productsResponse?: ProductsResponse;

  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchProducts();
    this.updateStatesFromProducts(resp);
  }

  /**
   * endpoint-intent: preciso de um endpoint para buscar a lista de produtos
   * method: GET
   * notes: usado por este organismo para listar produtos na tela
   */
  private mockFetchProducts(): ProductsResponse {
    return { products: inMemoryDb.products };
  }

  private updateStatesFromProducts(resp: ProductsResponse) {
    setState("ui.petshop.organismManageProducts", resp);
    this.productsResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="manage-container" id="petshop--manage-products-102017-1">
      <h2 id="petshop--manage-products-102017-2">${this.i18n.manageProducts}</h2>
      <table class="products-table" id="petshop--manage-products-102017-3">
        <thead id="petshop--manage-products-102017-4">
          <tr id="petshop--manage-products-102017-5">
            <th id="petshop--manage-products-102017-6">${this.i18n.name}</th>
            <th id="petshop--manage-products-102017-7">${this.i18n.category}</th>
            <th id="petshop--manage-products-102017-8">${this.i18n.price}</th>
            <th id="petshop--manage-products-102017-9">${this.i18n.stock}</th>
            <th id="petshop--manage-products-102017-10">${this.i18n.actions}</th>
          </tr>
        </thead>
        <tbody id="petshop--manage-products-102017-11">
          ${this.productsResponse?.products.map(product => html`
            <tr id="petshop--manage-products-102017-12-${product.id}">
              <td id="petshop--manage-products-102017-13-${product.id}">${product.name}</td>
              <td id="petshop--manage-products-102017-14-${product.id}">${product.category}</td>
              <td id="petshop--manage-products-102017-15-${product.id}">R$ ${product.price.toFixed(2)}</td>
              <td id="petshop--manage-products-102017-16-${product.id}">${product.stock}</td>
              <td id="petshop--manage-products-102017-17-${product.id}"><button id="petshop--manage-products-102017-18-${product.id}">${this.i18n.edit}</button> <button id="petshop--manage-products-102017-19-${product.id}">${this.i18n.remove}</button></td>
            </tr>
          `)}
        </tbody>
      </table>
      <button class="add-product-btn" id="petshop--manage-products-102017-28">${this.i18n.addProduct}</button>
    </div>`;
  }
}