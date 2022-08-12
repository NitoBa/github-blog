import styled from 'styled-components'

export const Container = styled.header`
  height: 21.2rem;
  width: 100%;
  margin-top: calc(-18rem / 2);
  background-color: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 2.8rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  padding: 4rem 3.2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`

export const ProfileAvatar = styled.img`
  height: 14.8rem;
  width: 14.8rem;
  border-radius: 0.8rem;
`
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  h1 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 2.4rem;
    line-height: 130%;
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  p {
    color: ${({ theme }) => theme['base-text']};
    font-size: 1.6rem;
    line-height: 160%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

export const ProfileStatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    height: 1.8rem;
    width: 1.8rem;
    color: ${({ theme }) => theme['base-label']};
    flex-shrink: 0;
  }

  span {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.6rem;
    flex-shrink: 0;
  }
`

export const GithubLink = styled.button`
  position: absolute;
  top: 3.2rem;
  right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.blue};
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  line-height: 0;

  &::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid ${({ theme }) => theme.blue};
    width: 100%;
    transform: translateX(-50%);
    left: 50%;
    bottom: -0.5rem;
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`
