$(function(){
    $(".num_add").click(function(){
        var num = $(this).parent().find(".number").val();
        num = Number(num);
        num++
        $(this).parent().find(".number").val(num);
    })
    $(".num_pre").click(function(){
        var num = $(this).parent().find(".number").val();
        num = Number(num);
        num--
        if(num<1){
            num = 1;
        }
        $(this).parent().find(".number").val(num);
    })
})