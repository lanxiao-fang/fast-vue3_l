import { createRouter, createWebHashHistory } from 'vue-router';
// 根据目录自动生成路由，隐藏太深了，不可控，还是改为文件指定路由
// import routes from 'virtual:generated-pages';
import routes from './root';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// routes.push({
//   path: '/',
//   redirect: '/login',
// });
//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory(), // hash路由，路径上没有#的，但是需要后端搭配nginx，否则刷新后匹配不上资源，页面404
  routes,
});

// 路由钩子
router.beforeEach(async (_to, _from, next) => {
  // 页面加载进度条
  NProgress.start();
  next();
});

router.afterEach((_to) => {
  NProgress.done();
});
console.log(router.getRoutes(), routes);
export default router;
