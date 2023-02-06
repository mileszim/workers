# ip

Worker for simple IP info API requests.

## Usage

Get your current IP:

```sh
$ curl https://ip.zim.dev
12.34.56.78
```

Get geo info for your current IP:

```sh
$ curl https://ip.zim.dev/geo
{
  "continent":"NA",
  "country":"US",
  "city":"San Francisco",
  "latitude":"37.832639",
  "longitude":"-122.283789",
  "ip":"1.2.3.4"
}
```

Get info for a specific IP (ipinfo.io proxy):

```sh
$ curl https://ip.zim.dev/1.1.1.1
{
  "ip":"1.1.1.1",
  "hostname":"one.one.one.one",
  "anycast":true,
  "city":"Los Angeles",
  "region":"California",
  "country":"US",
  "loc":"34.0522,-118.2437",
  "org":"AS13335 Cloudflare, Inc.",
  "postal":"90076",
  "timezone":"America/Los_Angeles"
}
```
