import hljs from 'highlight.js/lib/core'
import { useEffect, useState } from 'react'
import { DetailHeader } from '../../components/DetailHeader'
import 'highlight.js/styles/github.css'
import javascript from 'highlight.js/lib/languages/javascript'
import markdown from 'highlight.js/lib/languages/markdown'

import {
  Container,
  ContentPostCode,
  ContentPostContainer,
  ContentPostText,
} from './styles'
import { usePostDetail } from '../../hooks/usePostDetail'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/Loading'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('markdown', markdown)

export function Details() {
  const { id } = useParams()
  const { loading, post, getPostDetail } = usePostDetail()
  const [code, setCode] = useState('')

  function extractCodeFromDescription(description: string) {
    const regex = /^```(?:js|javascript|dart|python|ts)\n([\s\S]*?)```$/gm
    const newRe = new RegExp(regex)
    const match = newRe.exec(description)
    if (match) {
      console.log(match[1])
      setCode(match[0])
      console.log(match[0])
      return match[1]
    }
    return ''
  }

  useEffect(() => {
    if (id) getPostDetail(+id)
  }, [])

  useEffect(() => {
    if (post) {
      extractCodeFromDescription(post.description)
    }
  }, [post])

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
                {/* <ContentPostText>
                  {post?.description.replaceAll(
                    /^```(?:js|javascript|dart|python|ts)\n([\s\S]*?)```$/g,
                    '',
                  )}
                </ContentPostText> */}
                <ContentPostCode
                  dangerouslySetInnerHTML={{
                    __html: hljs.highlight(code, {
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
