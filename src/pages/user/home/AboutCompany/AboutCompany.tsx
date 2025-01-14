import React from 'react'
import AboutRightSection from './components/AboutRightSection'
import { AboutImageSection } from '../../about/components'

const AboutCompany:React.FC = () => {
  return (
    <div className='grid grid-cols-12 lg:px-24 px-4  py-12'>
      <div className='lg:col-span-6 col-span-12'>
        {/* <AboutLeftSection/> */}
        <AboutImageSection/>
      </div>
      <div className='lg:col-span-6 col-span-12 flex  items-center  h-full py-12'>
        <AboutRightSection/>
      </div>
    </div>
  )
}

export default AboutCompany
