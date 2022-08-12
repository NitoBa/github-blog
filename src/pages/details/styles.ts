import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 2rem;
  }
`

export const ContentPostContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: 2.4rem;
`
export const ContentPostText = styled.p`
  color: ${({ theme }) => theme['base-text']};
  font-size: 1.6rem;
  line-height: 160%;
  word-wrap: break-word;
  white-space: pre-line;
`
export const ContentPostCode = styled.div`
  padding: 1.6rem;
  border-radius: 2px;
  background-color: ${({ theme }) => theme['base-post']};
  code {
    font-size: 1.6rem;
    line-height: 160%;
    display: block;
    white-space: pre-line;
  }
`
