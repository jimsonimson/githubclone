$(function(){
  var githubName = "jimsonimson";

  var githubParameters = function(githubUserName) {
    this.githubName = githubUserName;
    this.githubUrl = "https://api.github.com/users/";
    this.starred = "/starred";
  };
  var gitAjax = new githubParameters(githubName);

  $.ajax({
    type: "GET",
    url: gitAjax.githubUrl + gitAjax.githubName,
    success: function(githubData) {
      gitResponse(githubData);
    },
    error: function(err) {
      console.log(err);
    }
  });

  $.ajax({
    type: "GET",
    url: gitAjax.githubUrl+gitAjax.githubName+gitAjax.starred,
    success: function(data) {
      gitStarred(data);
  },
    error: function(err) {
      console.log(err);
    }
  });

  function gitResponse(data){
    $(".username").text(data.login);
    $(".avatar").attr("src", data.avatar_url);
    $(".followers").text(data.followers);
    $(".following").text(data.following);
    var date = new Date(data.created_at).toDateString();
    $(".joindate").text(date);
  }

  function gitStarred(data){
    $(".starred").text(JSON.parse(data.length));
  }

});
