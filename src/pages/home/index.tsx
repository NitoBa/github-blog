import { PostList } from '../../components/PostList'
import { ProfileHeader } from '../../components/ProfileHeader'
import { SearchForm } from '../../components/SearchForm'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <ProfileHeader />
      <SearchForm />
      <PostList />
    </Container>
  )
}
