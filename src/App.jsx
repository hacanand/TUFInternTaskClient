import React from 'react'
import SubmittedCode from './components/SubmittedCode'
import CodeInput from './components/CodeInput'
function App() { 
  return (
  
      <div className="h-full w-full ">
        <div className="flex flex-col">
        <CodeInput />
        
        </div>
     <SubmittedCode />
      </div>
       
  )
}

export default App
