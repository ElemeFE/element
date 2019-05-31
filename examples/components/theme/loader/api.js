import Element from 'main/index.js';
import { post, get } from './ajax';

const { version } = Element;

const hostList = {
  local: 'http://localhost:3008/',
  alpha: 'https://ssr.alpha.elenet.me/element-theme-server/',
  production: 'https://ssr.ele.me/element-theme-server/',
  productionEle: 'https://ssr.elenet.me/element-theme-server/'
};

const host = hostList[process.env.FAAS_ENV] || hostList.production;

export const getVars = () => {
  return get(`${host}getVariable?version=${version}`);
};

export const getTestEle = () => {
  return get(`${hostList.productionEle}getVariable?version=${version}`);
};

export const updateVars = (data, cb) => {
  return post(`${host}updateVariable?version=${version}`, data, cb);
};
