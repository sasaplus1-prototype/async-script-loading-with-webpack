'use strict';

// NOTE: dynamic import convert to require.ensure
import(/* webpackChunkName: 'library' */ './library.js')
  .then(function(library) {
    library('async loading');
  })
  .catch(function(err) {
    console.error(err);
  });
