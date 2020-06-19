console.log(localStorage.newId);
console.log(localStorage.newId1);
console.log(localStorage.newId2);
 $.ajax({
    url: "  http://59.111.92.205:13002/api/innovation/notice/detail",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify({
      id:"19",
    }),
    success: function (res) {
      console.log(res);
      $("#title").html(res.data.title);
      $("#content").html(res.data.content);
      $("#time").html(res.data.publishTime);
    },
    error: function (err) {
      console.log(err);
    },
  });
  $.ajax({
    url: "  http://59.111.92.205:13002/api/innovation/notice/detail",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify({
      id:"20",
    }),
    success: function (res) {
      console.log(res);
      $("#title").html(res.data.title);
      $("#content").html(res.data.content);
      $("#time").html(res.data.publishTime);
    },
    error: function (err) {
      console.log(err);
    },
  });
  $.ajax({
    url: "  http://59.111.92.205:13002/api/innovation/notice/detail",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify({
      id:"26",
    }),
    success: function (res) {
      console.log(res);
      $("#title").html(res.data.title);
      $("#content").html(res.data.content);
      $("#time").html(res.data.publishTime);
    },
    error: function (err) {
      console.log(err);
    },
  });