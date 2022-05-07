import HomeScreen from "./screens/HomeScreen.js";
import courseScreen from "./screens/courseScreen.js";
// import { hideLoading, parseRequestUrl, showLoading  } from "./utils.js";
import { parseRequestUrl } from "./utils..js";

const routes = {
    '/' : HomeScreen,
    '/course/mongo1' : courseScreen,
};

const router = async () =>{
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

    const main = document.getElementById("main-container");
    main.innerHTML = await screen.render();

    const header = document.getElementById("main-header");
    header.innerHTML = await screen.Header();
    if (screen.after_render) await screen.after_render();
}; 

window.addEventListener('load' , router);
window.addEventListener('hashchange' , router);