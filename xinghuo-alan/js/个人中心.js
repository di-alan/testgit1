console.log(localStorage.name);
var a =JSON.parse(localStorage.name);
console.log(a);
$(".name1").val(a.userName);
$(".username").val(a.loginName);
$(".phoneNumber").val(a.phonenumber);
$(".idNumber").val(a.idNumber);
$(".email").val(a.email);
$(".school").val(a.school);
$(".grade").val(a.grade);
//更新信息
$(".btn7").click(function(){
$.ajax({
    url: "http://59.111.92.205:13002/api/site/logout",
    type: "POST",
    contentType: "application/json",
    xhrFields: {
      withCredentials: true, // 要在这里设置 跨域设置cookie
    },
    crossDomain: true,
    success: function (res) {
      console.log(res);
      localStorage.removeItem("isLogin", true);
      console.log(localStorage.name);
    },
    error: function (error) {
      console.log(error);
    },
  });
  $("#Ul>li").click(function(){
    $(this).addClass("select9").siblings().removeClass("select9");
    $(".tab1").eq($(this).index()).show().siblings()
})
})