import '../css/index.css';
import '../css/content.less';
import '../css/list.scss';
//图片资源
import ZJU from '../assets/imgs/zju.jpg';

//普通的h2元素
const h2El = document.createElement('h2');
h2El.textContent = '首页';
//普通的p元素
const pEl = document.createElement('p');
pEl.textContent = '我是首页里的内容';
pEl.classList.add('content');
//ul元素
const ulEl = document.createElement('ul');
for (let i = 0; i < 10; i++) {
  const liEl = document.createElement('li');
  liEl.textContent = i + 1;
  ulEl.appendChild(liEl);
}
//img元素
const imgEl = document.createElement('img');
//设置图片的url
imgEl.src = ZJU;
imgEl.width = 200;
imgEl.height = 100;
//字体
const iEl = document.createElement('span');
//这里要用innerHTML!!
iEl.innerHTML = '&#xe885;';
iEl.classList.add('iconfont');

document.body.appendChild(h2El);
document.body.appendChild(pEl);
document.body.appendChild(ulEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);
