$(function(){
    $('html').keydown(function(e){
        switch(e.keyCode) {
            case 38:
                $("#rocket").animate({ "top": "-=50px" }, "slow" );
                break;
            case 40:
                $("#rocket").animate({ "top": "+=50px" }, "slow" );
                break;
            case 37:
                $("#rocket").animate({ "left": "-=50px" }, "slow" );
                break;
            case 39:
                $("#rocket").animate({ "left": "+=50px" }, "slow" );
                break; 
            default:
                console.log(e.keyCode);
        }
    });
});