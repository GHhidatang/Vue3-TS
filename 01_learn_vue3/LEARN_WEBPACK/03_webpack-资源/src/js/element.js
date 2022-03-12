import "../css/image.css";

import zzhuImage from '../img/e50b2fd4bb928a2.jpg';

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好,大唐";

const imgEl = document.createElement("img");
imgEl.className = "img-el"
imgEl.src = zzhuImage;

document.body.appendChild(divEl);
document.body.appendChild(imgEl);