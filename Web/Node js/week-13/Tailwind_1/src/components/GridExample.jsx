import React from 'react'

const GridExample = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-12'>
          <div className='bg-blue-300 col-span-1 sm:col-span-5 rounded-full'>Child 1</div>
          <div className='bg-red-300 col-span-1 sm:col-span-5'>Child 2</div>
          <div className='bg-green-300 col-span-1 sm:col-span-2'>Child 3</div>
    </div>
  )
}

export default GridExample