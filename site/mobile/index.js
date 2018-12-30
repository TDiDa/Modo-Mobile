/* eslint-disable no-underscore-dangle */
require('core-js/es6/string');
const path = require('path');

const _indexDemos = ['drawer'];
const _subListDemos = ['list-view'];

module.exports = {
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    components(markdownData) {
      const { filename } = markdownData.meta;
      if (!/^components/.test(filename) || /\/demo$/.test(path.dirname(filename))) return;
      /* eslint-disable consistent-return */
      return {
        meta: markdownData.meta,
      };
      /* eslint-enable consistent-return */
    },
    /* eslint-disable consistent-return */
    indexDemos(markdownData) {
      const paths = markdownData.meta.filename.split('/');
      // add demos to index page, e.g. "components/drawer/demo/basic.md"
      if (paths[1] && _indexDemos.indexOf(paths[1]) > -1 && paths[2] && paths[2] === 'demo') {
        return {
          component: paths[1],
          meta: markdownData.meta,
        };
      }
    },
    subListDemos(markdownData) {
      const paths = markdownData.meta.filename.split('/');
      console.log('subListDemos', paths);
      // add demos to index page, e.g. "components/drawer/demo/basic.md"
      if (paths[1] && _subListDemos.indexOf(paths[1]) > -1 && paths[2] && paths[2] === 'demo') {
        return {
          component: paths[1],
          meta: markdownData.meta,
        };
      }
    },
  },
  plugins: [
    'bisheng-plugin-description',
    `bisheng-plugin-antd`,
    'bisheng-plugin-react?lang=__react',
  ],
  routes: [
    {
      path: '/',
      component: './template/Mobile/index',
    },
    {
      path: '/components/:component',
      component: './template/Mobile/Demo',
    },
  ],
};
