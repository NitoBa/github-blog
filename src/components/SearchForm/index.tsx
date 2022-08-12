import { useForm } from 'react-hook-form'
import { Container, ErrorMessage } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../contexts/posts'

const schema = zod
  .object({
    search: zod
      .string()
      .min(3, { message: 'O campo deve conter pelo menos 3 caracteres' }),
  })
  .required()

type FormData = zod.infer<typeof schema>

export function SearchForm() {
  const posts = useContextSelector(PostsContext, (c) => c.posts)
  const searchPosts = useContextSelector(PostsContext, (c) => c.searchPosts)

  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    searchPosts(data.search)
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h3>Publicações</h3>
        <span>{posts.length} publicações</span>
      </header>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('search', { onBlur: () => clearErrors('search') })}
      />
      <ErrorMessage>{errors.search?.message}</ErrorMessage>
    </Container>
  )
}
