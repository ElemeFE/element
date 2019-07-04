const ELEMENT_THEME_USER_CONFIG = 'ELEMENT_THEME_USER_CONFIG';
export const loadFromLocal = (key) => {
  return new window.Promise((resolve) => {
    chrome.storage.local.get([key], (result) => {
      console.log('get', result[key]);
      resolve(result[key]);
    });
  });
};
export const saveToLocal = (key, value) => {
  console.log('set', value);
  chrome.storage.local.set({[key]: value});
};

export const loadUserThemeFromLocal = () => {
  return loadFromLocal(ELEMENT_THEME_USER_CONFIG);
};
export const saveUserThemeToLocal = (value) => {
  saveToLocal(ELEMENT_THEME_USER_CONFIG, value);
};
