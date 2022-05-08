import HomeScreen from "./screens/HomeScreen.js";
import courseScreen from "./screens/coursesScreen.js";
import { parseRequestUrl } from "./utils..js";
import sign_inScreen from "./screens/sign_inScreen.js";
import sign_upScreen from "./screens/sign_upScreen.js";
import profileScreen from "./screens/profileScreen.js";
// import { hideLoading, parseRequestUrl, showLoading  } from "./utils.js";

const routes = {
    '/' : HomeScreen,
    '/course' : courseScreen,
    '/signin' : sign_inScreen,
    '/signup' : sign_upScreen,
    '/profile' : profileScreen,
};

const router =  () =>{
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

    const main = document.getElementById("main-container");
    main.innerHTML =  screen.render();
}; 

window.addEventListener('load' , router);
window.addEventListener('hashchange' , router);