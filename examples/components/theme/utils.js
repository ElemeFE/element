export const isEmptyObject = (obj) => (JSON.stringify(obj) === '{}');

export const getThemeConfigObject = (config) => {
  try {
    const conf = JSON.parse(config);
    const { global, local } = conf;
    if (!isEmptyObject(global) || !isEmptyObject(local)) {
      return conf;
    }
    return false;
  } catch (e) {
    return false;
  }
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
