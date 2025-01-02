import React from 'react'
import Image from 'next/image';
import BlogEditor1 from "../../public/images/BlogEditor 1.jpg"
import BlogEditor2 from "../../public/images/blog Editor 2.png"
import BlogEditor3 from "../../public/images/blog Editor 3.png"

const Blog_Metro = () => {
  return (
    <>
        <div className="md:ml-9 w-full max-w-[1300px] h-auto">
            <h1 className='lora font-bold text-[36px] leading-[46px] text-[#495057] pl-6 pt-5'>Editor’s Pick</h1>
            <div className='flex flex-col sm:flex-row justify-evenly mt-16 gap-4 m-4'>
                <div className='w-full sm:w-1/3'>
                    <Image src={BlogEditor1} alt='' className="w-full h-auto object-cover rounded-md" />
                </div>
                <div className='w-full sm:w-1/3'>
                    <Image src={BlogEditor2} alt='' className="w-full h-auto object-cover rounded-md" />
                </div>
                <div className='w-full sm:w-1/3'>
                    <Image src={BlogEditor3} alt='' className="w-full h-auto object-cover rounded-md" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog_Metro;
