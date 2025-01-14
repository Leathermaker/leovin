import React from 'react'
import { IoTrophyOutline } from 'react-icons/io5'

const Experience:React.FC = () => {
  return (
    <div className='w-full  absolute  bottom-24 flex justify-center'>
    <div className="flex items-center gap-3  w-fit  p-4 rounded-[2rem]   shadow-sm  bg-white border ">
    <div className="h-12 aspect-square rounded-full bg-blue-700 flex justify-center items-center   text-white ">
    <IoTrophyOutline size={25} />
    </div>
    <div>
      <h1 className="text-3xl font-semibold">25+</h1>
      <p>Years Of Experience</p>
    </div>
  </div>
  </div>
  )
}

export default Experience
