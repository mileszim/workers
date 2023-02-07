export default eventHandler(async event => {
  return getRequestHeaders(event);
});
