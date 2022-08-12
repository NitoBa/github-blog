import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/api'
import { Credentials } from '../utils/credentails'

type PostData = {
  id: number
  title: string
  description: string
  createdAt: Date
}

type PostsContextData = {
  loading: boolean
  posts: PostData[]
  getInitialPosts: () => Promise<void>
  searchPosts: (search: string) => Promise<void>
}

export const PostsContext = createContext<PostsContextData>(
  {} as PostsContextData,
)

export function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<PostData[]>([])
  const [loading, setLoading] = useState(false)

  const getInitialPosts = useCallback(async () => {
    try {
      setLoading(true)
      const postsArray: PostData[] = []
      const response = await api.get(
        `repos/${Credentials.username}/${Credentials.repoName}/issues`,
      )

      for (const issue of response.data) {
        postsArray.push({
          id: issue.number,
          title: issue.title,
          description: issue.body,
          createdAt: new Date(issue.created_at),
        })
      }

      setPosts(postsArray)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const searchPosts = useCallback(async (search: string) => {
    try {
      setLoading(true)
      const postsArray: PostData[] = []
      const response = await api.get(
        `search/issues?q=${search}repo:${Credentials.username}/${Credentials.repoName}`,
      )

      for (const issue of response.data.items) {
        if (issue.title.includes(search)) {
          postsArray.push({
            id: issue.number,
            title: issue.title,
            description: issue.body,
            createdAt: new Date(issue.created_at),
          })
        }
      }

      setPosts(postsArray)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <PostsContext.Provider
      value={{ getInitialPosts, posts, loading, searchPosts }}
    >
      {children}
    </PostsContext.Provider>
  )
}
