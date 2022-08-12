import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/DafaultLayout'
import { Details } from './pages/details'
import { Home } from './pages/home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
