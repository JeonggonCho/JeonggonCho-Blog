---
date: '2024-06-01'
title: '블로그 개발 - URL 파싱'
category: 'blog'
tags: [ 'blog', 'project', 'gatsby', 'url', 'parse' ]
thumbnail: './thumbnail.png'
---

# 카테고리, 태그 등 URL의 데이터 파싱하기

앞서, 탭 기능을 구현하면서, 아래와 같이 URL 경로를 설정하였다.

<br/>

| 탭      | URL                          |
|--------|------------------------------|
| 포스트별   | /posts/                      |
| 포스트 태그 | /posts/?tag={태그}             |
| 카테고리별  | /categories/                 |
| 카테고리   | /categories/?category={카테고리} |

여기서 태그 검색 페이지와 카테고리 페이지로 이동 시, 경로 뒤에 `?키=값` 형태의 `Query String`을 사용하기로 하였다.

그렇다면 URL의 Query String을 어떻게 가져올 수 있는지 알아보자

<br/>

## ⛏️ URL에서 Query String 가져오기

### 1. query-string 라이브러리 설치

```bash
$ yarn add query-string
```

<br/>

### 2. Props 받아오기

Query 정보는 Gatsby에서 페이지를 렌더링할 때, 자동으로 제공하는 `location` 객체 내의 `search` 프로퍼티에 들어있다. 이 정보를 props로 가져온다.

```tsx
// Query 정보 props 전달하기 예시

// TypeScript를 활용하기에 타입 지정
type categoryPageProps = {
  location: {
    search: string
  }
}

// Gatsby가 전달한 location 객체에서 search 속성을 추출
const categoryPage: FC<categoryPageProps> = ({
                                               location: { search }
                                             }) => {
// ...
```

<br/>

### 3. 파싱하기

queryString의 `parse 함수`는 쿼리 스트링을 파싱하여 `ParsedQuery<string>` 타입의 객체를 반환한다.

만약 URL이 `/categories?page=1&category=git`이라면, `search`는 `?page=1&category=git`가 된다.

최종적으로 `queryString.parse(search)` 함수는 쿼리 스트링을 파싱하여 `{ page: '1', category: 'git' }`와 같은 객체를 반환한다.

```tsx
// query string 라이브러리의 parse 이용 예제

// ...

const parsed: ParsedQuery<string> = queryString.parse(search)

// 해당 객체에 category 키의 값의 타입이 문자열이 아니거나 아예 category 키가 없는 경우, 빈문자열 반환, 그렇지 않으면 값을 반환
const selectedCategory: string = typeof parsed.category !== "string" || !parsed.category ? "" : parsed.category

// ...
```

<br/>

### 4. 해당 정보로 포스트를 필터링하고 페이지 렌더링하기

```tsx
// 필터링 및 렌더링 예시

// ...

// 선택된 카테고리에 해당하는 포스트들을 필터링
const selectedEdges = useMemo(() => (
  edges.filter(({ node: { frontmatter: { category } } }) => (
    category === selectedCategory
  ))
), [selectedCategory])

// 페이지를 렌더링
return (
  <BlogTemplate
    title={title}
    description={description}
    url={siteUrl}
    image={publicURL}
  >
    <CategoryWrapper>
      <CategoryItem
        category={selectedCategory}
        active={false}
        position={"sticky"}
      />
      <PostCards edges={selectedEdges} />
    </CategoryWrapper>
  </BlogTemplate>
)
```

<br/>

### 5. Query String 예시 전체 코드

```tsx
// 예시

import { FC, useMemo } from "react";
import BlogTemplate from "../templates/BlogTemplate";
import CategoryItem from "components/Blog/Category/CategoryItem";
import PostCards from "components/Blog/Post/PostCards";
import queryString, { ParsedQuery } from "query-string";

type categoryPageProps = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: PostType[]
    }
    file: {
      publicURL: string
    }
  }
}

// 1. props로 search 가져오기
const categoryPage: FC<categoryPageProps> = ({
                                               location: { search },
                                               data: {
                                                 site: {
                                                   siteMetadata: { title, description, siteUrl }
                                                 },
                                                 allMarkdownRemark: { edges },
                                                 file: { publicURL }
                                               }
                                             }) => {

  // 2. parse 함수로 파싱 후, 객체 반환
  const parsed: ParsedQuery<string> = queryString.parse(search)

  // 3. 해당 객체에서 카테고리 값 가져오기
  const selectedCategory: string = typeof parsed.category !== "string" || !parsed.category ? "" : parsed.category

  // 4. 필터링하기
  const selectedEdges = useMemo(() => (
    edges.filter(({ node: { frontmatter: { category } } }) => (
      category === selectedCategory
    ))
  ), [selectedCategory])

  // 5. 페이지 렌더링
  return (
    <BlogTemplate
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <CategoryWrapper>
        <CategoryItem
          category={selectedCategory}
          active={false}
          position={"sticky"}
        />

        <PostCards edges={selectedEdges} />
      </CategoryWrapper>
    </BlogTemplate>
  );
};

export default categoryPage;
```

<br/>
<br/>

---

## Sources

### - JeonggonCho_Blog 템플릿 레포지토리

https://github.com/JeonggonCho/JeonggonCho_Blog