import styled, { css } from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const PostListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;
  margin: 4.8rem 0;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

interface EmptyPostsProps {
  message: string
}

export const EmptyPosts = styled.div<EmptyPostsProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20rem;
  width: 100%;
  background-color: ${({ theme }) => theme['base-post']};
  border-radius: 0.8rem;
  color: ${({ theme }) => theme['base-subtitle']};
  font-size: 2rem;
  position: relative;

  ${({ message }) =>
    message &&
    css`
      &::before {
        position: absolute;
        content: '${message}';
      }
    `}
`
