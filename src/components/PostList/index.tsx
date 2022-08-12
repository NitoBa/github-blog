import { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../contexts/posts'
import { CardPost } from '../CardPost'
import { Loading } from '../Loading'
import { Container, EmptyPosts, PostListContainer } from './styles'

export function PostList() {
  const posts = useContextSelector(PostsContext, (c) => c.posts)
  const loading = useContextSelector(PostsContext, (c) => c.loading)
  const getInitialPosts = useContextSelector(
    PostsContext,
    (c) => c.getInitialPosts,
  )

  useEffect(() => {
    getInitialPosts()
  }, [])

  return (
    <Container>
      {loading && <Loading />}

      {!loading && posts?.length === 0 && (
        <EmptyPosts message="Nenhum post encontrado" />
      )}

      {!loading && posts?.length > 0 && (
        <PostListContainer>
          {posts.map((post) => (
            <CardPost
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              createdAt={post.createdAt}
            />
          ))}
        </PostListContainer>
      )}
    </Container>
  )
}
