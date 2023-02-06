export default eventHandler(async event => {
  const conectingIp: string = getRequestHeader(event, 'cf-connecting-ip');
  const realIp: string = getRequestHeader(event, 'x-real-ip');
  const ips = new Set([conectingIp, realIp]);
  return conectingIp;
});
