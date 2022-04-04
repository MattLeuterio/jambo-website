import moment from 'moment';

const EncodingSupported = !!window.btoa('test') && !!window.atob('test');

const encode = (v = '') => {
  const value = encodeURIComponent(JSON.stringify(v));
  return EncodingSupported ? window.btoa(value) : value;
};

const decode = (v = '') => (decodeURIComponent(EncodingSupported ? window.atob(v) : v));

export default {
  write: (storageName = '', storageValue = '', sessionStorageType = 'localStorage') => {
    const save = encode({
      value: storageValue,
      storage_timestamp: moment().valueOf()
    });
    sessionStorageType === 'localStorage' ? localStorage.setItem(storageName, save) : sessionStorage.setItem(storageName, save);
  },
  read: (storageName = '') => {
    const localStorageValue = localStorage.getItem(storageName);
    const sessionStorageStorageValue = sessionStorage.getItem(storageName);
    const storageValue = localStorageValue || sessionStorageStorageValue;
    if (!storageValue) return storageValue;
    return JSON.parse(decode(storageValue));
  },
  clearKey: (storageName = '') => {
    localStorage.removeItem(storageName);
    sessionStorage.removeItem(storageName);
  },
  clearAll: () => {
    sessionStorage.clear();
    localStorage.clear();
  }
};
