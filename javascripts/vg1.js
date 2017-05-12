(function ($) {
  $(document).ready(function() {
      // ytbg('rp8CDftiIgs');
      setTimeout(animateRaido, 1597);
  });
}(jQuery));


function animateRaido() {
    // const outerR = $('.r-replace');
    // const innerR = $('.r-replace span');
    const callToAction = $('.call-to-action a');
    // innerR.fadeOut(987, function () {
    //   const newHTML = '<span class="junicode raido" style="display: none;">&#5809;</span>';
    //   outerR.html(newHTML);
    const raido = $('.raido');
    raido.addClass('runic-red')
    // setTimeout(function() {
      // raido.fadeIn(987, setTimeout.bind(this, function () {
        // raido.addClass('runic-red')
        // setTimeout(callToAction.addClass.bind(callToAction, 'blink'), 4181)
      // }, 1597));
    // }, 987);
    // });
}
