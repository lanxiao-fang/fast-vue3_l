/**
 * @name ConfigPagesPlugin
 * @description 动态生成路由
 */
import Pages from 'vite-plugin-pages';
export const ConfigPagesPlugin = () => {
  return Pages({
    pagesDir: [{ dir: 'src/views', baseRoute: '' }], // 根据这个路径生成路由文件
    extensions: ['vue', 'md'],
    exclude: ['**/components/*.vue'],
    nuxtStyle: true,
  });
};
