import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUserFromLocalStorage } from '../features/user/userSlice'
import {
  getApplicationsFromLocalStorage,
  getJobsFromLocalStorage,
} from '../features/jobs/jobsSlice'

import { ProtectedLayout, Layout } from '../components/Layout'
import { Landing } from '../components/views/Landing'
import { Home } from '../components/views/Home'
import { Applications } from '../components/views/Applications'
import { Following } from '../components/views/Following/Following'
import { Profile } from '../components/views/Profile'
import { Jobs } from '../components/views/Jobs'
import { NotFound } from '../components/views/NotFound'
import { Onboarding } from '../components/views/Onboarding'
import { CreateNewJob } from '../components/views/CreateNewJob'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserFromLocalStorage())
    dispatch(getJobsFromLocalStorage())
    dispatch(getApplicationsFromLocalStorage())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/:jobID" element={<Applications />} />
          <Route path="/following" element={<Following />} />
          <Route path="/jobs/:jobID" element={<Jobs />} />
          <Route path="/jobs/new" element={<CreateNewJob />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
