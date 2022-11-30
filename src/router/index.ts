import { createRouter, createWebHashHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

routes.push({
  path: '/',
  redirect: '/login',
});
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

export default router;
