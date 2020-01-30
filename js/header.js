$.ajax({
    url:"json/header.json",
    type:"GET",
    dataType:"json",
    success:function (data) {
        data.headerObject.forEach((i)=>{
            $('#header-contact').append(`
                           <li class="nav-item nav-item-hover">
                              <div class="nav-item-hover-before"></div>
                                  <a class="nav-link nav-link-a " href="#">${i.title}</a>
                              <div class="nav-item-hover-after"></div>
                           </li> 
            `);
        })
    }
});