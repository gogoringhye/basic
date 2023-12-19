//slick.js
$(document).ready(function () {
  $('.banner_list').slick({
    //setting-name: setting-value(지워도 됨)
    dots: true, //slick에 github, settings 들어가서 dot를 긁어오는데 기본값이 false여서 true로 바꿔줌
    autoplay: true, //위와 마찬가지 방법으로 긁어옴, 시간 지나면 알아서 페이지 자동으로 바뀜
  });
});