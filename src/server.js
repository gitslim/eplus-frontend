import sirv from 'sirv';
import app from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import proxy from 'express-http-proxy';

const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

const proxyHost = dev ? 'http://localhost:1337' : 'https://api.xn--c1adkmgpem4hrai.xn--p1ai';

const server = app();

server
  .use("/uploads", proxy(
    proxyHost,
    {
      proxyReqPathResolver: function (req) {
        return '/uploads' + req.url
      }
    }))
  .use("/sitemap.xml", proxy(
    proxyHost,
    {
      proxyReqPathResolver: function (req) {
        return '/sitemap.xml'
      }
    }))
  .use(
    compression({threshold: 0}),
    sirv('static', {dev}),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.error('error', err);
  });
