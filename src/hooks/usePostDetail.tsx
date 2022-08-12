import { useCallback, useState } from 'react'
import { api } from '../lib/api'
import { Credentials } from '../utils/credentails'

export type PostDetailData = {
  id: number
  title: string
  linkToGithub: string
  description: string
  comments: number
  ownerUsername: string
  createdAt: Date
}

export function usePostDetail() {
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState<PostDetailData>()
  const getPostDetail = useCallback(async (id: number) => {
    try {
      setLoading(true)
      const response = await api.get(
        `repos/${Credentials.username}/${Credentials.repoName}/issues/${id}`,
      )

      setPost({
        id: response.data.number,
        title: response.data.title,
        description: response.data.body,
        linkToGithub: response.data.html_url,
        comments: response.data.comments,
        ownerUsername: response.data.user.login,
        createdAt: new Date(response.data.created_at),
      })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    post,
    getPostDetail,
    loading,
  }
}
