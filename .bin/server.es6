#!/usr/bin/env babel-node

import koa from 'koa';
import sendfile from 'koa-sendfile';
import serve from 'koa-static';

let app = koa();
app.use(serve('./playground'));
app.use(catchAll);
app.listen(3000);

function *catchAll(next) {
  yield* sendfile.call(this, './playground/index.html');

  if (!this.status) {
    this.throw(404);
  }
}

console.log('koa-catch-all is ready on http://localhost:3000');
