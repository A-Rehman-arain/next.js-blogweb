import Image from 'next/image'
import React from 'react'
import Sub_Footer from '@/components/Sub Footer'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { blog } from '../../../Data/data';

const Articles = () => {
  return (
    <>
      <div className="md:ml-[40px] max-w-full md:mt-24 mt-9 min-h-screen overflow-x-hidden relative p-[9px]">
        {/* Popular Topics Heading */}
        <div className="w-full h-[46px] font-bold md:text-[36px] text-[20px] text-[#495057] mt-12">
          <h3>Popular Cars Articles</h3>
        </div>


        {/* Blog Entries */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {blog.map((blog) => {
            return (
              <Link key={blog.id} href={`/articles/${blog.id}`}>
                <div className="border border-[#ddd] shadow-lg rounded-[5px] p-3 m-4">
                  <div className="w-full bg-cover bg-center rounded-[5px]">
                    <Image
                      src={blog.image}
                      alt=''
                      width={500}
                      height={100}
                    />
                  </div>
                  
                  <div className="text-[#495057] font-bold text-[18px] mt-1">{blog.title}</div>
                  <div className="text-[#6C757D] text-[12px] mt-2 line-clamp-2">
                    {blog.description}
                  </div>
                  <div className="flex justify-between mt-4">
                    <Image src={blog.authorImage} alt="" className="mt-6" height={30} width={50} />
                    <p className="mt-9 lora">
                      <strong className="cursor-pointer"> {blog.authorName}</strong><br />
                      {blog.job}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

    
      <Footer />
      <Sub_Footer />
    </>
  )
}

export default Articles;
