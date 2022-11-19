import React from 'react'

const Gallery = () => {
  return (
    <div className='w-full pt-20 flex justify-center'>
      <section className='container'>
        <div className='text-5xl text-gray-600 py-1'>Our Gallery</div>
        <div className='text-gray-500 py-1'>Lorem Ipsum test that can be filler</div>
        <div className="grid grid-cols-4 gap-4 py-8">
          <div className='basis-1/'>
            <img className='img-fit rounded-lg' src="https://via.placeholder.com/400"></img>
            <div className='text-base'>Img Title</div>
            <div className='text-lg'>Lorem stuff goes here for us</div>
          </div>
          <div className='basis-1/4'>
            <img className='img-fit rounded-lg' src="https://via.placeholder.com/400"></img>
          </div>
          <div className='basis-1/4'>
            <img className='img-fit rounded-lg' src="https://via.placeholder.com/500"></img>
          </div>
          <div className='basis-1/4'>
            <img className='img-fit rounded-lg' src="https://via.placeholder.com/600"></img>
          </div>
          <div className='basis-1/4 '>
            <img className='img-fit rounded-lg' src="https://via.placeholder.com/400"></img>
          </div>
          <div className='basis-1/4'>
            <img className='img-fit rounded-lg' src="https://via.placeholder.com/500"></img>
          </div>
          <div className='basis-1/4'>
            <img className='img-fit rounded-lg' src="https://via.placeholder.com/800"></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery;
