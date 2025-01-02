import React from 'react';
import { blog } from '../../../../Data/data';
import Comments from '@/components/Comments';
import Image from 'next/image';

interface Param {
  params: {
    id: string;
  };
}

const DynamicPage = ({ params }: Param) => {
  const ConvertString = Number(params.id);
  const MethodFind = blog.find((item) => item.id === ConvertString);

  if (!MethodFind) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-[120px]">
        <p>Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-[120px]">
      {/* Blog Image */}
      <div className="w-full h-[300px] rounded-lg mb-6">
        <Image
          src={MethodFind.image || '/default-author.jpg'}
          alt={MethodFind.title || 'Blog Image'}
          width={600}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-black lora rounded-lg mb-4">
        {MethodFind.title}
      </h1>

      {/* Blog Description */}
      <p className="md:text-lg text-sm text-gray-700 mt-4">{MethodFind.description}</p>

      {/* Author Information */}
      <div className="flex items-center mt-6 space-x-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-200">
          <Image
            src={MethodFind.authorImage || '/default-author.jpg'}
            alt={MethodFind.authorName || 'Author'}
            width={64}
            height={64}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="ml-4">
          <p className="font-semibold text-gray-800">{MethodFind.authorName}</p>
          <p className="text-sm text-gray-500">{MethodFind.job}</p>
        </div>
      </div>

      {/* Comments Section */}
      <Comments />
    </div>
  );
};

export default DynamicPage;
