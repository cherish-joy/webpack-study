import { sum } from '@/utils/sum';
import { createApp } from 'vue';
import Home from 'pages/home';
// import './pages/index';

console.log(sum(10, 20));
new Promise((reslove, reject) => {
  reslove(111);
});
const message = 'message';

const arr = [1, 2, 3];
arr.includes(message);

console.log(message);
//vue文件
createApp(Home).mount('#app');
