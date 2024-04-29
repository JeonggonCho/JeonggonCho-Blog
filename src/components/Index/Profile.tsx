import { FC } from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { Link } from "gatsby"

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
`

const ProfileName = styled.h2`
    font-size: ${({theme}) => theme.sizes.web.max};

    @media (max-width: 769px) {
        font-size: ${({theme}) => theme.sizes.mobile.largest};
    }
`

const ProfileRole = styled.p`
    font-size: ${({theme}) => theme.sizes.web.large};
    color: ${({theme}) => theme.lightModeColors.font.darkGray};

    @media (max-width: 769px) {
        font-size: ${({theme}) => theme.sizes.mobile.medium};
    }
`

const ProfileIntroduction = styled.p`
    font-size: ${({theme}) => theme.sizes.web.smallest};
    color: ${({theme}) => theme.lightModeColors.font.darkGray};

    @media (max-width: 769px) {
        font-size: ${({theme}) => theme.sizes.mobile.smallest};
    }
`

const ProfileAboutLink = styled(Link)`
    font-size: ${({theme}) => theme.sizes.web.smallest};
    color: ${({theme}) => theme.lightModeColors.font.gray};
    width: fit-content;

    @media (max-width: 769px) {
        font-size: ${({theme}) => theme.sizes.mobile.smallest};
    }
`

const profile = css`
    width: 82px;
    height: 82px;
    border-radius: 12px;

    @media (max-width: 769px) {
        width: 80px;
        height: 80px;
        border-radius: 8px;
    }
`

const profileCharacter = css`
  @media (max-width: 650px) {
      display: none;
  }
`

const Profile:FC = () => {
  return (
    <ProfileWrapper>
      <ProfileInfo>
        <ProfileImageTitle>
          <StaticImage src="../../images/profile-img.jpg" alt="profile" css={profile}/>
          <ProfileTitle>
            <ProfileName>조정곤</ProfileName>
            <ProfileRole>Frontend Developer</ProfileRole>
          </ProfileTitle>
        </ProfileImageTitle>

        <ProfileIntroduction>
          안녕하세요!<br/>
          많은 사람들이 사용할 수 있는 웹 서비스를 만들기 위해 노력합니다.<br/>
          프론트엔드 기술을 익히며 Node.js 기반의 백엔드 지식도 함양하고 있습니다.
        </ProfileIntroduction>

        <ProfileAboutLink to="/about/">More about me →</ProfileAboutLink>
      </ProfileInfo>

      <StaticImage src="../../images/profile-character.png" alt="profile-character" css={profileCharacter}/>

    </ProfileWrapper>
  )
}

export default Profile