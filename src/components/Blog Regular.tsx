// import React from 'react';
// import Image from 'next/image';
// import { blog } from '../../Data/data';
// import Link from 'next/link';


// function Blog_Regular() {
//   return (
//     <div className="md:ml-[40px] max-w-full min-h-screen overflow-x-hidden relative p-[9px]">
//       {/* Popular Topics Heading */}
//       <div className="w-full h-[46px] font-bold md:text-[36px] text-[20px]  text-[#495057] mt-12">
//         <h3>Popular Cars</h3>
//       </div>

    
//       {/* Blog Entries */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
//         {blog.map((blog) => {
//           return (
//             <Link key={blog.id} href={`/articles/${blog.id}`}>
//               <div className="border border-[#ddd] shadow-lg rounded-[5px] p-3  m-3">
//                 <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] bg-cover bg-center rounded-[5px]">
//                   <Image
//                     src={blog?.image || '/default-author.jpg'}
//                     alt={blog?.title || 'Blog Image'}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
                
//                 <div className="text-[#495057] font-bold text-[16px] sm:text-[18px] mt-1">{blog.title}</div>
//                 <div className="text-[#6C757D] line-clamp-3 text-[12px] sm:text-[14px] mt-2">
//                   {blog.description}
//                 </div>
//                 <div className="flex justify-between mt-4">
//                   <Image
//                     src={blog.authorImage}
//                     alt={blog.authorName}
//                     className="mt-6"
//                     height={30}
//                     width={50}
//                   />
//                   <p className="mt-9 lora text-[12px] sm:text-[14px]">
//                     <strong className="cursor-pointer">{blog.authorName}</strong><br />
//                     {blog.job}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Blog_Regular;


import React from 'react';
import Image from 'next/image';
import { blog } from '../../Data/data';
import Link from 'next/link';

function Blog_Regular() {
  return (
    <div className="md:ml-[40px] max-w-full min-h-screen overflow-x-hidden relative p-[9px]">
      {/* Popular Topics Heading */}
      <div className="w-full h-[46px] font-bold md:text-[36px] text-[20px] text-[#495057] mt-12">
        <h3>Popular Cars</h3>
      </div>

      {/* Blog Entries */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {blog.map((blog) => (
          <Link key={blog.id} href={`/articles/${blog.id}`} aria-label={`Read more about ${blog.title}`}>
            <div className="border border-[#ddd] shadow-lg rounded-[5px] p-3 m-3 cursor-pointer">
              {/* Blog Image */}
              <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] bg-cover bg-center rounded-[5px]">
                <Image
                  src={blog?.image || '/default-author.jpg'}
                  alt={blog?.title || 'Blog Image'}
                  width={280}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Title */}
              <div className="text-[#495057] font-bold text-[16px] sm:text-[18px] mt-1">{blog.title}</div>

              {/* Blog Description */}
              <div className="text-[#6C757D] line-clamp-3 text-[12px] sm:text-[14px] mt-2">
                {blog.description}
              </div>

              {/* Author Information */}
              <div className="flex justify-between items-center mt-4">
                <Image
                  src={blog.authorImage || '/default-author.jpg'}
                  alt={blog.authorName || 'Author'}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="mt-1 lora text-[12px] sm:text-[14px]">
                  <strong className="cursor-pointer">{blog.authorName}</strong>
                  <br />
                  {blog.job}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog_Regular;
