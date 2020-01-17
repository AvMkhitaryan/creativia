// alert("dfgdfg");
$(document).ready(function(){
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });

    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });


});

// $('.nav-link-a').on('click', function(){
//     $('.nav-link-a').removeClass('active-1');
//     $(this).addClass('active-1');
// });
//
//
// console.log(111);