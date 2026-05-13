import React from 'react'
import { Button } from './components/ui/button'

const App = () => {
  return (
     <div className="flex min-h-svh flex-col items-center justify-center">
      <h1>hello World</h1>
      <Button className="px-4 py-6 text-red-600 hover:bg-primary-foreground">Click me</Button>
      <p>This is a paragraph</p>
    </div>
  )
}

export default App
