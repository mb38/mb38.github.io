var $win = $(window),
	$fixed = $(".header_fixed"),
	limit = 1080;

function tgl (state) {
    $fixed.toggleClass("header_hidden", state);
}

$win.on("scroll", function() {
	var top = $win.scrollTop();
    
    if (top < limit) {
        tgl(true);
    } else {
        tgl(false);
    }
});