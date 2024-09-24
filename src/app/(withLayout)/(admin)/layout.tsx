import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className=''>
        <h2 className='bg-teal-500 text-gray-900'>Admin Navbar</h2>
      {children}
    </div>
  )
}

export default layout
