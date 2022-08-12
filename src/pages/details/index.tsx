import hljs from 'highlight.js/lib/core'
import { useEffect } from 'react'
import { DetailHeader } from '../../components/DetailHeader'
import 'highlight.js/styles/github.css'
import javascript from 'highlight.js/lib/languages/javascript'
import markdown from 'highlight.js/lib/languages/markdown'

import { Container, ContentPostContainer, ContentPostText } from './styles'
import { usePostDetail } from '../../hooks/usePostDetail'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/Loading'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('markdown', markdown)

export function Details() {
  const { id } = useParams()
  const { loading, post, getPostDetail } = usePostDetail()

  useEffect(() => {
    if (id) getPostDetail(+id)
  }, [])
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          {post && (
            <>
              <DetailHeader
                title={post?.title}
                linkToGithub={post?.linkToGithub}
                comments={post?.comments}
                ownerUsername={post?.ownerUsername}
                createdAt={post?.createdAt}
              />
              <ContentPostContainer>
                <ContentPostText
                  dangerouslySetInnerHTML={{
                    __html: hljs.highlight(post.description, {
                      language: 'markdown',
                    }).value,
                  }}
                />
              </ContentPostContainer>
            </>
          )}
        </>
      )}
    </Container>
  )
}
