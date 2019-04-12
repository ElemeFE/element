import {
  ELEMENT_THEME_PREVIEW_CONFIG,
  ELEMENT_THEME_USER_CONFIG
} from './constant';

export const saveToLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocal = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const savePreviewToLocal = (value) => {
  saveToLocal(ELEMENT_THEME_PREVIEW_CONFIG, value);
};

export const loadPreviewToLocal = () => {
  return loadFromLocal(ELEMENT_THEME_PREVIEW_CONFIG);
};

export const saveUserThemeToLocal = (value) => {
  saveToLocal(ELEMENT_THEME_USER_CONFIG, value);
};

export const loadUserThemeToLocal = () => {
  return loadFromLocal(ELEMENT_THEME_USER_CONFIG);
};

