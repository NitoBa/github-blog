import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 26rem;
  border-radius: 1rem;
  padding: 3.2rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme['base-post']};
  transition: all 0.2s;
  overflow: hidden;
  gap: 2rem;

  &:hover {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme['base-label']} inset;
  }

  @media (max-width: 768px) {
    height: auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: 0.4rem;

    h1 {
      color: ${({ theme }) => theme['base-title']};
      font-size: 2rem;
      line-height: 160%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    time {
      color: ${({ theme }) => theme['base-span']};
      font-size: 1.4rem;
      flex-grow: 0;
      flex-shrink: 0;
      line-height: 160%;
    }
  }

  p {
    color: ${({ theme }) => theme['base-text']};
    font-size: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    line-height: 160%;
  }
`
