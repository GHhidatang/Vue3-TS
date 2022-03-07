import "../css/image.css";

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好,大唐";

const bgDivEl = document.createElement('div');
bgDivEl.className = "image-bg";

document.body.appendChild(bgDivEl);
document.body.appendChild(divEl);
