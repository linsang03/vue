$(function(){
    $(".commodity_type_select ul li").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
    })
})