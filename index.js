(function(){

  'use strict';

  var status = document.getElementById('js-status');

  page('/:num', function(context, next) {
    console.log(context);

    status.innerHTML = 'current page is ' + context.params.num;
  });

  page.exit('/:num', function(context, next) {
    console.log('exit');
    console.log(context);

    next();
  });

  page.start({
    dispatch: false,
    hashbang: true,
  });

  page.base(location.pathname.replace(/\/$/, ''));

}());
