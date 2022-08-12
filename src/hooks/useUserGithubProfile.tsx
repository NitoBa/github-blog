import { useCallback, useEffect, useState } from 'react'
import { api } from '../lib/api'

type UserGithubProfileData = {
  login: string
  avatar_url: string
  name: string
  company: string
  followers: number
  bio: string
}

export function useUserGithubProfile(username: string) {
  const [userGithubProfile, setUserGithubProfile] =
    useState<UserGithubProfileData | null>(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getUserGithubProfile = useCallback(async (username: string) => {
    try {
      setLoading(true)
      const response = await api.get(`users/${username}`)
      setUserGithubProfile(response.data)
    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getUserGithubProfile(username)
  }, [getUserGithubProfile, username])

  return {
    userGithubProfile,
    loading,
    error,
  }
}
