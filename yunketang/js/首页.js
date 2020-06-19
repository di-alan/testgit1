
//请求轮播图
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/banner/list?number=5",
    type: "get",
    data: null,
    success: function (res) {
        console.log(res)
        $(".swiper_pic_0").attr("src", res.data[0].imgUrlPc)
        $(".swiper_pic_1").attr("src", res.data[1].imgUrlPc)
        $(".swiper_pic_2").attr("src", res.data[2].imgUrlPc)
        $(".swiper_pic_3").attr("src", res.data[2].imgUrlPc)
        $(".swiper_pic_4").attr("src", res.data[4].imgUrlPc)

    },
    error: function (err) {
        console.log(err)
    },
})
// 请求课程类型获取列表
// 免费课程
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    data: {
        "type": "free",
        "pageNum": "1",
        "pageSize": "10",
    },
    success: function (res) {
        var free = document.getElementsByClassName("free");
        for (var i = 0; i < free.length; i++) {
             // 给所有图片及文字获取渲染接口
            $(".free").find("img")[i].src = res.rows[i].bannerFileUrl;
            $(".free").find(".dt2")[i].innerText = res.rows[i].courseTitle;
            $(".free").find(".span1")[i].innerText = res.rows[i].subSectionNum;
            $(".free").find(".span2")[i].innerText = res.rows[i].participationsCount;
            $(".free")[i].setAttribute("name1", res.rows[i].courseId);
            free[i].onclick = function(){
                localStorage.setItem("courseId",free[i].getAttribute("name1"))
                console.log(localStorage.getItem("courseId"))
            } 
        }
    },
    error: function (err) {
        console.log(err)
    },
})
// 精品课程
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    data: {
        "type": "boutique",
        "pageNum": "1",
        "pageSize": "5",
    },
    success: function (res) {
        var boutique = document.getElementsByClassName("boutique");
        for (let i = 0; i < boutique.length; i++) {
            $(".boutique").find("img")[i].src = res.rows[i].bannerFileUrl;
            $(".boutique").find(".dt2")[i].innerText = res.rows[i].courseTitle;
            $(".boutique").find(".span1")[i].innerText = res.rows[i].subSectionNum;
            $(".boutique").find(".span2")[i].innerText = res.rows[i].participationsCount;
            if (res.rows[i].isFree == 1) {
                $(".boutique").find(".span3")[i].innerText = "免费";
                $(".boutique").find(".box2")[i].style = "dispaly:none"
            } else if (res.rows[i].isFree == 0) {
                $(".boutique").find(".span4")[i].innerText = res.rows[i].discountPrice
                $(".boutique").find(".span5")[i].innerText = res.rows[i].coursePrice;
                $(".boutique").find(".box2")[i].innerText = res.rows[i].discountDesc;
            }
        }
    },
    error: function (err) {
        console.log(err)
    },

})
//限时折扣课程
$.ajax({
    url: "http://59.111.104.104:8086/weChat/applet/course/list/type",
    type: "POST",
    contentType: "application/x-www-form-urlencoded",
    data: {
        "type": "discount",
        "pageNum": "1",
        "pageSize": "5",
    },
    success: function (res) {
        // console.log(res);
        var boutique = document.getElementsByClassName("discount");
        for (let i = 0; i < boutique.length; i++) {
            $(".discount").find("img")[i].src = res.rows[i].bannerFileUrl;
            $(".discount").find(".dt2")[i].innerText = res.rows[i].courseTitle;
            $(".discount").find(".span1")[i].innerText = res.rows[i].subSectionNum;
            $(".discount").find(".span2")[i].innerText = res.rows[i].participationsCount;
            if (res.rows[i].isFree == 1) {
                $(".discount").find(".span3")[i].innerText = "免费";
                $(".discount").find(".box2")[i].style = "dispaly:none"
            }   else if (res.rows[i].isFree == 0) {
                $(".discount").find(".span4")[i].innerText = res.rows[i].discountPrice
                $(".discount").find(".span5")[i].innerText = res.rows[i].coursePrice;
                $(".discount").find(".box2")[i].innerText = res.rows[i].discountDesc;
            }
        }
    },
    error: function (err) {
        console.log(err)
    },

})
