/// <mls shortName="organismFilters" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  filtersTitle: 'Filtros',
  categoryLabel: 'Categoria',
  allCategories: 'Todas',
  foodCategory: 'Ração',
  toysCategory: 'Brinquedos',
  accessoriesCategory: 'Acessórios',
  minPriceLabel: 'Preço Mínimo',
  maxPriceLabel: 'Preço Máximo',
  applyFiltersButton: 'Aplicar Filtros'
}
const message_en = {
  filtersTitle: 'Filters',
  categoryLabel: 'Category',
  allCategories: 'All',
  foodCategory: 'Food',
  toysCategory: 'Toys',
  accessoriesCategory: 'Accessories',
  minPriceLabel: 'Minimum Price',
  maxPriceLabel: 'Maximum Price',
  applyFiltersButton: 'Apply Filters'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

const inMemoryDb = {
  filters: {
    categories: ['Todas', 'Ração', 'Brinquedos', 'Acessórios'],
    defaultMinPrice: 0,
    defaultMaxPrice: 1000
  }
};

interface AppliedFilters {
  category: string;
  minPrice: number;
  maxPrice: number;
}

@customElement('petshop--organism-filters-102017')
export class organismFilters extends IcaOrganismBase {
  private i18n: MessageType = messages['en'];

  @state() appliedFilters?: AppliedFilters;

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchFilters();
    this.updateStatesFromFilters(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch available filter options for products.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.filters
   */
  private mockFetchFilters(): AppliedFilters {
    return {
      category: '',
      minPrice: inMemoryDb.filters.defaultMinPrice,
      maxPrice: inMemoryDb.filters.defaultMaxPrice
    };
  }

  /**
   * endpoint-intent: I need an endpoint to apply filters and retrieve filtered products.
   * method: POST
   * notes: client-only mock, updates inMemoryDb and simulates filtering
   */
  private mockApplyFilters(filters: AppliedFilters): AppliedFilters {
    // Simulate applying filters, perhaps update inMemoryDb or just return
    return filters;
  }

  private updateStatesFromFilters(resp: AppliedFilters) {
    setState('ui.petshop.organismFilters', resp);
    this.appliedFilters = resp;
  }

  private handleApplyFilters(e: Event) {
    e.preventDefault();
    const category = (this.shadowRoot?.getElementById('categoria') as HTMLSelectElement)?.value || '';
    const minPrice = parseFloat((this.shadowRoot?.getElementById('preco-min') as HTMLInputElement)?.value || '0');
    const maxPrice = parseFloat((this.shadowRoot?.getElementById('preco-max') as HTMLInputElement)?.value || '1000');
    const filters: AppliedFilters = { category, minPrice, maxPrice };
    const resp = this.mockApplyFilters(filters);
    this.updateStatesFromFilters(resp);
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<div class="filter-title" id="petshop--filters-102017-1">${this.i18n.filtersTitle}</div>
<div class="filter-group" id="petshop--filters-102017-2">
<label for="categoria" id="petshop--filters-102017-3">${this.i18n.categoryLabel}</label>
<select id="categoria" .value=${this.appliedFilters?.category || ''}>
<option value="" id="petshop--filters-102017-4">${this.i18n.allCategories}</option>
${inMemoryDb.filters.categories.slice(1).map(cat => html`<option value=${cat.toLowerCase()}>${cat}</option>`)}
</select>
</div>
<div class="filter-group" id="petshop--filters-102017-8">
<label for="preco-min" id="petshop--filters-102017-9">${this.i18n.minPriceLabel}</label>
<input type="number" id="preco-min" placeholder="0" .value=${this.appliedFilters?.minPrice?.toString() || '0'}>
</div>
<div class="filter-group" id="petshop--filters-102017-10">
<label for="preco-max" id="petshop--filters-102017-11">${this.i18n.maxPriceLabel}</label>
<input type="number" id="preco-max" placeholder="1000" .value=${this.appliedFilters?.maxPrice?.toString() || '1000'}>
</div>
<button class="apply-filters" id="petshop--filters-102017-12" @click=${this.handleApplyFilters}>${this.i18n.applyFiltersButton}</button>
`
  }
}