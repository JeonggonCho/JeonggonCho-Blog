import { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import RecentItem from "components/Index/RecentItem"

interface RecentItemsProps {
  title: string;
  to: string;
}

const RecentItemsWrapper = styled.div`
    width: 100%;
`

const RecentItemsTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`

const RecentItemsTitle = styled.h3`
    font-size: ${({ theme }) => theme.sizes.web.large};

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.large};
    }
`

const RecentItemsMoreLink = styled(Link)`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.lightModeColors.font.gray};

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.smallest};
    }
`

const RecentItemsPostsWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    overflow: hidden;
`

const RecentItems: FC<RecentItemsProps> = ({ title, to }) => {

  const dummyPosts = [
    {
      id: 0,
      title: "Vite를 배우는 이유",
      image: "https://ko.vitejs.dev/og-image.png",
      date: "2024.04.25"
    },
    {
      id: 1,
      title: "Git으로 버전 관리",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLjaaNhM3u6FysW7HM-Yn6drCzGmMg8QHV8nAlSONuA&s",
      date: "2024.04.25"
    },
    {
      id: 2,
      title: "TypeScript 소개",
      image: "https://img-c.udemycdn.com/course/750x422/3591648_7284_6.jpg",
      date: "2024.04.25"
    },
    {
      id: 3,
      title: "Express 백엔드",
      image: "https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA",
      date: "2024.04.25"
    }
  ]

  return (
    <RecentItemsWrapper>
      <RecentItemsTitleWrapper>
        <RecentItemsTitle>{title}</RecentItemsTitle>
        <RecentItemsMoreLink to={to}>More →</RecentItemsMoreLink>
      </RecentItemsTitleWrapper>

      <RecentItemsPostsWrapper>
        {dummyPosts.map((post) => (
          <RecentItem key={post.id} title={post.title} image={post.image} date={post.date} />
        ))}
      </RecentItemsPostsWrapper>
    </RecentItemsWrapper>
  )
}

export default RecentItems