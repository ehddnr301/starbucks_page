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
