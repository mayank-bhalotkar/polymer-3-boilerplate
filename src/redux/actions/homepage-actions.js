import { homePage } from "./index";

export const homepageContent = (payload) => {
    return {
        type: homePage.GET_HOME_PAGE,
        payload
    }
}

export const homePageData = () => {
    return function(dispatch) {
        const content = [{
                name: "Polymer 3",
                description: "The Polymer library provides a set of features for creating custom elements. These features are designed to make it easier and faster to make custom elements that work like standard DOM elements.",
                link: "https://polymer-library.polymer-project.org/3.0/docs/about_30"
            }, {
                name: "Lit Elements",
                description: "LitElement makes it easy to define Web Components – ideal for sharing elements across your organization or building a UI design system.",
                link: "https://lit-element.polymer-project.org/"
            }, {
                name: "Redux",
                description: "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
                link: "https://redux.js.org/introduction/getting-started"
            }, {
                name: "Webpack",
                description: "Webpack is used to compile JavaScript modules. Once installed, you can interface with webpack either from its CLI or API.",
                link: "https://webpack.js.org/concepts/"
            }, {
                name: "Lodash",
                description: "Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.",
                link: "https://lodash.com/docs/4.17.15"
            }, {
                name: "Responsive Design",
                description: "This template is completely responsive.",
                link: "https://getbootstrap.com/docs/4.5/getting-started/introduction/"
            }];
        dispatch(homepageContent(content));
    }
}