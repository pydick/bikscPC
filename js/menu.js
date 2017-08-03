/**
 * Created by Administrator on 2017/4/7.
 */
/*
 *  二级菜单栏的显示隐藏
 *
 * */

var conblocklis=document.getElementsByClassName("conblocklis");
var  conblockdrop=document.getElementsByClassName("con01mid");
/*
* 原生js menu显示隐藏方法
* */
/*var servcnlit_droplipostion=document.getElementsByClassName("servcnlit_droplipostion");
 var servconlist_droplist=document.getElementsByClassName("servconlist_droplist");
function showblock(obj1,obj2) {
    for (var i = 0; i < obj1.length; i++) {
        (function (i) {
            obj1[i].onmouseover = function () {
                if (obj2[i].style.display == "none") {
                    obj2[i].style.display = "block";
                }
            };
            obj1[i].onmouseout = function () {
                if (obj2[i].style.display == "block") {
                    obj2[i].style.display = "none";
                }
            }
        })(i)
    }
}*/
/*
* jq menu显示隐藏的方法
* */
$(function () {
    $(".servcnlit_droplipostion").mouseover(function () {
        if($(".servconlist_droplist").eq($(this).index()).hide()){
            $(".servconlist_droplist").eq($(this).index()).show();
        }
    });
    $(".servcnlit_droplipostion").mouseout(function () {
        if($(".servconlist_droplist").eq($(this).index()).show()){
            $(".servconlist_droplist").eq($(this).index()).hide();
        }
    })
})


/*}*/
/*showblock($(".servcnlit_droplipostion"),$(".servconlist_droplist"));*/
/*
* 正文内容一的显示隐藏
* */
function tabblock(obj1,obj2){
    for(var i=0;i<obj1.length;i++){
        (function (i) {
            obj1[i].onmouseover=function(){
                for(var j=0;j<obj2.length;j++){
                    obj2[j].style.display="none";
                }
                obj2[i].style.display="block";

            }
        })(i)
    }
}
tabblock(conblocklis,conblockdrop);
/*
* 封装失败1方法
* */
/*(function () {
    function Showblockobj(activeObj,passiveObj) {
        this.menulist=document.getElementsByClassName(activeObj);
        this.dropmenulist=document.getElementsByClassName(passiveObj);
    }
    Showblockobj.prototype={
        constructor:Showblockobj,
        ownnouseover:function () {
            for(var i=0;i<this.menulist.length;i++){
                this.menulist[i].onmouseover=function () {
                    console.log(this.dropmenulist);
                    for(var j=0;j<this.dropmenulist.length;j++){
                        this.dropmenulist[j].style.display="none";
                    }
                    this.dropmenulist[i].style.display="block";
                }
            }

        }
    };
    window.Showblockobj=Showblockobj;
})();
/*new Showblockobj("servcnlit_droplipostion","servconlist_droplist"*!/).ownnouseover();*/

