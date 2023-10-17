import React from 'react'

const Banner = () => {
  return (
    <div className='max-h-96'>
      <div className="card w-full bg-base-100 shadow-xl image-full flex">
  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZ34wrkJFvEru_JcxWL7pY6kbRk-WJiPSjg&usqp=CAU" alt="Shoes" />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AKUGjohqcQfvpClM1xEmxnSlTERpi8FGnQ&usqp=CAU" alt="Shoes" />
  <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbawLXhdqFb3ET0MSZVbE4HNdFO00YbcFXA&usqp=CAU" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-3xl text-center text-yellow-500 font-bold">Buy Cars</h2>
    <p className='text-xl text-yellow-600'>Welcome to the <span className='text-green-700 font-bold'>CarWorld</span> collection of car text art! You can copy and paste these art pieces using the buttons below each piece. Don't forget to click the ...</p>
  </div>
</div>
    </div>
   
  )
}

export default Banner
