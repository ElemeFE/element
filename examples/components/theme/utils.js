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
