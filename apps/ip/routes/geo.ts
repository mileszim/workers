export default eventHandler(async event => {
  return {
    continent: getRequestHeader(event, 'cf-ipcontinent'),
    country: getRequestHeader(event, 'cf-ipcountry'),
    city: getRequestHeader(event, 'cf-ipcity'),
    latitude: getRequestHeader(event, 'cf-iplatitude'),
    longitude: getRequestHeader(event, 'cf-iplongitude'),
    ip: getRequestHeader(event, 'cf-connecting-ip'),
  }
});
