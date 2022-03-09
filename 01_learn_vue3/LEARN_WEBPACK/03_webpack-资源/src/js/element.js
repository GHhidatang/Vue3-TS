import "../css/image.css";

import zzhuImage from '../img/1111.jpg';

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好,大唐";

const bgDivEl = document.createElement('div');
bgDivEl.className = "image-bg";

const imgEl = document.createElement("img");
imgEl.src = zzhuImage;

document.body.appendChild(bgDivEl);
document.body.appendChild(divEl);
document.body.appendChild(imgEl);