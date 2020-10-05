import {LitElement, html, css} from 'lit-element';

class AppData extends LitElement {
    static get properties() {
        return {

        }
    }

    constructor() {
        super();
    }

    static get styles() {
        return [
            css``,
        ];
    }

    render() {
        return html`
            <div class="container">
                <p>Polymer Lit element component.</p>
            </div>
        `;
    }

}

window.customElements.define('app-data', AppData);