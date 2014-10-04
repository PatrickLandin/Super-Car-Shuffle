$(document).ready(function() {
  function randomize(m) {
    var $m,
      rand = Math.floor(Math.random() * m),
      $rand;

    $('td').removeClass('sorting');

    $mth = $('.car:eq(' + m + ')')
      .addClass('sorting')
      .fadeIn();
    $rand = $('.car:eq(' + rand + ')')
      .addClass('sorting')
      .fadeIn();

    $mth.before($rand);
    $('.car:eq(' + rand + ')').before($mth);

    if (m > 0) {
      setTimeout(randomize, 200, m - 1);
    } else {
      $('td').removeClass('sorting');
    };
  }

  $('button').on('click', function() {
    randomize($(".car").length - 1);
  });

  function superCars() {
    this.ans = ['an'];
    this.carNames = ['Lamborghini Aventador', 'Ferrari 458', 'Porsche 911 GT3', 'Mclaren MP4-12C', 'Mercedes SLS Black'];
    var Shuffle = this;

    $.each(this.ans, function(index, an) {
      $.each(Shuffle.carNames, function(index, car) {
        var car = new Auto(an, car);
        $('#carListings').append(car.toHTML());
      });
    });
  }

  function Auto(an, car) {
    this.an = an;
    this.car = car;
    this.toHTML = function() {
      return '<td class="car">' + this.an + ' ' + this.car + '</td>';
    }
  }

  var supercars = new superCars();
});