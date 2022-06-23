import React, { useState } from 'react'
import SignUpAsDriver from './SignUpAsDriver'
import SignUpAsPassenger from './SignUpAsPassenger'

function SignUp() {
    
    const [isDirver, setIsDriver] = useState(true)


  return (
    <div>
        {isDirver?(<SignUpAsDriver isDirver={isDirver}/>):(<SignUpAsPassenger/>)}
        
    </div>
  )
}

export default SignUp