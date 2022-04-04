import { remapContent } from './utils/remapContent';

const contentful = require('contentful');

const client = contentful.createClient({
  space: '1bbb5tj49ydt',
  accessToken: 'ezHeBXNMKlGKt3KlRUO11JKxyi-_L-id09w9h203Q-8'
});

const getContent = (contentType, set) => {
  const data = client.getEntries({ content_type: `${contentType}` })
    .then((response) => {
      const res = response.items;
      const resData = res.map(obj => remapContent(contentType, obj));
      set(resData);
      return res;
    }, []);
  set(data);
  return data;
};

export { getContent };
