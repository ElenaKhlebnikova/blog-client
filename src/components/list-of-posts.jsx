/* eslint-disable react/prop-types */
import PostCard from './post-card'
import { io } from 'socket.io-client'
import { useEffect, useState } from 'react'
import { fetchAllPosts } from './../api'

const URL = import.meta.env.VITE_URL

const socket = io.connect(URL)

const ListOfPosts = () => {
    const [data, setData] = useState([])

    const fn = async () => {
        const data = await fetchAllPosts()
        setData(data)
    }

    useEffect(() => {
        fn()
        socket.on('recieved_new_post', fn)
        socket.on('deleted_post', fn)
        socket.on('edited_post', fn)
        return () => {
            socket.off('recieved_new_post')
            socket.off('deleted_post')
            socket.off('edited_post')
        }
    }, [])

    if (data.length === 0) {
        return <h1>There are no posts! Create one </h1>
    }
    return (
        <div className="flex flex-col items-center">
            {data.map((item) => (
                <PostCard key={item.id} post={item} />
            ))}
        </div>
    )
}

export default ListOfPosts
