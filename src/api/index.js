const URL = import.meta.env.VITE_URL

export const fetchAllPosts = async () => {
    const data = await fetch(`${URL}/posts`).then((d) => d.json())
    return data
}
export const fetchOnePost = async (id) => {
    const data = await fetch(`${URL}/posts/${id}`).then((d) => d.json())
    return data
}

export const deleteOnePost = async (id) => {
    const response = await fetch(`${URL}/posts/${id}`, {
        method: 'DELETE',
    }).then((d) => d.json())
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
    return await response.json()
}

export const updatePost = async (id, updatedData) => {
    const response = await fetch(`${URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
    return await response.json()
}
