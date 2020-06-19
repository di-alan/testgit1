$(".top-mid-bq>li").click(function(){
    $(this).addClass("select8").siblings().removeClass("select8");
    $(".tab").eq($(this).index()).show().siblings().hide()
})