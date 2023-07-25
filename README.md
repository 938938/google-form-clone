# 구글 폼 클론

> 구글 폼을 클론하여 제작한 사이트입니다.<br>

- 사용 스택<br>
  ReactJS / TypeScript / Redux-toolkit / module.css / react-icons

<br>


![기본화면](https://velog.velcdn.com/images/938938/post/f5255601-8af6-429b-945a-527db4651eef/image.png)
[기본 화면]<br>
설문지를 제작할 수 있습니다.<br>
* 현재 구현된 기능
  - 제목과 설명의 수정
  - 질문의 타입 설정 (단문/장문/객관식/체크박스/드롭박스)
  - 질문 추가 / 복제 / 삭제
  - 답변 추가 / 삭제
  - 필수 요소 체크
  - 미리보기

<br>

![미리보기화면](https://velog.velcdn.com/images/938938/post/dab7b451-869e-4332-8a28-70de181bd501/image.png)
[미리보기 화면]<br>
제작한 설문지를 확인할 수 있습니다.<br>
* 현재 구현된 기능
  - 양식 지우기(작성한 답변 모두 지우기)
  - 제출
  - 필수 요소 체크

<br>

![제출 후 화면](https://velog.velcdn.com/images/938938/post/64b4e50b-b3b5-47cf-9bd6-d4d18cb08368/image.png)
[제출 후 결과 보기 화면]<br>
미리보기 페이지에서 작성한 질문과 응답을 확인할 수 있습니다.


## 사용방법

1. 먼저 터미널에서 npm install 을 실행, 모듈을 설치해주세요.
2. npm start 를 하면 실행됩니다.
3. 설문지의 제목 및 질문과 옵션을 작성해주세요.
4. 오른쪽 눈 아이콘을 클릭하면 미리보기를 할 수 있습니다.
5. 미리보기 화면에서 감은 눈 아이콘을 클릭하면 폼 작성 페이지로 돌아올 수 있습니다.

```
파일 구조
/src
├── /components
├──── /common
├──── /Preview    # 미리보기 페이지 관련 컴포넌트
├──── /Question   # 설문 페이지 관련 컴포넌트
├── /model        # type 파일 관련 폴더
├── /pages        # 페이지와 레이아웃 관련 폴더
├── /store        # redux-toolkit 관련 폴더
├ App.js
├ index.js
└ router.ts
```
