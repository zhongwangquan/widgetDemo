import Page from './components/page';
import Tree from './components/tree'

const mvue = {
  Page,
  Tree
};

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
  mvue.map(component => {
    Vue.component(component.name, component);
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.0.1',
  install,
  Page,
  Tree
}