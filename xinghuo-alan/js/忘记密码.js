   
     /* console.log(111) */
     //登录
   if (localStorage.isLogin) {
    $(".btn").hide();
    $("#li1").show();
  }
  /* console.log(111) */
  //计时器
  $("#btn10").click(function () {
    var wait = 60;
   $('#btn10').attr('disabled',"true");//单击多次只执行一次
    var time = setInterval(function () {
      wait--;
      $("#btn10").val(wait + "获取验证码");
      if (wait == 0) {
        clearInterval(time);
        $("#btn10").val(60 + "获取验证码");
      }
    }, 1000);
  });
  // 判断两次密码是否一致、
/* function validate() {
  var pwd1 = $("#password").val();
  var pwd2 = $("#password1").val();
  //对比两次输入的密码 
  if (pwd1 == pwd2) {
      console.log("两次密码相同")
  }
  else {
      alert("两次密码不同")
  }
} */
// 更改密码
  $(".btn1").click(function () {
    var phonenumber = $("#phonenumber").val();
    var code = $("#code").val();
    var password = $("#password").val();
    var password1 = $("#password1").val();
    $.ajax({
        url: "http://59.111.92.205:13002/api/findPwd",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
          phonenumber: phonenumber,
          code: code,
          password: password,
          password1: password1,
          rememberMe: true,
        }),
        success: function (res) {
          console.log(res);
          alert("更改密码成功");
        },
        error: function (err) {},
      });
    });
  
    // 获取验证码
$("#btn10").click(function () {
  var phonenumber = $("#phonenumber").val();
  $.ajax({
      url: "http://59.111.92.205:13002/api/sendCode?mobile=" + phonenumber,
      type: "get",
      contentType: "application/json",
      success: function(res) {
          console.log(res)   
      },
      error: function(err) {
          console.log(err)
      }
  })
})