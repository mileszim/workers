export default eventHandler(async event => {
  let { ip } = event.context.params;
  if (!ip) {
    ip = getRequestHeader(event, 'cf-connecting-ip');
  }
  const ipinfo = await fetch(`https://ipinfo.io/${ip}/json?token=${IPINFO_TOKEN}`);
  const data = await ipinfo.json();
  return data;
});
