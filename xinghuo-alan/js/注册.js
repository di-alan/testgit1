
  $("#btn10").click(function () {
    var wait = 60;
 /*    console.log(111) */
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
    var pwd2 = $("#password2").val();
    //对比两次输入的密码 
    if (pwd1 == pwd2) {
        console.log("两次密码相同")
    }
    else {
        alert("两次密码不同")
    }
} */

     //登录
     if (localStorage.isLogin) {
        $(".btn8").hide();
        $("#li1").show();
      }
      //注册
      $(".btn1").click(function () {
        console.log(222);
        //   用户名
        var loginName = $("#loginName").val();
        //   密码
        var password = $("#password").val();
        //   确认输入密码
        var password1 = $("#password1").val();
        //   真实姓名
        var userName = $("#userName").val();
        //   身份证号码
        var idNumber = $("#idNumber").val();
         //   邮箱
         var email = $("#email").val();
        //   学校
        var school = $("#school").val();
        //  专业
        var profession = $("#profession").val();
        // 年级
        var grade = $("#grade").val();
        //   手机号
        var phonenumber = $("#phonenumber").val();
        // 手机号验证码
        var code = $("#code").val();
        console.log(222);
        $.ajax({
            url: "http://59.111.92.205:13002/api/register",
            type: "post",
            contentType: "application/json",
            data: JSON.stringify({
               
              loginName: loginName,
              password1: password1,
              idNumber: idNumber,
              school: school,
              password: password,
              userName: userName,
              email: email,
              profession:profession,
              grade: grade,
              phonenumber: phonenumber,
              code: code,
            }),
            success: function (res) {
              console.log(res);
            },
            error: function (err) {
                alert("失败")
            },
          });
        });
        //获取验证码
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
        // 用户名
  var regName = /^[\u4E00-\u9FA5A-Za-z0-9]{4,20}$/;
  $("#loginName").blur(function () {
    if (!regName.test($("#loginName").val())) {
        alert("名字输入不符合要求");
    }
});

// 密码
  var regpwd = /^.{4,20}$/;
   $("#password").blur(function () {
    if (!regpwd.test($("#password").val())) {
        alert("密码输入不符合要求");
    }
});

// 两次密码一致
$(function () {
    $("#password1").blur(function () {
        if ($("#password1").val() != $("#password").val()) {
            alert("两次输入的密码不一致");
        }
    })
})

// 输入真实姓名
var regUserName = /^[\u4e00-\u9fa5]{2,4}$/;
$("#userName").blur(function () {
    if (!regUserName.test($("#userName").val())) {
        alert("真实姓名输入不符合要求");
    }
});

// 输入身份证号
var regIdNumber = /^\d{17}(\d|x|X)$/;
$("#idNumber").blur(function () {
    if (!regIdNumber.test($("#idNumber").val())) {
        alert("身份证号码输入不符合要求");
    }
});

// 输入邮箱
var regEmail = /^[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}$/;
$("#email").blur(function () {
    console.log("111111");
    if (!regEmail.test($("#email").val())) {
        alert("邮箱输入不符合要求");
    }
});

// 输入学校
var regSchool = /[\u4e00-\u9fa5]/;
$("#school").blur(function () {
    console.log("111111");
    if (!regSchool.test($("#school").val())) {
        alert("学校输入不符合要求");
    }
});

// 输入专业
var regProfession = /[\u4e00-\u9fa5]/;
$("#profession").blur(function () {
    console.log("111111");
    if (!regProfession.test($("#profession").val())) {
        alert("专业输入不符合要求");
    }
});

// 输入年级
var regGrade = /[\u4e00-\u9fa5]/;
$("#grade").blur(function () {
    console.log("111111");
    if (!regGrade.test($("#grade").val())) {
        alert("年级输入不符合要求");
    }
});

// 输入手机号
var regPhonenumber = /^1[3,5,7,8]\d{9}$/;
$("#phonenumber").blur(function () {
    console.log("111111");
    if (!regPhonenumber.test($("#phonenumber").val())) {
        alert("手机号输入不符合要求");
    }
});

// 输入验证码
var regCode = /^\d{6}$/;
$("#code").blur(function () {
    console.log("111111");
    if (!regCode.test($("#code").val())) {
        alert("验证码输入不符合要求");
    }
});