var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function deviceAdjustment() {
  if( isMobile.any() ) {
    $('button').addClass('button-mobile');
    $('input').addClass('field-mobile');
    $('menu').addClass('menu-mobile');
    $('section').addClass('section-mobile');
    $('table').addClass('table-mobile');
    $('.container').addClass('container-mobile');
    $('.field-result').addClass('field-mobile');
    $('.headline-box').addClass('headline-box-mobile');
    $('.tr-label-basic').addClass('tr-label-mobile');
    $('.tr-textbox-basic').addClass('tr-textbox-mobile');
  } else {
    $('button').addClass('button-desktop');
    $('input').addClass('field-desktop');
    $('menu').addClass('menu-desktop');
    $('section').addClass('section-desktop');
    $('table').addClass('table-desktop');
    $('.container').addClass('container-desktop');
    $('.field-result').addClass('field-desktop');
    $('.headline-box').addClass('headline-box-desktop');
    $('.tr-label-basic').addClass('tr-label-desktop');
    $('.tr-textbox-basic').addClass('tr-textbox-desktop');
  }
}
