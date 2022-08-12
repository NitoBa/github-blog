import styled from 'styled-components'

export const Container = styled.div``

export const HeaderContainer = styled.div`
  height: 29rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme['base-profile']};

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: initial;
  }
`

export const Logo = styled.img`
  width: 14.8rem;
  height: 9.8rem;

  margin-top: -8rem;

  @media (max-width: 768px) {
    margin-top: -12rem;
  }
`

export const Effect1 = styled.img`
  width: 40.9rem;
  height: 18.8rem;
`
export const Effect2 = styled.img`
  width: 37.1rem;
  height: 23.6rem;

  @media (max-width: 768px) {
    display: none;
  }
`
