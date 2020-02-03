$.ajax({
    url: "json/blog.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        data.blogObj.forEach((i, a) => {
            if (a >= 2) {
                $('#blog-toggle-div').append(`
                    
                    <div class="row our-padd">
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5">
                    <img src="${i.img}" class="our-blog-img-one" alt="logo">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-7">
                    <h4>${i.title}</h4>
                    <div class="d-flex our-blog-big-div">
                        <div class="d-flex">
                            <i class="fa fa-user our-blog-user-icon-user fa-lg" aria-hidden="true"></i>
                            <p class="our-blog-icon-p">${i.user}</p>
                        </div>
                        <div class="d-flex">
                            <i class="fa fa-comment our-blog-user-icon-user fa-lg" aria-hidden="true"></i>
                            <p class="our-blog-icon-p">${i.comment}</p>
                        </div>
                        <div class="d-flex">
                            <i class="fa fa-eye our-blog-user-icon-user fa-lg" aria-hidden="true"></i>
                            <p class="our-blog-icon-p">${i.views}</p>
                        </div>
                    </div>
                    <div class="our-blog-p">
                    ${i.text}
                    </div>
                    <div class="our-blog-button-div">
                        <button class="our-blog-button">VIEW MORE</button>
                    </div>
                  </div>
              </div>
            
            `);
            }
        })
    }
});