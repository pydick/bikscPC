/**
 * Created by Administrator on 2017/4/10.
 */
/*
*  右侧停靠栏回到top
* */

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop()>600) {
            $(".rgtslidnacon07").fadeIn(1500);
        }
        else {
            $(".rgtslidnacon07").fadeOut(1500);
        }
    })
    $(".rgtslidnacon07").children("a").click(function () {
        $('html,body').animate({'scrollTop': 0}, 600);
        /*        if ($("html").scrollTop()) {
         $("html").animate({ scrollTop: 0 }, 1000);
         return false;
         }
         $('body').animate({ scrollTop: 0 }, 1000);
         return false;
         });*/
    })
})
