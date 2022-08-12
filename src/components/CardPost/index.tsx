import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate } from 'react-router-dom'
import { Container } from './styled'

type PostData = {
  id: number
  title: string
  description: string
  createdAt: Date
}

export function CardPost({ id, title, description, createdAt }: PostData) {
  const navigate = useNavigate()
  const handleNavigateToDetail = () => {
    navigate(`/detail/${id}`)
  }

  const dateFormatted = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <Container onClick={handleNavigateToDetail}>
      <header>
        <h1>{title}</h1>
        <time
          title={createdAt.toLocaleDateString('pt-BR')}
          dateTime={createdAt.toISOString()}
        >
          {dateFormatted}
        </time>
      </header>
      <p>{description}</p>
    </Container>
  )
}
