/**
 * Created by Administrator on 2017/5/2.
 */
/*
 *
 * 电梯栏升降
 * */
function showColor(index) {
    $(".elevator_nav").fadeIn();
    $(".elevator_nav").children("a").eq(index).css("backgroundColor","#c40000");
    $(".elevator_nav").children("a").eq(index).css("color","#fff");
}
$(window).scroll(function () {
    $(".elevator_nav").children("a").css("backgroundColor","#fff");
    $(".elevator_nav").children("a").css("color","#999");
    if($(window).scrollTop()<665){
        $(".elevator_nav").fadeOut();
    }else if($(window).scrollTop()<995){
        showColor(0);
    }else if($(window).scrollTop()<1365){
        showColor(1);
    }else if($(window).scrollTop()<1737){
        showColor(2);
    }else if($(window).scrollTop()<2530){
        showColor(3);
    }else if($(window).scrollTop()<2960){
        showColor(4);
    }else if($(window).scrollTop()<3430){
        showColor(5);
    } else if($(window).scrollTop()<4000){
        showColor(6);
    }else if($(window).scrollTop()<4450){
        showColor(7);
    }
});
$(function () {
    $("#elevator_nav_top").click(function (){
        $("html,body").animate({
            scrollTop:"0px"
        },300)
    });
    $(".elevator_nav").children("a").click(function () {
        $("html,body").animate({
            scrollTop:$(".con_blockcon3").eq($(this).index()).offset().top+"px"
        },300)
    });
    $(".elevator_nav").children("a").mouseover(function () {
        var flootarr=["潮流服饰","美容美体","名鞋箱包","手机数码","家具家电","母婴玩具","特色食品","奢侈品"];
        $(this).html(flootarr[$(this).index()]);
        $(this).css("backgroundColor","#c40000");
        $(this).css("color","#fff");
        $(this).css("lineHeight","14px");
    });
    $(".elevator_nav").children("a").mouseout(function () {
        $(this).html($(this).index()+1+"F");
        $(this).css("backgroundColor","#fff");
        $(this).css("color","#999");
        $(this).css("lineHeight","35px");
    })
});
