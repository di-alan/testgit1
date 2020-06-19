//
$(".comments_3_1_span").click(function () {
    $(this).parent().siblings(".fbhf").show();
    $(".fbhf").not($(this).parent().siblings(".fbhf")).hide();
})
console.log(localStorage.courseId)
$.ajax({
    url: "http://59.111.104.104:8086/pc/course/detail/103",
    type: "GET",
    data: null,
    success: function (res) {
        console.log(res)
        $(".h3_1").text(res.data.courseTitle)
        $(".span_1").text(res.data.participationsCount)
        // console.log(res.data.courseDetail)
        $("#course_description").html(res.data.courseDetail)
        var box_1 = document.getElementsByClassName("box_1");
        var box_3 = document.getElementsByClassName("box_3");
        var box_10 = document.getElementsByClassName("box_10");
        var box_11 = document.getElementsByClassName("box_11");
        for (let i = 0; i <2; i++) {
            $(".box_1").find(".box_2")[i].innerHTML = res.data.sections[i].sectionName;
            for(let j=0;j<box_11.length;j++){
                console.log(box_11)
                if(box_11[j]==box_1[i]){
                 
                }
              
            }
        }
    },
    error(err) {
        console.log(err);
    }
})