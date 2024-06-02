---
date: '2024-02-19'
title: 'Next.js 에러'
category: 'nextjs'
tags: [ 'nextjs', 'framework', 'react', 'error' ]
thumbnail: './thumbnail.png'
---

# Error Handling

## 1. 에러 발생

- 인위적으로 fetch하는 컴포넌트에서 fetch하지 않고 에러 발생시키기

```tsx
// app/components/movie-videos.tsx

async function getVideos(id: string) {
  await new Promise((response) => setTimeout(response, 3000));
  // 에러 보내기
  throw new Error('something broke...')
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>
}
```

<br>

<p align="center">
  <img src="Nextjs_throw_error.gif" alt="에러 발생"><br/>
  <span>에러 발생 시키기</span>
</p>

<br>
<br>

## 2. 에러 처리 - error.tsx

- 에러 발생 시, 사용자가 다른 페이지로 돌아갈 수 있도록 처리하기
- 에러 발생 페이지 폴더에 `error.tsx` 파일 생성하기

```tsx
// app/(movies)/movies/[id]/error.tsx

"use client";

export default function Error() {
  return <h1>lol something broke...</h1>;
}
```

- error.tsx 파일의 컴포넌트 이름은 아무거나 상관없으나, 파일 명은 무조건 error.tsx여야 함
- error.tsx 파일에는 반드시 `use client`가 필요함
    - 없을 경우, 에러 발생
- 이렇게 하면 에러 발생 시, 기존 페이지 대신 error 컴포넌트를 보여줌

<br>

<p align="center">
  <img src="Nextjs_error_component.gif" alt="error 컴포넌트 출력"><br/>
  <span>error 발생 시, error 컴포넌트 출력</span>
</p>

[//]: # (---)

[//]: # ()

[//]: # (## Source)

[//]: # ()

[//]: # (- [<>]&#40;<>&#41;)

