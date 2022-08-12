import { FaBuilding, FaGithub, FaExternalLinkAlt, FaUser } from 'react-icons/fa'
import { useUserGithubProfile } from '../../hooks/useUserGithubProfile'
import { Loading } from '../Loading'

import {
  Container,
  ContainerContent,
  ProfileAvatar,
  ProfileInfos,
  ProfileStatusContainer,
  Status,
  GithubLink,
} from './styles'

export function ProfileHeader() {
  const { loading, userGithubProfile } = useUserGithubProfile('NitoBa')

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ProfileAvatar src={userGithubProfile?.avatar_url} />
          <ContainerContent>
            <ProfileInfos>
              <h1>{userGithubProfile?.name}</h1>
              <p>{userGithubProfile?.bio}</p>
            </ProfileInfos>
            <ProfileStatusContainer>
              <Status>
                <FaGithub />
                <span>{userGithubProfile?.login}</span>
              </Status>
              {userGithubProfile?.company && (
                <Status>
                  <FaBuilding />
                  <span>{userGithubProfile.company}</span>
                </Status>
              )}
              <Status>
                <FaUser />
                <span>{userGithubProfile?.followers} seguidores</span>
              </Status>
            </ProfileStatusContainer>
            <GithubLink>
              <a
                href={`https://github.com/${userGithubProfile?.login}`}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <FaExternalLinkAlt />
            </GithubLink>
          </ContainerContent>
        </>
      )}
    </Container>
  )
}
