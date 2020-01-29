//$(document).ready(function () {
$.ajax({
    url: "json/index.json",
    type: "GET",
    dataType: "json",
    success: function (data) {

        data.ourNteamworkObject.forEach((i) => {
            $('#our-teamwork-container').append(`<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                                <div class="teamwork-old d-flex justify-content-center">
                                                              <div class="our-teamwork-old-info">
                                <div class="container-our-teamwork">
                                    <img src="${i.image}" alt="Avatar" class="image-our-teamwork">
                                    <div class="overlay-our-teamwork">
                                        <div class="text-our-teamwork">
                                            <div class="our-teamwork-hex d-flex justify-content-center">
                                                <div class="our-teamwork-hex-one">
                                                    <i class="fa fa-facebook our-teamwork-icon-color"
                                                       aria-hidden="true"></i>
                                                </div>
                                                <div class="our-teamwork-hex-one">
                                                    <i class="fa fa-twitter our-teamwork-icon-color"
                                                       aria-hidden="true"></i>
                                                </div>
                                                <div class="our-teamwork-hex-one">
                                                    <i class="fa fa-google-plus our-teamwork-icon-color"
                                                       aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="our-teamwork-info">
                                    <h3 class="our-teamwork-name">${i.name}</h3>
                                    <h6 class="our-teamwork-prafesion">${i.profession}</h6>
                                </div>
                            </div>
                            </div> 
                           </div>`);
        });
    }
});
// });

