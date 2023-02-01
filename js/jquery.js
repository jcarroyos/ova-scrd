$('.owl-carousel').owlCarousel({
    loop:true,
    margin:1,
    nav:true,

    navText:['<i class="fa fa-arrow-circle-o-left" aria-hidden="true" ></i>','<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'] , 
    /*items: Default,  
    responsiveBaseElement:Default,
    responsiveRefreshRate:Default,*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


