🤓 수업 참고 사이트 
```
🖤 github(메모, 백업)

🖤 visual studio code(* open with live server 작동 안될시 settings ➡ use ✔)

🖤 Figma(시안, 일러스트와 유사함)

🖤 ChatGPT 

🖤 AnyDesk(원격 조종 사이트) 

🖤 netlify(호스팅 사이트)

🖤 jQuery CDN

🖤 codepen

🖤 EntityCode(특수기호)

🖤 fontawesome(무료 아이콘)

🖤 remixicon(무료 아이콘)

🖤 크롬 번역기 다운(chrome 웹스토어)

🖤 한글 Lorem Ipsum

🖤 Favicon & App Icon Generator(파비콘 사이즈 조절)

🖤 Fancy Border Radius Generator(테두리 모양을 시각적으로 조절하고 코드를 쉽게 생성할 수 있게 도와주는 사이트)

🖤 BOXY SVG(벡터 그래픽을 생성하고 편집하는 데 사용되는 전문적인 도구인 벡터 그래픽 편집기)

🖤 정규식(https://regexr.com/5mhon)

🖤 react(싱글페이지 어플리케이션)

🖤 폰트 변환(ex.하나카드 예제 폰트)사이트 web font genertator(add fonts-->convert-->download)

🖤 caniuse

🖤 cutthecode

🖤 cydstumpel(https://cydstumpel.nl/)

🖤 https://codepen.io/Roxey/pen/oZrRZN

🖤 rgbKineticSlider(codepen demo에 있는 유형, github), https://github.com/hmongouachon/rgbKineticSlider
```

```
🔎 도서 열람 사이트
* The book

(교재추천)
1. 코딩 자율학습 HTML + CSS + 자바스크립트
2. 리액트를 다루는 기술 [개정판]
3. 모두의 HTML5 & CSS3
4. 모두의 SQL

🖤 w3school
  
🖤 MDN Web Docs
```
  
```
🤸‍♀️ 평가

학생 공유 폴더 링크
- https://mybox.naver.com/share/list?shareKey=jzPu-VE_ykbVkDtkzMCOutMhKRpOpNxb4y4A6QduGKAB

학생 평가 제출 링크 
- http://naver.me/G2xSXtfc
```
```
🔎 filezill(강사님 자료 백업)

호스트: suuneeeee.dothome.co.kr 

사용자명: suuneeeee

비번: jung963852!

(주소 앞부분 suuneeeee.dothome.co.kr로 바꿔서 페이지 소스 확인하면 코드 확인 가능하다고 함)
```

```
🔎 이미지 사이트

🖤 unsplash

🖤 freepik

🖤 iconscout(유료이미지, 개발자로 긁으면 긁어와짐)

```

```
🔎 3D 사이트

🖤 spline(spline docs 참조)

🖤 dora

🖤 mixamo

🖤 sketchfab(glb로 저장) -- dora 또는 spline에서 import하여 사용가능 ▶ 도형 더블클릭 -- 3D editor 눌러야 편집 가능 ▶ 그룹 내부 클릭 -- 3D animations 파란색으로 체크하면 애니메이션 작동

🔎 ai 사이트

🖤 Luma AI

🖤 turbosquid

```



--------------------------------------------------------------------------------------------------------------------------------------------------------------------
```

🔎 애니메이션

🖤 gsap(자바스크립트 기반, 강력하고 유연한 애니메이션 라이브러리)

🖤 lenis(스크롤을 부드럽게)

🖤 splitting.js(자바스크립트 라이브러리, 텍스트를 분할하고 독특한 효과를 만들어낼 수 있음)

🖤 ScrollReveal(자바스크립트 라이브러리, 스크롤에 따라 요소를 나타내거나 감추는 애니메이션을 쉽게 구현할 수 있도록 도와줌--> 특정 요소들을 부드럽게 나타내거나 효과를 주고자 할 때 유용)

🖤 Three.js(자바스크립트 라이브러리, WebGL을 기반) 웹에서 3D 그래픽을 생성하고 표현하기 위한  이 라이브러리는으로 하며, 3D 모델링 및 애니메이션을 쉽게 구현할 수 있도록 다양한 기능을 제공)

🖤 locomotive.js(locomotive-scroll 또는 locomotive) --> 자바스크립트 라이브러리, 웹사이트에서 스크롤 이벤트를 다루며, 주로 모던하고 인터랙티브한 웹 페이지를 개발할 때 사용

```



### 😍 애니메이션을 이용할 수 있는 3가지 방법
### ⭐aos.js(https://michalsnik.github.io/aos/)

1. CDN SOURCES(CSS, JS)연결
```
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
```
```
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```
2. INITIALIZE AOS
```
<script>
  AOS.init();
</script>
```
3. 원하는 애니메이션 data-aos="" 긁어넣기

### ⭐Wow.js(https://wowjs.uk/docs.html)와 animate.css(https://animate.style/) 두 라이브러리를 함께 사용
```
- wow.js(는 애니메이션을 주는 것이 아니라 트리거를 돕는 역할을 함, 사이트에서 순서 확인) 

1. animate.css에서 css 긁어와서 라이브러리 연결해주기

2. wow cdn js(https://cdnjs.com/libraries/wow)에서 js 링크 긁어오기 

3. wow docs에서 script 긁어오기
```

```
4. docs Options 사용하여 트리거 주기

* "Wow.js"는 data-wow-duration ("1s") 및 data-wow-delay ("0.3s") 등을 명시적으로 제공하지 않아도, 기본적인 지속 시간과 지연 시간(기본값)을 사용하여

요소가 나타날 때 자동으로 애니메이션을 시작하지만 경우에 따라서 사용자가 명시적으로 속성을 지정하는 것이 유용할 수 있고, 원하는 시각적 효과를 얻는 것에 유리함.


data-wow-duration: Change the animation duration

data-wow-delay: Delay before the animation starts
  
data-wow-offset: Distance to start the animation (related to the browser bottom)
  
data-wow-iteration: Number of times the animation is repeated

<section class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s"> </section>
<section class="wow slideInRight" data-wow-offset="10"  data-wow-iteration="10">  </section>

```

```
- animate.css

"Animate.css" 라이브러리의 구조 및 작동 방식

--> animate__animated -- 요소에 애니메이션을 적용, animate__bounce -- 특정 애니메이션 효과를 정의(Installation and Usage -- Basic usage 가서 확인 가능함)
```

### ⭐jQuery Scrolla
```
1. jQuery Scrolla(https://maximzhurkin.github.io/jquery-scrolla/)에서 순서 확인
  
2. animate.css에서 css 긁어오기

3. code jquery cdn(min🐱‍🐉 가장 상단 부분에 위치해야함), scroll cdn, scrolla의 Custom settings 스트립크 넣어주기

* class="animate" --> 반드시 animate라는 클래스가 있어야 실행됨(사이트에 그렇게 명시되어 있음)

* data-animate="애니메이션" --> animate.css 사이트 들어가서 마음에 드는 효과의 이름을 " " 괄호 안에 넣어주면 됨.

* 굳이 css를 사용하지 않고도 style을 연결해서 style="animation-delay: 0.2s;" 이런식으로 애니메이션에 대한 효과를 줄 수 있음
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------


--------------------------------------------------------------------------------------------------------------------------------------------------------------------
```
🔎 슬라이더 라이브러리

🖤 slick --> jQuery 기반(사용 방법👍, 유연성👍,  커스터마이징 옵션, 트랜지션 효과, 반응형 디자인에 적합)

         --> jQuery, Slick CSS, Slick JS

         --> jQuery에 의존하기 때문에 jQuery 사용자들에게 친숙하며 간단한 설정으로 빠르게 구현 가능함


💫  라이브러리 선택할 때 비교해보면 좋을 사항

- 이미 프로젝트에 jQuery가 사용 중이라면 Slick을 고려할 수 있습니다.


🖤 swiper --> jQuery에 의존하지 않는 자바스크립트 라이브러리(많은 커스터마이징 옵션을 지원, 다양한 효과와 기능이 내장되어 있어 매우 유연한 커스터마이징이 가능함)

          --> Swiper CSS, Swiper JS

          --> jQuery에 의존하지 않아 더 경량하고 독립적으로 사용 가능(jQuery를 사용하지 않는 사용자에게 좋은 선택지)

          --> 터치 이벤트를 기반으로 한 모바일 터치 지원이 탁월함(모바일 프로젝트에 특히 유용)

💫 라이브러리 선택할 때 비교해보면 좋을 사항

- 모바일 터치 지원이 중요하다면 Swiper가 높은 성능과 터치에 최적화된 기능을 제공합니다.

- 다양한 효과와 설정을 더욱 세밀하게 조절하고자 한다면 Swiper가 더 많은 옵션을 제공합니다.
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------------------------------------------------
### 🎞 사이트 이미지 다운 방법(자바스크립트 예제 24번)
```
https://cyberfiction.io/
- 개발자 ➡ NEtwork ➡ img ➡ 우클릭, copy all as HAR ➡ 복사한 것을 콘솔에 붙여넣고 var har 함수 적가 ➡ 그 뒤에 선생님이 보내주신 내용(5번) 복붙하기(오류 allow pasting) 
- url 주소 이미지 대량 다운 --> google 쪽이 빠름(https://imgdownloader.com/ko/) 
```

1. 이미지의 갯수가 작게 나오면 새로고침하면 이미지가 로드된다.
2. console 창에 변수를 만든다
3. var har = 위에 복사한 내용을 붙여넣는다 (그 값은 객체이다)
4. 객체가 har이라는 변수에 할당외었고 그 아래에
5. download.js 안에 내용을 복사하여 console에 붙여넣으면 이미지 주소가 일괄적으로 나타난다
```
var imageUrls = [];
har.log.entries.forEach(function (entry) {
  if (entry.response.content.mimeType.indexOf("image/") !== 0) return;
  imageUrls.push(entry.request.url);
});
console.log(imageUrls.join('\n'));
```
![image](https://github.com/gogoringhye/basic/assets/145514996/812f5b20-cd68-4fef-9bca-1751ed42d4dc)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------------------------------------------------
🔎 php
🖤 XAMPP(통합에디터)
```
filezill(sugang7979.dothome.co.kr/php/webstandard/index.php)
1. 리모트 사이트(/html 부분에 호스트 적어주기)
2. 
```

🔎 MySQL(https://dev.mysql.com/downloads/file/?id=523567) 설치 방법 🔽
- 확인 후 체크하기
![image](https://github.com/gogoringhye/basic/assets/145514996/872b9006-1d4f-435f-82c4-4cbf9bc01056)
![image](https://github.com/gogoringhye/basic/assets/145514996/e1d023d3-fe5f-4ca6-8717-61c6ac3c77d6)
![image](https://github.com/gogoringhye/basic/assets/145514996/411dbc6d-c184-478d-ba9e-5450a120989c)
- 교재 다운 받기
![image](https://github.com/gogoringhye/basic/assets/145514996/f95ec05b-7720-48b6-8c63-6056839186a9)
![image](https://github.com/gogoringhye/basic/assets/145514996/7737aa99-4140-4ea5-aaab-5d5fc1a30444)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------------------------------------------------------------------------
```
🔎 포트폴리오

🖤 awwwards(시안 참조)
🖤 Codrops(lenis, react 기반, 소스가 공개되어 있어서 참조하기 매우 좋은 사이트임)
🖤 gdweb
https://magazinevm.com/%EC%9B%B9%EB%94%94%EC%9E%90%EC%9D%B8-%EB%B2%A4%EC%B9%98%EB%A7%88%ED%82%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-16%EA%B3%B3-%EA%B5%AD%EB%82%B4-%ED%95%B4%EC%99%B8-%EB%AA%A8%EC%95%84%EB%B3%B4%EA%B8%B0/
```

```
- https://cyberfiction.io/
- https://www.entirestudios.com/uniform/
- https://tympanus.net/codrops/2023/02/14/animate-a-camera-fly-through-on-scroll-using-theatre-js-and-react-three-fiber/
- https://www.lego.com/ko-kr/holiday-gifts
- https://shop.mattel.com/pages/barbie
- https://asia.sega.com/SonicSuperStars/kr/
- https://www.nintendo.co.kr/switch/acbaa/index.html
- https://www.dove.com/uk/home.html
- https://www.johnsonsbaby.co.kr/
- https://kodakphotoprinter.co.kr/?crema-reviews-1-page=2
- https://www.sonnyangel.com/ko/
- http://kongsuni.youngtoys.com/kor/support.do
- https://www.kinder.com/kr/ko/kinder-joy-moving
- https://www.baskinrobbins.co.kr/store/delivary.php
- https://www.mave-official.com/profile
- https://xdinaryheroes.com/
- https://www.thinkthingthank.com/about
- https://www.robotori.co.kr/v2/web/main/main.asp
- http://farmer.hanbom.com/
```

```
🦺 스크롤러 사이트 참조
- https://codepen.io/isladjan/pen/abdyPBw
- https://renaudrohlinger.com/
- https://dogstudio.co/cases/voo/
- https://www.goal.com/story/nxgn2019en/
- http://www.dementialab.org/discovery-lab/
- https://www.creativebloq.com/web-design/parallax-scrolling-1131762
```

```
1. 웹 에이전시(업무량 ⬆️, 대면 ⬆️)
2. 광고/홍보 온라인 마케팅 전문회사
3. 일반 기업체
4. 쇼핑몰/온라인몰
5. (2, 4는 면접시 sns 활용도 보는 편)
- PHP + mysql react, 자바스크립트(매우 중요)
- 관련 자격증(웹디자인기능사, GTQi)
* 학원 카페 가입--> 취업 정보 확인 가능
* 포폴 계획--> 상업 리뉴얼 & 개인 소개 페이지
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------



```
dothome 회원가입➡웹호스팅➡무료호스팅신청
```
![image](https://github.com/gogoringhye/basic/assets/145514996/24aaf237-08ad-470b-860e-f7c10e2d3235)
확장파일 설치해야 Visual Studio Code와 연결 가능
![image](https://github.com/gogoringhye/basic/assets/145514996/15fb6448-4058-49dc-b8bc-81d6be36bcd5)
f1➡ftp setting
![image](https://github.com/gogoringhye/basic/assets/145514996/cd997adf-797c-491e-bea4-13aa6b26946f)
![image](https://github.com/gogoringhye/basic/assets/145514996/562c5999-323e-4fb4-a2ae-d5369a30fd71)





![image](https://github.com/gogoringhye/basic/assets/145514996/4443e0ee-7a10-4911-8040-852f7f1dade2)

### CSS Script: Free JavaScript / CSS / CSS3


























































