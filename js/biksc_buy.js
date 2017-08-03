/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-04-25 11:29:46
 * @version $Id$
 */
/*
 * 动态生成
 *
 * */

var buy_con2blockcon="";
(function creategoodsdiv() {
    for (var i = 0; i < buyGoodsjsonArray.data.length; i++) {
        buy_con2blockcon+="<div class=\"buy_con2block\">"+
            "<span>"+
            "<input type=\"checkbox\" class=\"inputchecked\" checked>"+
            "<a href=\"javascript:void(0)\">"+
            "<img src='images/"+buyGoodsjsonArray.data[i].goodsimgurl+"'/>"+
            "</a>"+
            "</span>"+
            "<span>"+
            "<a href=\"javascript:void(0)\">"+
            buyGoodsjsonArray.data[i].goodsname+
            "</a>"+
            "<span>"+
            "<div>"+"尺码:"+buyGoodsjsonArray.data[i].size+"</div>"+
            "<div>"+"颜色:"+buyGoodsjsonArray.data[i].color+"</div>"+
            "</span>"+
            "</span>"+
            "<span>"+
            "<div>"+buyGoodsjsonArray.data[i].beforeprice+"</div>"+
            "<div class=\"price\">"+buyGoodsjsonArray.data[i].nowprice+"</div>"+
            "</span>"+
            "<span>"+
            "<a href=\"javascript:void(0)\" class=\"sub\">"+"-"+"</a>"+
            "<input type=\"text\" value=\"1\" class=\"quality\">"+
            "<a href=\"javascript:void(0)\" class=\"add\" >"+"+"+"</a>"+
            "</span>"+
            "<span class=\"sumprice\">"+
            buyGoodsjsonArray.data[i].nowprice+
            "</span>"+
            "<span>"+
            "<a href=\"javascript:void(0)\" class=\"delbtn\">"+"删除"+"</a>"+
            "</span>"+
            "</div>";
    }
    document.getElementsByClassName("buy_con2")[0].innerHTML=buy_con2blockcon;
})();


var add=document.getElementsByClassName("add");
var sub=document.getElementsByClassName("sub");
var price=document.getElementsByClassName("price");
var quality=document.getElementsByClassName("quality");
var sumprice=document.getElementsByClassName("sumprice");
var inputchecked=document.getElementsByClassName("inputchecked");
var totalamount=document.getElementById("total_amount");
var delbtn=document.getElementsByClassName("delbtn");
var buy_con2block=document.getElementsByClassName("buy_con2block");
var checkallinput=document.getElementsByClassName("buy_con1_span01")[0].getElementsByTagName("input")[0];
/**
 *算法函数加事件
 * 购物车功能
 */
function updateTotalamount() {
    var price=0;
    for(var i=0;i<buy_con2block.length;i++){
        if(inputchecked[i].checked){
            price+=parseFloat(sumprice[i].innerHTML);
        }
    }
    totalamount.innerHTML=price.toFixed(2);
};
updateTotalamount();
function getsubtotal() {
    for(var i=0;i<buy_con2block.length;i++){
        sumprice[i].innerHTML=(parseInt(quality[i].value)*parseFloat(price[i].innerHTML)).toFixed(2);

    }
}
for(var i=0;i<add.length;i++){
    (function (i) {
        add[i].onclick=function () {
            var value=parseInt(quality[i].value);
            value++;
            quality[i].value=value;
            getsubtotal();
            updateTotalamount();
        };
        sub[i].onclick=function () {
            var value=parseInt(quality[i].value);
            if(value>=1){
                value--;
                quality[i].value=value;
                getsubtotal();
                updateTotalamount();
            }
        };
        delbtn[i].onclick=function () {
            this.parentNode.parentNode.remove();
            getsubtotal();
            updateTotalamount();
        };
        inputchecked[i].onclick=function () {
            if(this.checked){
                updateTotalamount();
            }else{
                checkallinput.checked=false;
                updateTotalamount();
            }
        };
    })(i)
}
checkallinput.onclick=function () {
    if(this.checked==true){
        for(var i=0;i<add.length;i++){
            inputchecked[i].checked=true;
        }
    }
    updateTotalamount();
};
checkallinput.checked=true;





