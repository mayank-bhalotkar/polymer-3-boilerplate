import { LitElement, html, css } from 'lit-element';
import { globalCSS } from "./src/global";
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from "./src/store"
import { homePageData } from './src/redux/actions/homepage-actions';
import _ from 'lodash';


class AppData extends connect(store)(LitElement) {
    static get properties() {
        return {
            homepageContent: { type: Array }
        }
    }

    firstUpdated() {
        store.dispatch(homePageData());
    }

    constructor() {
        super();
        this.homepageContent = [];
    }

    stateChanged(state) {
        this.homepageContent = state.homepageReducer.data;
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
                    background: rgb(89, 153, 25);
                    color: rgba(0,0,0,.87);
                    transition: 0.4s transform;
                    will-change: transform;
                    transform: scale(1);
                    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
                    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
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
                    color: #000;
                }

                .desc p {
                    display: inline-block;
                    text-align: center;
                    width: 100%;
                    font-size: 25px;
                }

                @media(max-width: 786px) {
                    .grid-system {
                        display: block;
                    }
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
                            ${
                                !_.isEmpty(this.homepageContent) 
                                ? html `${this.homepageContent.map(item => {
                                    return html `<div class="grid-1">
                                    <a href="${item.link}" target="_blank">
                                        <h3>${item.name}</h3>
                                        <p>${item.description}</p>
                                    </a>
                                </div>`
                                })} ` 
                                : html `<p>Loading...</p>` 
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        `;
    }

}

window.customElements.define('app-data', AppData);