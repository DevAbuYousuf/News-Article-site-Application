import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter } from 'react-router-dom'
import { Home } from 'lucide-react'
import { Routes, Route } from 'react-router-dom'
import SignInForm from './auth/forms/SignInFrom'
import SignUpForm from './auth/forms/SignUpForm'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import NewsArticle from './pages/NewsArticle'
import Header from './components/shared/Header'

const App = () => {
  return (
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/sign-in/" element={<SignInForm />} />
      <Route path="/sign-up/" element={<SignUpForm />} />

      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<NewsArticle/>} />
      <Route path="/dashboard/" element={<Dashboard />} />
      
       
     </Routes>
     </BrowserRouter>
  )
}

export default App

