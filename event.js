// setInterval(function(){
// var myActive=document.getElementsByTagName("li").className
// if(myActive=="active")
// {
//     myActive.style.width="60px"
// }
// },10000)
$(".partsLogo").on("click",function(){
    $(".partsLogo").removeClass("partsLogo-active");
    $(".partsLogo").children().removeClass("partsLogo-img-active")
    $(this).addClass("partsLogo-active");
    $(this).children().addClass("partsLogo-img-active")
})
// $(document).ready(function(){
// $(".ideaimg ").hover(function(){
//     $(this).children().css("display","block")},function(){})
// })