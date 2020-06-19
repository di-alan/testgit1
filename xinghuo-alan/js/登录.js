$("#loginID").click(function () {
    var userName = $("#username").val();
    var passWord = $("#password").val();
    console.log(userName, passWord);
    $.ajax({
        url: "http://59.111.92.205:13002/api/login",
        type: "post",
        //设置了允许请求跨域
        xhrFields: {
            withCredentials: true // 在这里设置了跨域设置cookie
        },
        contentType: "application/x-www-form-urlencoded",
        data: {
            username: userName,
            password: passWord,
            rememberMe: true,
        },
        success: function (res) {
            console.log(res);
            if (res.code == 0) {
                alert("登陆成功");
               window.open("./个人中心.html")
                localStorage.setItem("isLogin", true);
                localStorage.setItem("name", JSON.stringify(res.userInf))
            } else {
                alert("登陆失败");
            }
            //个人中心接口
            $.ajax({
                url: "http://59.111.92.205:13002/api/innovation/project/selectProjectBycreateBy",
                type: "POST",
                contentType: "application/json",
                //  需要设置允许请求跨域
                xhrFields: {
                    withCredentials: true // 要在这里设置 跨域设置cookie
                },
                crossDomain: true,
                success: function (res) {
                },
                error: function (err) {
                    console.log(err)
                },
            })

        },
        error: function (error) {
            console.log(error);
        },
    })
})

