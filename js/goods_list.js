/**
 * Created by Administrator on 2017/4/15.
 */

/*
 * 图片的悬浮显示
 * */
var goodcosmalptolist = document.getElementsByClassName("goodcosmalptolist");
var goodcontliptoshow = document.getElementsByClassName("goodcontliptoshow");
(function() {
    for (var i = 0; i < goodcosmalptolist.length; i++) {
        var obj2 = goodcosmalptolist[i].getElementsByTagName("img");
        var obj1 = goodcontliptoshow[i].getElementsByTagName("img");
        showblock(obj1, obj2);
    }
})();
/*
 * 左右点击切换图片
 * */
var prevs = document.getElementsByClassName("smptoprev");
var nexts = document.getElementsByClassName("smptonext");
var lists = document.getElementsByClassName("goodcosmalptolistcon");
var imgwidth = parseInt(document.getElementById("imgwidth").width) + 8;
(function() {
    for (var i = 0; i < prevs.length; i++) {
        prevandnext(prevs[i], nexts[i], lists[i], imgwidth)
    }
})();
function prevandnext(prevs, nexts, lists, imgwidth) {
    prevs.onclick = function() {
        if (lists.style.left >= "0px") {
            lists.style.left = -imgwidth * (lists.getElementsByTagName("img").length - 5) + "px";
        } else {
            lists.style.left = parseInt(lists.style.left) + imgwidth + "px";
        }
    }
    nexts.onclick = function() {
        if (parseInt(lists.style.left) <= -imgwidth * (lists.getElementsByTagName("img").length - 5)) {
            lists.style.left = "0px";
        } else {
            lists.style.left = parseInt(lists.style.left) - imgwidth + "px";
        }
    }
}
function showblock(obj1, obj2) {
    for (var i = 0; i < obj2.length; i++) {
        (function(i) {
            obj2[i].onmouseover = function() {
                for (var j = 0; j < obj1.length; j++) {
                    obj1[j].style.display = "none";
                }
                obj1[i].style.display = "block";
            }
        })(i)
    }
}
/*
 * 服务分类子菜单的显示隐藏
 *
 * */
var servicedropmenu = document.getElementById("servicedropmenu");
var serve_navconlist = document.getElementById("serve_navconlist");
(function() {
    showdropmenu(servicedropmenu, serve_navconlist);
})();

function showdropmenu(obj1, obj2) {
    obj1.onmouseover = function() {
        obj2.style.display = "block";
    };
    obj1.onmouseout = function() {
        obj2.style.display = "none";
    }
}
/*
 * “更多”点击的显示隐藏
 *
 * */
var morebtn = document.getElementById("brand02blockbtn");
var typechoose02 = document.getElementById("typechoose02");

function clickshow(obj1, obj2) {
    obj1.onclick = function() {
        if (obj2.style.height) {
            if (obj2.style.height == "60px") {
                obj2.style.height = "auto";
                this.innerHTML = "收起";
            } else {
                obj2.style.height = "60px";
                this.innerHTML = "更多";
            }
        } else {
            obj2.style.height = "auto";
            this.innerHTML = "收起";
        }

    }
}
clickshow(morebtn, typechoose02);