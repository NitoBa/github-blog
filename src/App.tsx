import { ThemeProvider } from 'styled-components'
import { PostsProvider } from './contexts/posts'
import { Router } from './router'
import { GlobalStyles } from './styles/globals'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <PostsProvider>
        <Router />
      </PostsProvider>
    </ThemeProvider>
  )
}
