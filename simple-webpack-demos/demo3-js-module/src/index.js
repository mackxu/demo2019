import es6Hello from './lib/hello-es6'

es6Hello();

const commonHello = require('./lib/hello-common');
commonHello()

require(['./lib/hello-amd'], function(helloAmd) {
  helloAmd()
})