$(document).ready(function () {


    $("#slider").slider({
        value: 4,
        min: 1,
        max: 7,
        step: 1
    }).each(function() {

            // Add labels to slider whose values
            // are specified by min, max

            // Get the options for this slider (specified above)
            var opt = $(this).data().uiSlider.options;

            // Get the number of possible values
            var vals = opt.max - opt.min;

            // Position the labels
            for (var i = 0; i <= vals; i++) {

                // Create a new element and position it with percentages
                var el = $('<label>' + (i + opt.min) + '</label>').css('left', (i/vals*100) + '%');

                // Add the element inside #slider
                $("#slider").append(el);

            }

        });

    w = $(".sidepanel-box").width();
    if (w<300) {
        $(".flexpanel").each(function () {
            $(this).removeClass("col-3");
            $(this).addClass("col-6");
        });
    }



    $(window).resize(function () {
        w = $(".sidepanel-box").width();
        if (w<300) {
            $(".flexpanel").each(function () {
                $(this).removeClass("col-3");
                $(this).addClass("col-6");
            });
        } else {
            $(".flexpanel").each(function () {
                $(this).removeClass("col-6");
                $(this).addClass("col-3");
            });
        }
    }).resize();

});
