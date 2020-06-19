$.ajax({
    url: " http://59.111.92.205:13002/api/innovation/notice/list",
    type: "post",
    contentType: "application/json",
   /*  async:false, */
    data: JSON.stringify({
      type: "1",
    }),
    success: function (res) {
      console.log(res);
      $("#img1").attr("src", res.rows[0].coverUrl);
      $("#title1").html(res.rows[0].title);
      $("#content1").html(res.rows[0].describe);
      $("#time1").html(res.rows[0].publishTime);
      localStorage.setItem("newId",res.rows[0].id);
      console.log(localStorage.newId)//19
    },
    error: function (err) {
      console.log(err);
    },
  });

  $.ajax({
    url: "http://59.111.92.205:13002/api/innovation/notice/list",
    type: "post",
    contentType: "application/json",
  /*   async:false, */
    data: JSON.stringify({
      type: "2",
    }),
    success: function (res) {
      console.log(res);
      $("#img2").attr("src", res.rows[0].coverUrl);
      $("#title2").html(res.rows[0].title);
      $("#content2").html(res.rows[0].describe);
      $("#time2").html(res.rows[0].publishTime);
      console.log(res.rows[0].coverUrl);
      localStorage.setItem("newId1",res.rows[0].id);
      console.log( localStorage.newId1)//20
    },
    error: function (err) {
      console.log(err);
    },
  });

  $.ajax({
    url: " http://59.111.92.205:13002/api/innovation/notice/list",
    type: "post",
    contentType: "application/json",
 /*    async:false, */
    data: JSON.stringify({
      type: "3",
    }),
    success: function (res) {
      console.log(res);
      $("#img3").attr("src", res.rows[0].coverUrl);
      $("#title3").html(res.rows[0].title);
      $("#content3").html(res.rows[0].describe);
      $("#time3").html(res.rows[0].publishTime);
      console.log(res.rows[0].coverUrl);
      localStorage.setItem("newId2",res.rows[0].id);
      console.log(  localStorage.newId2)//26
    },
    error: function (err) {
      console.log(err);
    },
  });

 