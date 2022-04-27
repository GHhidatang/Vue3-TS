import "../css/image.css";
import "../font/iconfont.css"

import zzhuImage from '../img/e50b2fd4bb928a2.jpg';

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好,大唐";

const imgEl = document.createElement("img");
imgEl.className = "img-el"
imgEl.src = zzhuImage;

const iEl = document.createElement("i");
iEl.className = "iconfont icon-ashbin";

document.body.appendChild(divEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);