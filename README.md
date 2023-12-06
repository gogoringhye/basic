# 수업 사이트 정리

🖤 github 

🖤 visual studio code(* open with live server 작동 안될시 settings ➡ use ✔)

🖤 ChatGPT 

🖤 AnyDesk(원격 조종 사이트) 

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
🔎 filezill(강사님 자료 백업)

호스트: suuneeeee.dothome.co.kr 

사용자명: suuneeeee

비번: jung963852!

(주소 앞부분 suuneeeee.dothome.co.kr로 바꿔서 페이지 소스 확인하면 코드 확인 가능하다고 함)
```
### awwwards(다른 사람 시안)

### 크롬 번역기 다운
* chrome 웹스토어

### 한글 Lorem Ipsum
  


### gsap

### jQuery CDN


이것도 다운
![image](https://github.com/gogoringhye/basic/assets/145514996/4443e0ee-7a10-4911-8040-852f7f1dade2)



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
### codepen

### CSS Script: Free JavaScript / CSS / CSS3

### rgbKineticSlider(codepen demo에 있는 유형, github)
https://github.com/hmongouachon/rgbKineticSlider

### EntityCode(특수기호)

### Favicon & App Icon Generator(파비콘 사이즈 조절)

### Fancy Border Radius Generator

### netlify(호스팅 사이트)

### figma(시안, 일러와 유사함)



🖤 Figma

```
🔎 3D 사이트

🖤 spline

🖤 spline docs

🖤 dora

🖤 mixamo

🖤 sketchfab(glb로 저장) -- dora 또는 spline에서 import하여 사용가능 ▶ 도형 더블클릭 -- 3D editor 눌러야 편집 가능 ▶ 그룹 내부 클릭 -- 3D animations 파란색으로 체크하면 애니메이션 작동

🔎 ai 사이트

🖤 Luma AI

🖤 turbosquid

```
### BOXY SVG

### cutthecode

### awwwards
### gsap

### 폰트 변환(ex 하나카드 예제 폰트)사이트 web font genertator(add fonts-->convert-->download)

### threejs

### caniuse

- locomotive js
- cydstumpel




이미지 사이트 

-iconscout-->유료긴한데 개발자로 긁으니까 글어와짐
-프리픽












### https://codepen.io/Roxey/pen/oZrRZN


### 애니메이션을 이용할 수 있는 3가지 방법

1. aos.js --> https://michalsnik.github.io/aos/

### Wow.js(https://wowjs.uk/docs.html)와 animate.css(https://animate.style/) 두 라이브러리를 함께 사용

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

### jQuery Scrolla

```
1. jQuery Scrolla(https://maximzhurkin.github.io/jquery-scrolla/)에서 순서 확인
  
2. animate.css에서 css 긁어오기

3. code jquery cdn(min🐱‍🐉 가장 상단 부분에 위치해야함), scroll cdn, scrolla의 Custom settings 스트립크 넣어주기

* class="animate" --> 반드시 animate라는 클래스가 있어야 실행됨(사이트에 그렇게 명시되어 있음)

* data-animate="애니메이션" --> animate.css 사이트 들어가서 마음에 드는 효과의 이름을 " " 괄호 안에 넣어주면 됨.

* 굳이 css를 사용하지 않고도 style을 연결해서 style="animation-delay: 0.2s;" 이런식으로 애니메이션에 대한 효과를 줄 수 있음
```

학생 공유 폴더 링크
- https://mybox.naver.com/share/list?shareKey=jzPu-VE_ykbVkDtkzMCOutMhKRpOpNxb4y4A6QduGKAB

학생 평가 제출 링크 
- http://naver.me/G2xSXtfc




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
