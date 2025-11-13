/// <mls shortName="organismBlogPost" project="102017" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from '_100554_icaOrganismBase';
import { setState } from '_100554_collabState';

/// **collab_i18n_start**
const message_pt = {
  commentsTitle: 'Comentários',

}
const message_en = {
  commentsTitle: 'Comments',
}

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt': message_pt
}
/// **collab_i18n_end**

const inMemoryDb = {
  blogPost: {
    title: 'Dicas para Manter seu Pet Saudável',
    meta: 'Publicado em 10 de novembro de 2025 por Equipe Petshop',
    imageUrl: 'https://images.unsplash.com/photo-1747577672081-991640ad50ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjYWNob3JybyUyMHNhdWQlQzMlQTF2ZWwlMjBjb21lbmRvJTIwcmElQzMlQTclQzMlQTNvJTIwZGV0YWxoYWRhfGVufDB8fHx8MTc2Mjc5NTEzOXww&ixlib=rb-4.1.0&q=85',
    imageAlt: 'Cachorro saudável comendo ração',
    content: {
      intro: 'Manter seu pet saudável é essencial para uma vida longa e feliz. Aqui estão algumas dicas práticas:',
      nutrition: {
        title: 'Alimentação Balanceada:',
        text: 'Ofereça uma dieta rica em nutrientes, adequada ao porte e idade do seu animal. Consulte um veterinário para recomendações específicas.'
      },
      exercise: {
        title: 'Exercícios Diários:',
        text: 'Passeios e brincadeiras ajudam a manter o peso ideal e a saúde mental do pet.'
      },
      care: {
        title: 'Cuidados Veterinários:',
        text: 'Vacinas, desparasitações e check-ups regulares são fundamentais.'
      },
      reminder: 'Lembre-se de observar mudanças no comportamento ou apetite, e procure ajuda profissional se necessário.'
    },
    shareButtons: {
      facebook: 'Compartilhar no Facebook',
      twitter: 'Compartilhar no Twitter',
      whatsapp: 'Compartilhar no WhatsApp'
    },
    comments: [
      {
        author: 'Maria Silva',
        text: 'Muito útil! Obrigada pelas dicas.'
      },
      {
        author: 'João Pereira',
        text: 'Adorei o artigo, vou implementar essas ideias com meu cachorro.'
      }
    ]
  }
};

interface BlogPostResponse {
  title: string;
  meta: string;
  imageUrl: string;
  imageAlt: string;
  content: {
    intro: string;
    nutrition: { title: string; text: string; };
    exercise: { title: string; text: string; };
    care: { title: string; text: string; };
    reminder: string;
  };
  shareButtons: {
    facebook: string;
    twitter: string;
    whatsapp: string;
  };
  comments: Array<{ author: string; text: string; }>;
}

@customElement('petshop--organism-blog-post-102017')
export class organismBlogPost extends IcaOrganismBase {
  @state() contentResponse?: BlogPostResponse;

  private i18n: MessageType = messages['en'];

  connectedCallback() {
    super.connectedCallback();
    const resp = this.mockFetchBlogPost();
    this.updateStatesFromContent(resp);
  }

  /**
   * endpoint-intent: I need an endpoint to fetch the blog post content.
   * method: GET
   * notes: client-only mock, reads from inMemoryDb.blogPost
   */
  private mockFetchBlogPost(): BlogPostResponse {
    return inMemoryDb.blogPost;
  }

  private updateStatesFromContent(resp: BlogPostResponse) {
    setState('ui.petshop.organismBlogPost', resp);
    this.contentResponse = resp;
  }

  render() {
    const lang = this.getMessageKey(messages);
    this.i18n = messages[lang];
    if (!this.contentResponse) return html``;
    return html`<article class="blog-post" id="petshop--blog-post-102017-1">
      <h1 class="post-title" id="petshop--blog-post-102017-2">${this.contentResponse.title}</h1>
      <div class="post-meta" id="petshop--blog-post-102017-3">${this.contentResponse.meta}</div>
      <img src="${this.contentResponse.imageUrl}" alt="${this.contentResponse.imageAlt}" class="post-image" id="petshop--blog-post-102017-4">
      <div class="post-content" id="petshop--blog-post-102017-5">
        <p id="petshop--blog-post-102017-6">${this.contentResponse.content.intro}</p>
        <p id="petshop--blog-post-102017-7"><strong id="petshop--blog-post-102017-8">${this.contentResponse.content.nutrition.title}</strong> ${this.contentResponse.content.nutrition.text}</p>
        <p id="petshop--blog-post-102017-9"><strong id="petshop--blog-post-102017-10">${this.contentResponse.content.exercise.title}</strong> ${this.contentResponse.content.exercise.text}</p>
        <p id="petshop--blog-post-102017-11"><strong id="petshop--blog-post-102017-12">${this.contentResponse.content.care.title}</strong> ${this.contentResponse.content.care.text}</p>
        <p id="petshop--blog-post-102017-13">${this.contentResponse.content.reminder}</p>
      </div>
      <div class="share-buttons" id="petshop--blog-post-102017-14">
        <button class="share-button" id="petshop--blog-post-102017-15">${this.contentResponse.shareButtons.facebook}</button>
        <button class="share-button" id="petshop--blog-post-102017-16">${this.contentResponse.shareButtons.twitter}</button>
        <button class="share-button" id="petshop--blog-post-102017-17">${this.contentResponse.shareButtons.whatsapp}</button>
      </div>
      <div class="comments-section" id="petshop--blog-post-102017-18">
        <h2 class="comments-title" id="petshop--blog-post-102017-19">${this.i18n.commentsTitle}</h2>
        ${this.contentResponse.comments.map(comment => html`
          <div class="comment" id="petshop--blog-post-102017-20">
            <div class="comment-author" id="petshop--blog-post-102017-21">${comment.author}</div>
            <div class="comment-text" id="petshop--blog-post-102017-22">${comment.text}</div>
          </div>
        `)}
      </div>
    </article>`;
  }
}