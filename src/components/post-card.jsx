/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { deleteOnePost } from '../api'
import UploadUpdateForm from './post-form'

const PostCard = ({ post }) => {
    const [updateFormIsClosed, setUpdateFormIsClosed] = useState(true)
    const dateAndTimeArr = post.date.split('T')
    const time = dateAndTimeArr[1].slice(0, -8)

    return (
        <div className="w-2/3 my-10 break-all relative">
            <div className="absolute w-full">
                {!updateFormIsClosed && (
                    <UploadUpdateForm
                        type="update"
                        closeForm={setUpdateFormIsClosed}
                        post={post}
                    />
                )}
            </div>

            <div className="flex justify-end mb-2">
                <button
                    onClick={() => setUpdateFormIsClosed(false)}
                    className="mx-2 text-yellow-400 text-xl font-semibold"
                >
                    Edit
                </button>
                <button
                    onClick={() => deleteOnePost(post.id)}
                    className="ml-2 text-red-400 text-xl font-semibold"
                >
                    Delete
                </button>
            </div>
            <div className="border-indigo-500 border rounded-xl px-12 py-5 ">
                <div className="flex items-center mb-5">
                    <div className="relative -z-10 mr-5 h-20 w-20 rounded-full bg-gradient-to-r from-violet-500 to-teal-500">
                        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
                            {post.username[0].toUpperCase()}
                        </h1>
                    </div>
                    <h1 className="text-3xl">{post.username}</h1>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-600 text-sm">
                        Created on {dateAndTimeArr[0]} at {time}
                    </span>
                    {post.updated !== 0 && (
                        <span className="text-blue-600 text-sm">Updated</span>
                    )}

                    <h1 className="text-3xl  mt-5 text-center">{post.title}</h1>

                    <p className="my-5">{post.text}</p>

                    <button className="text-violet-500 font-semibold text-xl self-end">
                        <Link to={`posts/${post.id}`}>
                            View the post &rarr;
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostCard
