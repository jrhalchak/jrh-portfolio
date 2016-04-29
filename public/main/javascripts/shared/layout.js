$(()=>{
  const $body = $('body'),
    $homeBg = $('.js-homeBG'),
    $3d = $('.js-logo3dEffect');

  $body.on('mousemove', (e)=>{
    if($(window).width() <= 768) return;

    var cx = Math.ceil($body.width() / 2.0),
      cy = Math.ceil($body.height() / 2.0),
      dx = event.pageX - cx,
      dy = event.pageY - cy,

      tiltx = dy / cy,
      tilty = dx / cx,
      radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2)),
      degree = radius * 20,

      bgHeight = 25/$body.height(),
      bgWidth = 25/$body.width(),
      bgY = bgHeight * dy * -1 - 25,
      bgX = bgWidth * dx * -1 - 25;

      $3d.css({
        'transform': `rotate3d(${tiltx}, ${tilty}, 0, ${degree}deg)`
      });

      $homeBg.css({
        'background-position': `${bgX}px ${bgY}px`
      });
  });
});
