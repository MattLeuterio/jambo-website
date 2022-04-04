export const remapContent = (type, obj) => {
  let res;
  switch (type) {
    case 'vocabulary':
      res = {
        labels: obj.fields.label
      };
      break;
    // eslint-disable-next-line no-empty
    default: {}
  }
  return res;
};