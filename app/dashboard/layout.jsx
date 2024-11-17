// import React from 'react'
// import Header from './_components/Header'

// function DashboardLayout({children}) {
//   return (
//     <div>
//         <Header/>
//         <div className='mx-5 md:mx-20 lg:mx-36'>
//         {children}
//         </div>
       
//     </div>
//   )
// }

// export default DashboardLayout

import React from 'react'
import Header from './_components/Header'

function DashboardLayout({ children }) {
  return (
    <div className="transition-all ease-in-out duration-300">
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36 transition-all ease-in-out duration-300 hover:scale-105">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout;
