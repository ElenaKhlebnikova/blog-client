const URL = import.meta.env.VITE_URL

export const fetchAllPosts = async () => {
    const response = await fetch(`${URL}/posts`)
    return response.json()
}
export const fetchOnePost = async (id) => {
    const response = await fetch(`${URL}/posts/${id}`)
    return response.json()
}

export const deleteOnePost = async (id) => {
    const response = await fetch(`${URL}/posts/${id}`, {
        method: 'DELETE',
    })
    return await response.json()
}

export const createNewPost = async (newPostData) => {
    const response = await fetch(`${URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPostData),
    })
    return response.json()
}

export const updatePost = async (id, updatedData) => {
    const response = await fetch(`${URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...updatedData, updated: true }),
    })
    return await response.json()
}
