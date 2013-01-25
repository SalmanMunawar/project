/**
 * User: Salman Munawar
 * Date: 12/18/12
 * Time: 11:54 AM
 */
(function ($) {

    //My accordion plug-in
    $.fn.accordion =  function (  options  ) {

        var accordions = this.children('div'),
              opt = $.extend({
                  speed : 300,
                  show : 'none'
              }, options);

        accordions.children('div').hide();

        //Accordion function
        this.on('click', 'h1', function () {
            var heading = $(this).addClass('active');

            //heading panel
            heading
                  .parent()
                  .siblings()
                  .children('div')
                  .slideUp(opt.speed)
                  .end()
                  .children('h1')
                  .removeClass('active');

           //Content panel
            heading .next('div').toggle(opt.speed, function () { $(this).next('div').slideToggle(opt.speed * 3); });

        });

        //Display options
        if ((opt.show !== 'none') && (parseInt(opt.show) !== 'NaN') &&  (parseInt(opt.show) <= accordions.length)) {
            accordions
                  .children('h1')
                  .eq(opt.show-1)
                  .trigger('click');
        } else if (opt.show === 'all' ) {
            accordions
                  .children('div')
                  .show(opt.speed);
        }

        //return jquery object to continue chaining
        return this;
    };

    //Using accordion plugin - Option parameters = object { speed : # }
    $('#accordion').accordion({ show : 1 });

}(jQuery));