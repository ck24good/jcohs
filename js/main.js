$(document).ready(function(){

    $(window).scroll(function(){
		if($(window).scrollTop()>50){
			$(".jHeader").addClass("scrolledHeader");
			$(".jHeaderDiv nav.jMenu").addClass("scrolledjMenu");
			$(".mobileToggleMenu").css("color","#0182c9");
			$(".jHeaderDiv .logo img").attr("src",$(".jHeaderDiv .logo img").attr("src").replace("-wh",""));
		}else{
			$(".jHeader").removeClass("scrolledHeader");
			$(".jHeaderDiv nav.jMenu").removeClass("scrolledjMenu");
			$(".mobileToggleMenu").css("color","#fff");
//			$(".jHeaderDiv .logo img").attr("src",$(".jHeaderDiv .logo img").attr("src").replace("neovlogo.png","neovlogo-wh.png"));
		}
	});

    $(".mobileToggleMenu").bind("click",function(){
        $(".jMenu").toggle(500);
    });

    var toaboutJtoggle = true;
    $(".toaboutJ").bind("click",function(){
        $(".toaboutJ .sub_menu").toggle(500);
        if ( toaboutJtoggle ) {
            $(".toaboutJ span i").removeClass("fa-angle-right");
            $(".toaboutJ span i").addClass("fa fa-angle-down");
            toaboutJtoggle = false;
        } else {
            $(".toaboutJ span i").removeClass("fa-angle-down");
            $(".toaboutJ span i").addClass("fa fa-angle-right");
            toaboutJtoggle = true;
        }
        if (tobrandstoggle == false)   { $(".tobrands .sub_menu").toggle(500); $(".tobrands span i").removeClass("fa-angle-down"); $(".tobrands span i").addClass("fa fa-angle-right"); tobrandstoggle = true;}
        if (togbrandstoggle == false)   { $(".togbrands .sub_menu").toggle(500); $(".togbrands span i").removeClass("fa-angle-down"); $(".togbrands span i").addClass("fa fa-angle-right"); togbrandstoggle = true;}
    });
    var tobrandstoggle = true;
    $(".tobrands").bind("click",function(){
        $(".tobrands .sub_menu").toggle(500);
        if ( tobrandstoggle ) {
            $(".tobrands span i").removeClass("fa-angle-right");
            $(".tobrands span i").addClass("fa fa-angle-down");
            tobrandstoggle = false;
        } else {
            $(".tobrands span i").removeClass("fa-angle-down");
            $(".tobrands span i").addClass("fa fa-angle-right");
            tobrandstoggle = true;
        }
        if (toaboutJtoggle == false)   { $(".toaboutJ .sub_menu").toggle(500); $(".toaboutJ span i").removeClass("fa-angle-down"); $(".toaboutJ span i").addClass("fa fa-angle-right"); toaboutJtoggle = true;}
        if (togbrandstoggle == false)   { $(".togbrands .sub_menu").toggle(500); $(".togbrands span i").removeClass("fa-angle-down"); $(".togbrands span i").addClass("fa fa-angle-right"); togbrandstoggle = true;}
    });    
    var togbrandstoggle = true;
    $(".togbrands").bind("click",function(){
        $(".togbrands .sub_menu").toggle(500);
        if ( togbrandstoggle ) {
            $(".togbrands span i").removeClass("fa-angle-right");
            $(".togbrands span i").addClass("fa fa-angle-down");
            togbrandstoggle = false;
        } else {
            $(".togbrands span i").removeClass("fa-angle-down");
            $(".togbrands span i").addClass("fa fa-angle-right");
            togbrandstoggle = true;
        }
        if (toaboutJtoggle == false)   { $(".toaboutJ .sub_menu").toggle(500); $(".toaboutJ span i").removeClass("fa-angle-down"); $(".toaboutJ span i").addClass("fa fa-angle-right"); toaboutJtoggle = true;}
        if (tobrandstoggle == false)   { $(".tobrands .sub_menu").toggle(500); $(".tobrands span i").removeClass("fa-angle-down"); $(".tobrands span i").addClass("fa fa-angle-right"); tobrandstoggle = true;}
    });    

	$('.bg-holder').parallaxScroll({
		friction: 0.5
	}); 

    $('#s1').removeClass().addClass('bounceInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
    $('#s2').removeClass().addClass('bounceInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
    $('#s3').removeClass().addClass('bounceInRight animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
});

$(window).resize(function(){
	if($(".mobileToggleMenu").css("display") == "none"){
		$(".jHeaderDiv nav.jMenu").css("display","block");
	}else if($(".mobileToggleMenu").css("display") == "block"){
		$(".jHeaderDiv nav.jMenu").css("display","none");
	}
});
