import { FC } from "react"
import styled from "@emotion/styled"
import PostCard from "components/Blog/PostCard"

const PostsWrapper = styled.div`
    flex-grow: 1;
`

const PostsTitle = styled.h3`
    font-size: ${({ theme }) => theme.sizes.web.large};
    color: ${({ theme }) => theme.lightModeColors.font.darkGray};
    margin-bottom: 28px;

    @media (max-width: 769px) {
        display: none;
    }
`

const PostsPostCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 769px) {
        gap: 24px;
    }
`

const Posts: FC = () => {

  const dummyPosts = [
    {
      title: "Git 소개",
      date: "2024.04.25",
      tags: ["Git", "버전관리", "Github", "version", "programming", "programming", "programming"],
      image: "https://t1.daumcdn.net/cfile/tistory/995D42385B88E25E06"
    },
    {
      title: "JavaScript 소개",
      date: "2024.04.25",
      tags: ["JavaScript", "언어", "프론트엔드", "클라이언트", "programming", "programming", "programming"],
      image: "https://ems.elancer.co.kr/99_upload/Append/T_Blog/editor/2023080711282873856.jpg"
    },
    {
      title: "TypeScript 소개",
      date: "2024.04.25",
      tags: ["TypeScript", "언어", "타입강제", "정적언어", "programming", "programming", "programming"],
      image: "https://velog.velcdn.com/images/kwak1539/post/e9dac27e-7297-438b-a2c0-1d3062c22047/image.png"
    },
    {
      title: "React 소개",
      date: "2024.04.25",
      tags: ["React", "라이브러리", "프론트엔드", "점유율1위", "programming", "programming", "programming"],
      image: "https://miro.medium.com/v2/resize:fit:1400/1*omjhQA7wTEfAAkKjwzRfsA.png"
    }
  ]

  return (
    <PostsWrapper>
      <PostsTitle>All (52)</PostsTitle>

      <PostsPostCardWrapper>
        {dummyPosts.map((el) => (
          <PostCard title={el.title} date={el.date} tags={el.tags} image={el.image} />
        ))}
      </PostsPostCardWrapper>
    </PostsWrapper>
  )
}

export default Posts