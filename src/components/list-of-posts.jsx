import PostPreview from './post-preview'
import { useEffect, useState } from 'react'
import { fetchAllPosts } from './../api'
import UploadUpdateForm from './upload-update-form'

const ListOfPosts = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fn = async () => {
            const data = await fetchAllPosts()
            setData(data)
        }
        fn()
    }, [])

    if (data.length === 0) {
        return <h1>There are no posts! Create one </h1>
    }
    return (
        <div>
            <div className="flex flex-col items-center w-full">
                <UploadUpdateForm />
                {data.map((item) => (
                    <PostPreview key={item.id} post={item} />
                ))}
            </div>
        </div>
    )
}

export default ListOfPosts
