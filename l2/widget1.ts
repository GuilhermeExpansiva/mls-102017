/// <mls shortName="widget1" project="102017" enhancement="_100554_enhancementLit" />

 import { html } from 'lit'; 
 import { customElement, property } from 'lit/decorators.js';
 import { StateLitElement } from '_100554_/l2/stateLitElement';

 @customElement('widget1-102017')
 export class Widget1100000 extends StateLitElement {
    
     @property() name: string = 'Somebody';

     render() {
         return html`<p> Hello, ${ this.name } !</p>`;
     }
 }
