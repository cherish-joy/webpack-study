import { sum, format } from '@/utils/sum';
import { createApp } from 'vue';
import Home from 'pages/home';
import './pages/index';

console.log(sum(10, 20));
format();
new Promise((reslove) => {
  reslove(111);
});

const message = 'message111';

const arr = [1, 2, 3, 4];
arr.includes(message);

console.log(message);
//vue文件
createApp(Home).mount('#app');
// 热模块更新
if (module.hot) {
  module.hot.accept('./pages/index', function () {
    console.log('index模块热更新');
  });
  module.hot.accept('@/utils/sum', function () {
    console.log('sum模块热更新');
  });
}
