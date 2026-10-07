import { Route, Routes } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { SponsorsPage } from '@/pages/SponsorsPage/SponsorsPage'
import { ProgramPage } from '@/pages/ProgramPage/ProgramPage'
import { PROGRAM_PATH, SPONSORS_PATH } from '@/constants/links'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={SPONSORS_PATH} element={<SponsorsPage />} />
      <Route path={PROGRAM_PATH} element={<ProgramPage />} />
    </Routes>
  )
}

export default App
