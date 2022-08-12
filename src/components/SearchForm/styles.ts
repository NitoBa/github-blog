import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 7.2rem;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      color: ${({ theme }) => theme['base-subtitle']};
      font-size: 1.8rem;
    }
    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  input {
    display: flex;
    height: 5rem;
    width: 100%;
    border-radius: 0.6rem;
    padding: 1.2rem 1.6rem;
    outline: none;
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    font-size: 1.6rem;
    color: ${({ theme }) => theme['base-text']};
    transition: all 0.2s;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.blue};
    }
  }
`

export const ErrorMessage = styled.small`
  color: ${({ theme }) => theme['base-subtitle']};
  font-size: 1.4rem;
  margin-top: 0.8rem;
  line-height: 160%;
`
