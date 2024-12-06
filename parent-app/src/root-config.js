import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'child-app-home',
  app: () => System.import('http://localhost:5174/src/main.js'),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: 'child-app-contact',
  app: () => System.import('http://localhost:5175/src/main.js'),
  activeWhen: (location) => location.pathname === '/contact',
});

registerApplication({
  name: 'child-app-about',
  app: () => System.import('http://localhost:5176/src/main.js'),
  activeWhen: (location) => location.pathname === '/about',
});

start();
