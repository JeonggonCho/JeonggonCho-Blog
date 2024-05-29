import { FC } from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 50px;
`

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ProfileImageTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const ProfileTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const ProfileName = styled.h2`
    font-size: ${({ theme }) => theme.sizes.web.largest};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.font.main};

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.largest};
    }
`

const ProfileRole = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.medium};
    color: ${({ theme }) => theme.colors.font.link};

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.medium};
    }
`

const ProfileIntroduction = styled.p`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.colors.font.sub};
    line-height: 24px;
    word-break: keep-all;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.small};
    }
`

const BreakPoint = styled.br`
    @media (max-width: 405px) {
        display: none;
    }
`

const ProfileAboutLink = styled(Link)`
    font-size: ${({ theme }) => theme.sizes.web.smallest};
    color: ${({ theme }) => theme.colors.font.link};
    width: fit-content;

    @media (max-width: 769px) {
        font-size: ${({ theme }) => theme.sizes.mobile.small};
    }

    &:hover {
        color: ${({ theme }) => theme.colors.font.main};
    }
`

const profileStyle = css`
    width: 82px;
    height: 82px;
    border-radius: 12px;

    @media (max-width: 769px) {
        width: 80px;
        height: 80px;
        border-radius: 8px;
    }
`

const profileCharacterStyle = css`
    @media (max-width: 650px) {
        display: none;
    }
`

const Profile: FC = () => {
  return (
    <ProfileWrapper>
      <ProfileInfo>
        <ProfileImageTitle>
          <StaticImage
            src={'../../../static/profile-img.jpg'}
            alt="profile"
            css={profileStyle}
          />
          <ProfileTitle>
            <ProfileName>조정곤</ProfileName>
            <ProfileRole>Frontend Developer</ProfileRole>
          </ProfileTitle>
        </ProfileImageTitle>

        <ProfileIntroduction>
          안녕하세요! 주니어 프론트엔드 개발자입니다.<br />
          <b>예술</b>을 좋아하며 사용자 중심의 <b>웹 서비스</b>를 만들기 위해 노력합니다. <BreakPoint />
          다양한 프론트엔드 기술을 익히며 Node.js 기반의 백엔드 지식도 함양하고 있습니다.
        </ProfileIntroduction>

        <ProfileAboutLink to="/about/">More about me →</ProfileAboutLink>
      </ProfileInfo>

      <StaticImage
        src={'../../../static/profile-character.png'}
        alt="profile-character"
        css={profileCharacterStyle}
      />

    </ProfileWrapper>
  )
}

export default Profile