import { LitElement, html, css } from 'lit-element';
import { globalCSS } from "./src/global";
import 'bootstrap/dist/css/bootstrap.css';


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
            globalCSS,
            css`
                .container-fluid {
                    width:100%;
                }
                .row {
                    display: -ms-flexbox;
                    display: flex;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                  }
                
                h1, h2, h3, h4, h5, h6 {
                    margin-top: 0;
                    margin-bottom: 0.5rem;
                }
                
                p {
                    margin-top: 0;
                    margin-bottom: 1rem;
                }

                .home::before {
                    content: "";
                    position: absolute;
                    background: url("https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/385/landscape/polymerjs.png");
                    background-repeat:no-repeat;
                    background-position:50% 0; 
                    transform: translate(0, 10%);
                    opacity: 0.3;
                    height: 100%;
                    width:100%;
                }

                .home h1 {
                    text-align: center;
                    margin: 20px auto;
                    font-size: 40px;
                }
                .grid-system {
                    flex-direction: row;
                    flex-wrap: wrap;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-auto-rows: fit-content(300px);
                    align-items: stretch;
                    justify-content: space-between;
                    padding: 0 100px;
                }

                .grid-system div {
                    flex: 1 0 34%;
                    min-width: 200px;
                    display: flex;
                    flex-direction: column;
                    margin: 20px;
                    padding: 40px;
                    background: grey;
                    color: rgba(0,0,0,.87);
                    transition: 0.4s transform;
                    will-change: transform;
                    transform: scale(1);
                }

                .home p {
                    font-size: 14px;
                }
                .grid-system h3 {
                    font-size: 18px;
                    text-decoration: underline;
                }

                .grid-system a {
                    text-decoration: none;
                }

                .grid-system h3,
                .grid-system p {
                    text-align: center;
                    color: #ffffff;
                }

                .desc p {
                    display: inline-block;
                    text-align: center;
                    width: 100%;
                    font-size: 25px;
                }
  
            `,
        ];
    }

    render() {
        return html`
            <div class="container-fluid">
                <div class="home">
                    <div class="row">
                        <h1>Polymer Boilerplate...</h1>
                    </div>
                    <div class="row desc">
                        <p>This page develop using following features:</p>
                    </div>
                    <div class="row">
                        <div class="grid-system">
                            <div class="grid-1">
                                <a href="https://polymer-library.polymer-project.org/3.0/docs/about_30" target="_blank">
                                    <h3>Polymer 3</h3>
                                    <p>The Polymer library provides a set of features for creating custom elements. These features are designed to make it easier and faster to make custom elements that work like standard DOM elements.</p>
                                </a>
                            </div>
                            <div class="grid-2">
                                <a href="https://lit-element.polymer-project.org/" target="_blank">
                                    <h3>Lit Elements</h3>
                                    <p>LitElement makes it easy to define Web Components – ideal for sharing elements across your organization or building a UI design system.</p>
                                </a>
                            </div>
                            <div class="grid-3">
                                <a href="https://redux.js.org/introduction/getting-started" target="_blank">
                                    <h3>Redux</h3>
                                    <p>Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.</p>
                                </a>
                            </div>
                            <div class="grid-4">
                                <a href="https://webpack.js.org/concepts/" target="_blank">
                                    <h3>Webpack</h3>
                                    <p>Webpack is used to compile JavaScript modules. Once installed, you can interface with webpack either from its CLI or API.</p>
                                </a>
                            </div>
                            <div class="grid-5">
                                <a href="https://lodash.com/docs/4.17.15" target="_blank">
                                    <h3>Lodash</h3>
                                    <p>Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.</p>
                                </a>
                            </div>
                            <div class="grid-6">
                                <a href="https://getbootstrap.com/docs/4.5/getting-started/introduction/" target="_blank">
                                    <h3>Bootstrap</h3>
                                    <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        `;
    }

}

window.customElements.define('app-data', AppData);