"use client"
import React, { useState } from 'react'

const Comments = () => {
  const [comment, setcomment] = useState("")
  const [comments, setcomments] = useState<string[]>([
    "This is a great article!",
    "I really enjoyed reading this.",
    "Very informative, thank you for sharing!",
    "Can’t wait to see more posts like this."
  ]) // Adding hardcoded comments initially

  const addComment = (notrefresh: React.FormEvent) => {
    notrefresh.preventDefault()
    if (comment.trim()) {
      setcomments([comment, ...comments])
      setcomment("")
    }
  }

  return (
    <div>
      {/* Comment Form */}
      <form 
        className="flex flex-col sm:flex-row items-center md:mt-12 mt-24 md:ml-2 p-3 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out focus-within:shadow-lg"
        onSubmit={addComment}
      >
        <input 
          type="text"
          placeholder="Comment Here... "
          className="flex-1 md:p-4 py-2 border  border-gray-300 rounded-l-lg  transition-all duration-300 ease-in-out placeholder-gray-500 text-gray-700 text-lg mb-3 sm:mb-0 sm:w-2/3"
          value={comment} 
          onChange={(notrefresh) => setcomment(notrefresh.target.value)}
        />
        <button
          type="submit"
          className="bg-slate-400 text-white  font-bold px-6 py-3 rounded-r-lg hover:bg-slate-600 transition-all duration-300 ease-in-out sm:w-1/3"
        >
          Add Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="mt-6">
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((hereComments, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <p className="text-gray-700 text-lg">{hereComments}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  )
}

export default Comments
