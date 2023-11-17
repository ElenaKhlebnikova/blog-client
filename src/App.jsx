import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OnePostPage from './components/one-post-page'
import ListOfPosts from './components/list-of-posts'
import PostForm from './components/post-form'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div className="flex flex-col items-center w-full">
                    <PostForm />
                    <ListOfPosts />
                </div>
            ),
        },
        {
            path: '/posts/:id',
            element: <OnePostPage />,
        },
    ])

    return <RouterProvider router={router} />
}

export default App
