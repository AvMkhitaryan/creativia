$.ajax({
    url:"json/aboutcreativia.json",
    type:"GET",
    dataType:"json",
    success:function (data) {
        data.creativiaObject.forEach((i)=>{
            $("#creativ-div").append(`
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div class="poligon-hexis-big-div d-flex justify-content-center">
                        <div class="poligon-hexis">
                            <i class="fa ${i.icon} poligon-hexis-icon fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center poligon-hexis-p-div">
                        <p class="poligon-hexis-p-one">${i.title}</p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <p class="poligon-hexis-big-div-p">${i.text}</p>
                    </div>
                </div>
            `);
        });
    }
});