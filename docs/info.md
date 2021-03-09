# Info

## 1

### favicon

- root 경로에 favicon.ico 존재시 자동으로 favicon 등록
- `<link rel="icon" href="./favicon.png" />`

### reset

- `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">`

## 2

### 오픈 그래프

- 웹페이지가 소셜 미디어(페이스북, 카카오톡) 등으로 공유될 때 우선적으로 활용되는 정보를 지정합니다.
- 링크공유하면 나타나는 카드? 미리보기? 를 말함.
- https://ogp.me/
- description 은 너무길면 카톡에서는 악성페이지로 판단할 가능성이 있다고 합니다.

## 3

### font

- html 파일에 링크형식으로 넣는것이 더 선호됨.

## 4

### icon

- material.io
- 링크 넣은 후 적절한 아이콘 태그 찾아서 사용
- class 는 material-icons여야함
- font size로 사이즈를 조절

## 5

### header

- header tag : 기능적인 부분은 없지만 헤더영역이라는 의미

### img - alt

- 대체 텍스트를 지정해 이미지가 제대로 나오지 않을경우나 크롤링봇이 엑세스 할떄를 고려

### font

- 색 : 완전한 검정보다는 어두운 회색이 디자인적으로는 괜찮다고 합니다. #333
- line-height : 통상적으로 1.4가 불편함이 없다고 합니다. (font별로 다릅니다.)

### margin

- width 설정후
- margin 0 auto 주면 중앙정렬

### 이미지 태그

- `<img/>` : 인라인 요소, 마진x, 패딩x, width:x, height:x
- 글자(인라인)는 baseline이 존재 => img태그도 inline요소이기때문에 baseline이 존재
- 그렇기 때문에 밑에 마진이나 패딩을 주지 않았음에도 공간이 있음
- img 에 display:block을 주면 baseline이 사라져서 공간이 사라지게 됩니다.

### 상하 중앙정렬

- position absolute
- top: 0;, bottom: 0;, margin: auto;
- display flex만 사용해왔었는데 flex를 못쓰는 상황이 온다면 유용할 방법일듯 합니다.

## 6

### a:href

- 임시적으로 넣을때
  - `#` 넣기 - 혹시 어떤 동작이 될수도 있습니다.
  - `javascript:void(0)` 을 넣기 - 권장됨 : 정말로 아무동작도 안함

### 가상요소 선택자

- `::before` : 내부의 앞쪽에 어떤 내용을 추가 content라는 속성으로 그 요소를 지정가능
- before : 인라인 요소

### position

- fixed, absolute 를 주게되면 block 요소로 변함

### transition

- 기본으로 all, 변화하는것에대해 속성을 줌

### js연결

- script 태그의 `defer` 속성을 주면 html을 다 보고 난 뒤에 불러와짐

## 7

- just css

## 8

### border radius

- border-radius : 왼쪽상단 오른쪽상단 오른쪽하단 왼쪽하단;

### dropdown with max-height

```
header .main-menu .item .item__contents {
  max-height: 0;
  transition: max-height 0.5s ease-out;
  overflow: hidden;
}
header .main-menu .item:hover .item__contents {
  max-height: 500px;
  transition: max-height 0.35s ease-in;
}
```

- 강의내용에는 나오지 않았지만 스타벅스 웹사이트에 맞게 임의로 추가하였습니다.
- max-height가 변하는것을 통해 구현하였고 overflow hidden으로 평소에는 보이지 않게 조절하였습니다.

### 재활용

- inner 를 재활용해서 중앙정렬되게 하는것이 굉장히 공부가 되었습니다.

## 9 & 10

- just css & BEM

## 11

### 이미지 border-radius

- img 태그에 border-radius 를 주면 태그만 깎여나가기 때문에
- overflow hidden 을 함께 줌으로써 이미지도 함께 둥근 모서리를 가질수 있도록 한다.

### position

- position absolute 나 fixed같은 경우 width를 최소한만 사용하도록 바뀐다.
  - 보통 block요소는 가로가 100퍼
- 그래서 width 100%로 해결해준다.

## 12

### lodash

- `_.throttle` 을 사용해서 이벤트 리스너가 너무 자주 동작하지 않도록 하여줍니다.

### gsap

- 애니메이션이 자바스크립트로 쉽게 만듬
- `gsap.to(요소, 지속시간, 옵션)`

## 13 & 14 & 15 & 16

- just css and js

## 17

### swiperjs

```
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
```

- 직관적이고 쉽게 구현이가능하다

## 18

### calc

- css애서 clac(100% -50px) 등으로 width를 지정해줄수있다.

### 정중앙에 위치시키기

```
left: 50%;
margin-left: -1238.5px;
```

- 절반만큼 밀고
- 절반만큼 당겨오고

## 19 & 20

### pagination & navigation

- use swiperjs

## 21

### classList

- add, remove로 클래스 추가삭제를 함으로써 css로 제어

## 22

- just css

## 23

### width & padding-top

- 부모요소에 width:200px
- 자식요소에
  - height:0;
  - padding-top:50%;
- 이렇게하면 height가 부모,자식 요소에 둘다 없으니까 나타나지않아야 한다고 생각되지만
- height가 100px로 만들어진다.
- 그렇다면 16:9 같은 영상비율을 만들려면 width를 부모요소에 지정해주고
- padding-top:56.25%; 로 적어주면 된다.

## 24

### Youtube Iframe

- 유튜브 영상 사용하는 방법

## 25

### gsap easing

- 애니메이션을 부드럽게 하길 원한다면 잘 살펴보고 설정할 것

### 반복 animation

- gsap을 사용하여 구현되었습니다.

## 26

### background-attachment

- fixed 를 주면 스크롤에따라 너비는 변하지않지만 background 다른부분이 보임

### flex

- flex-direction column으로 주로 세로정렬을 사용했는데
- 꼭 필요한 경우가 아니면 width 제한하고 flex-wrap : wrap도 괜찮을듯!
