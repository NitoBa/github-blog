import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  ContainerContent,
  ProfileStatusContainer,
  Status,
  GithubLink,
} from './styles'

type Props = {
  title: string
  linkToGithub: string
  comments: number
  ownerUsername: string
  createdAt: Date
}

export function DetailHeader({
  title,
  linkToGithub,
  comments,
  ownerUsername,
  createdAt,
}: Props) {
  const navigate = useNavigate()

  const dateFormatted = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const pluralize = (count: number, singular: string, plural: string) => {
    return count === 1 ? singular : plural
  }

  return (
    <Container>
      <ContainerContent>
        <header>
          <button onClick={() => navigate('/')}>
            <FaArrowLeft />
            <span>Voltar</span>
          </button>
          <GithubLink>
            <a href={linkToGithub} target="_blank" rel="noreferrer">
              ver no github
            </a>
            <FaExternalLinkAlt />
          </GithubLink>
        </header>
        <h1>{title}</h1>
        <ProfileStatusContainer>
          <Status>
            <FaGithub />
            <span>{ownerUsername}</span>
          </Status>
          <Status>
            <FaCalendarDay />
            <span title={createdAt.toLocaleDateString('pt-BR')}>
              {dateFormatted}
            </span>
          </Status>
          <Status>
            <FaComment />
            <span>
              {comments} {pluralize(comments, 'comentário', 'comentários')}
            </span>
          </Status>
        </ProfileStatusContainer>
      </ContainerContent>
    </Container>
  )
}
