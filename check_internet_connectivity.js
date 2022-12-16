// CHECK INTERNET CONNECTION ONLINE/OFFLINE
$(document).ready(function () {
    var i = 1;
    var j = 0;

    showInternetStatus();

    function showInternetStatus() {
        if (navigator.onLine) {
            if (i == 0) {
                $('#_giftPoke_net_connectivity').remove();
                $("body").append('<div class="d-flex justify-content-start align-items-center ml-3" id="_giftPoke_net_connectivity"> <i class="fa fa-wifi" style="font-size:20px;color:#ffff"></i><h6 class="p-0 m-0 ml-2" style="color:#ffff">You are connected </h6></div>');
                i = 1;
                j = 0;
            }
            setTimeout(function () {
                $('#_giftPoke_net_connectivity').remove();
            }, 2000);
        }

        else {
            if (j == 0) {
                $('#_giftPoke_net_connectivity').remove();
                $("body").append('<div class="d-flex justify-content-start align-items-center ml-3" id="_giftPoke_net_connectivity"><i class="fa fa-wifi" style="font-size:20px; color:#ffff"></i><h6 class="m-0 p-0 ml-2" style="color:#ffff">You are currently offline </h6></div>');
                j = 1;
                i = 0;
            }
        }
    }

    setInterval(function () {
        showInternetStatus();
    }, 3000);
});
function status_show() {
    window.location.reload();
}