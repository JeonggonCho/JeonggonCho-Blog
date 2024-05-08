import { FC, Fragment } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

type PostPaginationProps = {
  currentPage: number
  numPages: number
  selectedTag: string
}

const PostPaginationWrapper = styled.div`
    font-size: ${({ theme }) => theme.sizes.web.medium};
    color: ${({ theme }) => theme.colors.font.link};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 56px;
`

const PostPaginationGoFirstLastBtn = styled(Link)`
    transition: all 0.1s linear;

    &:hover {
        color: ${({ theme }) => theme.colors.font.main};
    }
`

const PostPaginationPrevNextBtn = styled(Link)`
    transition: all 0.1s linear;

    &:hover {
        color: ${({ theme }) => theme.colors.font.main};
    }
`

const PostPaginationNumWrapper = styled.li<{ isCurrentPageNumber: boolean }>`
    list-style: none;
    transition: all 0.1s linear;
    color: ${(props) => props.isCurrentPageNumber ? props.theme.colors.font.main : "inherit"};

    &:hover {
        color: ${({ theme }) => theme.colors.font.main};
    }
`

const PostPagination: FC<PostPaginationProps> = ({
                                                   selectedTag = "",
                                                   currentPage,
                                                   numPages
                                                 }) => {

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "1" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  const pagesToShow = 5
  let startPage = 1
  let endPage = numPages

  if (numPages > pagesToShow) {
    if (currentPage <= Math.floor(pagesToShow / 2) + 1) {
      startPage = 1
      endPage = pagesToShow
    } else if (currentPage >= numPages - Math.floor(pagesToShow / 2)) {
      startPage = numPages - pagesToShow + 1
      endPage = numPages
    } else {
      startPage = currentPage - Math.floor(pagesToShow / 2)
      endPage = currentPage + Math.floor(pagesToShow / 2)
    }
  }

  return (
    <PostPaginationWrapper>
      {!isFirst && (
        <Fragment>
          <PostPaginationGoFirstLastBtn to={`/posts/?tag=${selectedTag}&page=1`}>〈〈</PostPaginationGoFirstLastBtn>
          <PostPaginationPrevNextBtn to={`/posts/?tag=${selectedTag}&page=${prevPage}`}>〈</PostPaginationPrevNextBtn>
        </Fragment>
      )}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
        const pageNumber = startPage + i
        const isCurrentPageNumber = currentPage === pageNumber
        return (
          <PostPaginationNumWrapper
            key={`pagination-number${pageNumber}`}
            isCurrentPageNumber={isCurrentPageNumber}
          >
            <Link to={`/posts/?tag=${selectedTag}&page=${pageNumber}`}>{pageNumber}</Link>
          </PostPaginationNumWrapper>
        )
      })}
      {!isLast && (
        <Fragment>
          <PostPaginationPrevNextBtn to={`/posts/?tag=${selectedTag}&page=${nextPage}`}>〉</PostPaginationPrevNextBtn>
          <PostPaginationGoFirstLastBtn
            to={`/posts/?tag=${selectedTag}&page=${numPages}`}>〉〉</PostPaginationGoFirstLastBtn>
        </Fragment>
      )}
    </PostPaginationWrapper>
  )
}

export default PostPagination
