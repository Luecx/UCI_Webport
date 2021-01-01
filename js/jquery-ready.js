
$(document).ready(function () {

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
