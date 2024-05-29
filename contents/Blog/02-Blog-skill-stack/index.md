---
date: '2024-05-27'
title: '블로그 개발 - 기술 스택 선택하기'
category: 'blog'
tags: [ 'blog', 'project', 'gatsby', 'react', 'emotion.js', 'styled_component', 'typescript', 'graphql', 'netlify' ]
thumbnail: './thumbnail.png'
---

# 기술 스택

## 🤔 Gatsby와 함께 사용할 기술에 대한 고민

Gatsby를 블로그를 위한 정적 사이트 생성기로 도입하기로 하였으며, 그 외에 `어떤 언어를 사용할 지`, `스타일링은 어떻게 할 지`, `데이터 쿼리는 어떻게 할 지`, `배포는 어떻게 할 지`
기술 스택에 대해 각각의 특징을 알아보고 적용해보고자 한다.

<br/>

## 1. 사용할 언어

> ### TypeScript
> JavaScript 기반의 타입 명시 언어

사용할 프로그래밍 언어는 Gatsby가 React 기반의 프레임워크이기에 JavaScript와 TypeScript를 사용할 수 있는데 JavaScript의 경우, 자유도가 높은 언어이므로 문제가 있는 코드에서도
에러를 반환하지 않는 문제가 있다.

TypeScript를 사용함으로써 `타입 에러를 발견` 할 수 있고, 컴파일 시, 런타임 에러를 줄이고 `안정성`을 높일 수 있다.

많은 서비스 또는 JavaScript 유저들이 TypeScript를 도입하고 큰 커뮤니티를 형성하면서 TypeScript 사용은 이제 선택이 아닌 필수가 되어가는 것 같다.

<br/>
<br/>

## 2. 스타일링

> ### Emotion.js
> JavaScript 기반의 스타일링 라이브러리

스타일링을 하는 방법으로는 기본 `CSS`를 이용하는 방법, `Bootstrap`의 미리 정의된 클래스를 이용하는 방법, `Tailwind css`와 같은 인라인 스타일 프레임워크를 사용하는 방법 등 여러 방법이
있다.

개인적으로 모두 사용했던 경험에 비춰보았을 때, 느낀 사용성과 장단점은 다음과 같다.

<br/>

### 2-1. CSS

`CSS`는 클래스 명을 구분하기 위해 `긴 클래스 명`을 생성하게 되고, `중복된 클래스 명`을 사용하였는지 확인해야하기에 `유지보수에도 어려움`이 있었다.

```css
/*CSS 예시, 선택자가 점차 복잡해짐*/

section {
    /*...*/
}

section .class-1 {
    /*...*/
}

section .class-1 .button-1 {
    /*...*/
}
```

<br/>

### 2-2. Bootstrap

`Bootstrap`은 미리 만들어져서 제공되는 컴포넌트들을 바로 사용할 수 있기에 `빠른 개발 속도`의 장점이 있었으나, 컴포넌트들을 `커스텀하기 어려운 단점`이 있었다.

```html
<!--Bootstrap 캐로젤 컴포넌트 예시, 커스텀의 자유도가 낮음-->

<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

<br/>

### 2-3. Tailwind css

`Tailwind css`는 인라인으로 여러 클래스를 작성하여 스타일링을 자유롭게 할 수 있었으나(Bootstrap도 인라인 스타일링 할 수 있음), 인라인 스타일링의
경우, `클래스 명의 길이가 길어져 가독성이 떨어지는` 단점이 있었다.

```html
<!--Tailwind css 예시, 클래스가 스타일링 할 수록 길어짐-->

<div class="space-y-2 py-6">
  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
</div>
```

<br/>

### 2-4. Emotion.js

이러한 단점을 해결하기 위해 `Emotion.js`을 사용하게 되었다. Emotion.js는 JavaScript 기반으로 스타일링(CSS-in-JS)을 할 수 있는 라이브러리이며 Styled Component와
CSS 함수, 중첩 선택자 등 `다양한 스타일링 방식을 지원`한다. 또한 매우 `경량화`된 라이브러리로 번들 크기를 최소화하여 로딩 속도와 성능에 우수하다. 이러한 장점을 바탕으로 Emotion.js를 사용하게
되었다.

```js
// Emotion.js 예시

import styled from '@emotion/styled';

const Button = styled.button`
  color: turquoise;
  
  & > span {
    color: red;
  }
`;

render(
  <Button>This my button component.
    <span>click!</span>
  </Button>
);
```

<br/>
<br/>

## 3. 데이터 쿼리하기

> ### GraphQL
> API를 위한 데이터 쿼리 언어

Gatsby는 기본적으로 GraphQL을 사용하여 요청을 최적화하고 많은 정보 중 `필요한 데이터만 선별적`으로 쿼리할 수 있다.

개발자를 위해 GraphiQL과 같은 도구를 제공한다.

단점으로는 캐싱의 어려움과 높은 자유도에 따른 보안 문제가 발생할 수 있으나, 블로그와 같은 규모의 정적 사이트를 제작하는데는 괜찮다고 판단되었다.

<br/>
<br/>

## 4. 배포하기

> ### Netlify
> 클라우드 기반 배포 플랫폼

Netlify는 Gatsby와 같은 JAM stack 애플리케이션, 정적 사이트를 배포할 수 있는 클라우드 배포 플랫폼이다. (동적 웹사이트도 지원함)

코드를 GitHub에 푸쉬하면 `자동으로 빌드 및 배포`가 이루어진다. 또한 분산된 CDN(Content Delivery Network)을 통해 빠르고 `안정적인 배포`가 가능하다.

소규모 프로젝트 배포에 적합하다.


<br/>
<br/>

선택한 기술 스택들을 바탕으로 블로그 개발을 진행하였다.

---

## Sources

### JeonggonCho_Blog 템플릿 레포지토리

https://github.com/JeonggonCho/JeonggonCho_Blog