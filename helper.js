//scroll
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if (scroll_pos >0){
            $("nav").addClass("bgcolor");
        }else{
            $("nav").removeClass("bgcolor");
        }
    })
})

