// import Image from 'next/image';
// import React from 'react';
// import AboutImage from "../../../public/images/images.jpg";
// import { Header } from '@/components/Header';

// const About: React.FC = () => {
//   return (
//     <>
//       <Header />
//       <div className="mt-20 min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-12">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Hero Section */}
//           <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center">
//             <Image
//               src={AboutImage}
//               alt="About Us"
//               width={256}
//               height={256}
//               className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
//             />
//             <div className="md:ml-10 mt-6 md:mt-0">
//               <h1 className="text-4xl lora font-bold text-gray-800">About Us</h1>
//               <p className="text-gray-600 mt-4 md:text-lg text-sm leading-relaxed">
//                 Welcome to our platform! We specialize in bringing the world of automobiles to life. From showcasing cutting-edge supercars to exploring the classics, we are dedicated to fueling your passion for cars and driving innovation in the automotive space.
//               </p>
//               <p className="text-gray-600 mt-4 md:text-lg text-sm leading-relaxed">
//                 Since our inception, we’ve been focused on delivering top-notch content, reviews, and insights that cater to car enthusiasts and professionals alike. Join us as we continue this thrilling journey, celebrating the art and engineering of the automotive world.
//               </p>
//             </div>
//           </div>

//           {/* Mission Section */}
//           <div className="mt-12 bg-blue-100 rounded-lg shadow-md p-8">
//             <h2 className="text-3xl font-semibold text-blue-700 lora">Our Mission</h2>
//             <p className="text-gray-700 mt-4 md:text-lg text-sm leading-relaxed">
//               Our mission is to ignite a passion for automobiles by delivering exceptional content, insights, and experiences. We strive to empower car enthusiasts and professionals with knowledge, inspiration, and the tools to make informed automotive decisions.
//             </p>
//             <p className="text-gray-700 mt-4 md:text-lg text-sm leading-relaxed">
//               Performance, innovation, and excellence drive everything we do. Together, let's explore the road ahead and celebrate the limitless possibilities of the automotive world!
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="mt-12 bg-gray-50 rounded-lg shadow-md p-8">
//             <h2 className="text-3xl font-semibold text-gray-800">Quick Links</h2>
//             <ul className="mt-4 space-y-3">
//               <li>
//                 <a href="/" aria-label="Go to Our Services" className="text-blue-600 hover:text-blue-800">
//                   Our Services
//                 </a>
//               </li>
//               <li>
//                 <a href="/" aria-label="Contact Us" className="text-blue-600 hover:text-blue-800">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/" aria-label="Meet the Team" className="text-blue-600 hover:text-blue-800">
//                   Meet the Team
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-[80px] flex justify-center items-center bg-[#343A40] px-4 md:px-16">
//         <h3 className="lora font-normal text-[16px] text-[#E5E5E5] text-center md:text-left md:ml-32">
//           2025 | <a href="mailto:Rehmanarain481@gmail.com" className="hover:underline">Rehmanarain481@gmail.com</a>
//         </h3>
//       </div>
//     </>
//   );
// };

// export default About;




import React from 'react';
import Image from 'next/image';
import { blog } from '../../../Data/data';
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
