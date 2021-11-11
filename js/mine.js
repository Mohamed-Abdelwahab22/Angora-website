


$(document).ready(function(){

    $("#loading , .spinner" ).fadeOut(2500 , function(){
        $("#loading").addClass("d-none")
    })

})

$(window).scroll(function(){
    


    let scrollVal = $(window).scrollTop()


    if( scrollVal > 40){

    $(".navbar").removeClass("bg-transparent , py-3")

    $(".navbar").addClass("bg-white , shadow-sm , p-0 , m-0")

    $(".nav-link").removeClass("text-white")

    $(".nav-link").addClass("text-dark")

    $(".whiteLogo").addClass("d-none")

    $(".coleredLogo").removeClass("d-none")

    

    }
    else{

        $(".navbar").removeClass("bg-white , shadow-sm")

        $(".navbar").addClass("bg-transparent ")

        $(".nav-link").removeClass("text-dark")

        $(".nav-link").addClass("text-white")

        $(".coleredLogo").addClass("d-none")

        $(".whiteLogo").removeClass("d-none")


    }

    

})


$(".nav-link").click(function(){
    $(this).addClass("mainColor")
    $(".nav-link").not($(this)).removeClass("mainColor")
})