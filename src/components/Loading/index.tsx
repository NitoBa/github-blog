import { Container } from './styles'

export function Loading() {
  return (
    <Container className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  )
}
