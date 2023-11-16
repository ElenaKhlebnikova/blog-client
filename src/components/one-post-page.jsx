import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchOnePost } from '../api'
import PostPreview from './post-preview'
import { useNavigate } from 'react-router-dom'

const OnePostPage = () => {
    const { id } = useParams()
    const [data, setData] = useState()
    useEffect(() => {
        const fn = async () => {
            const data = await fetchOnePost(id)
            setData(data)
        }
        fn()
    }, [])

    const navigate = useNavigate()

    if (!data) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="flex mt-10 flex-col items-center">
            <button
                onClick={() => navigate(-1)}
                className="text-xl text-yellow-500 font-semibold border rounded-md border-yellow-500 px-3 py-1 cursor-pointer"
            >
                &larr; Go back
            </button>

            {<PostPreview post={data} />}
        </div>
    )
}

export default OnePostPage
