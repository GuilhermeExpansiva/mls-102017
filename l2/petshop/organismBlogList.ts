/// <mls shortName="organismBlogList" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  readMore: 'Ler mais'
}
const message_en = {
  readMore: 'Read more'
}
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

interface BlogPost {
  id: string;
  imageUrl: string;
  altText: string;
  title: string;
  summary: string;
}

type ContentResponse = BlogPost[];

const inMemoryDb = {
  blogPosts: [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1747577672081-991640ad50ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjYWNob3JybyUyMHNhdWQlQzMlQTF2ZWwlMjBjb21lbmRvJTIwcmElQzMlQTclQzMlQTNvfGVufDB8fHx8MTc2Mjc5NTEzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      altText: 'Imagem de um cachorro saudável',
      title: 'Dicas para Manter seu Pet Saudável',
      summary: 'Aprenda como cuidar da alimentação, exercícios e saúde do seu animal de estimação com essas dicas práticas.'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1652683049894-38aeeb27a3b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxnYXRvJTIwYnJpbmNhbmRvJTIwY29tJTIwYnJpbnF1ZWRvfGVufDB8fHx8MTc2Mjc5NTEzOXww&ixlib=rb-4.1.0&q=80&w=1080',
      altText: 'Imagem de um gato brincando',
      title: 'Brincadeiras Divertidas para Gatos',
      summary: 'Descubra jogos e brinquedos que mantêm seu gato ativo e feliz, promovendo o bem-estar.'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1757744140206-07d35af950ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjYWNob3JybyUyMG5vJTIwdmV0ZXJpbiVDMyVBMXJpb3xlbnwwfHx8fDE3NjI3OTUxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      altText: 'Imagem de um cachorro no veterinário',
      title: 'Quando Levar seu Pet ao Veterinário',
      summary: 'Saiba os sinais de alerta e a importância de check-ups regulares para a saúde do seu pet.'
    }
  ]
};

@customElement('petshop--organism-blog-list-102017')
export class organismBlogList extends IcaOrganismBase {
  @state() contentResponse?: ContentResponse;
  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchBlogPosts();
    this.updateStatesFromContent(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch the list of blog posts.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.blogPosts
   */
  private mockFetchBlogPosts(): ContentResponse {
    return inMemoryDb.blogPosts;
  }

  private updateStatesFromContent(resp: ContentResponse) {
    setState('ui.petshop.organismBlogList', resp);
    this.contentResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    return html`<ul class="blog-list" id="petshop--blog-list-102017-1">
${this.contentResponse?.map((post, index) => html`<li class="blog-item" id="petshop--blog-list-102017-${index + 2}">
<img src="${post.imageUrl}" alt="${post.altText}" class="blog-image" id="petshop--blog-list-102017-${index * 5 + 3}">
<h3 class="blog-title" id="petshop--blog-list-102017-${index * 5 + 4}">${post.title}</h3>
<p class="blog-summary" id="petshop--blog-list-102017-${index * 5 + 5}">${post.summary}</p>
<a href="#" class="blog-link" id="petshop--blog-list-102017-${index * 5 + 6}">${this.i18n.readMore}</a>
</li>`)}
</ul>`;
  }
}