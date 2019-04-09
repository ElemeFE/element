import deepmerge from 'deepmerge';
import constant from '../../../i18n/theme-editor.json';

export const filterConfigType = (name) => {
  switch (name) {
    case 'color':
    case 'typography':
    case 'border':
      return 'global';
    default:
      return 'local';
  }
};

export const filterGlobalValue = (defaultConfig, userConfig) => {
  const valueObject = {};
  const globalArr = ['color', 'typography', 'border'];
  globalArr.forEach((global) => {
    const configObj = {};
    defaultConfig
      .find(config => (config.name === global))
      .config.forEach(c => (configObj[c.key] = deepmerge({}, c)));
    valueObject[global] = configObj;
    Object.keys(configObj).forEach((c) => {
      if (userConfig.global[c]) {
        configObj[c].value = userConfig.global[c];
      }
    });
  });
  return valueObject;
};

export const getStyleDisplayValue = (displayValue, global) => {
  if (displayValue.startsWith('$')) {
    return global[displayValue].value;
  }
  return displayValue;
};

const getLang = () => {
  return location.hash.replace('#', '').split('/')[1] || 'zh-CN';
};

const getNameFromI18N = (name) => {
  const lang = getLang();
  return constant.filter(config => config.lang === lang)[0][name];
};

export const getVariableDisplayName = (key) => {
  return getNameFromI18N('variable-name')[key] || key;
};

export const getStyleDisplayName = (config, componentName) => {
  const displayNameMap = getNameFromI18N('display-name');
  if (config.name) {
    return getVariableDisplayName(config.key.replace('$--', ''));
  }
  let displayName = config.key.replace(`$--${componentName}-`, '').replace();
  Object.keys(displayNameMap).forEach((name) => {
    displayName = displayName.replace(name, displayNameMap[name]);
  });
  displayName = displayName.replace(/-/g, ' ');
  return displayName.trim();
};

export const getActionDisplayName = (key) => {
  return getNameFromI18N('action')[key] || key;
};

export const getCategoryDisplayName = (key) => {
  return getNameFromI18N('category')[key] || key;
};

export const updateDomHeadStyle = (id, styleContent) => {
  let styleTag = document.getElementById(id);
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.setAttribute('id', id);
    document.head.appendChild(styleTag);
  }
  styleTag.innerText = styleContent.replace(/@font-face{[^}]+}/, '');
};
