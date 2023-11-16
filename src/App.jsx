import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OnePostPage from './components/one-post-page'
import ListOfPosts from './components/list-of-posts'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <ListOfPosts />,
        },
        {
            path: '/posts/:id',
            element: <OnePostPage />,
        },
    ])

    return <RouterProvider router={router} />
}

export default App
