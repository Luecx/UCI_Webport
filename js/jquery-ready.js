
$(document).ready(function () {


    $("#ex13").slider({
        ticks: [0, 10, 20, 30, 40],
        ticks_labels: ['0', '|', '20', '|', '40'],
        value: 2,
        ticks_snap_bounds: 0
    });
    $("#ex13").on("slide", function(slideEvt) {
        $("#ex13Val").text(slideEvt.value);
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
