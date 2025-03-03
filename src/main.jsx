import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Roots from './components/Roots/Roots.jsx'
import Home from './components/Home/Home.jsx'
import BLog from './components/Blog/BLog.jsx'
import BookDetails from './components/BookDetails/BookDetails.jsx'
import ListedBooks from './components/ListedBooks/ListedBooks.jsx'
import { ToastContainer } from 'react-toastify'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots></Roots>,
    errorElement: <p>Error page</p>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/books/:bookId',
        loader: () => fetch('/booksData.json'),
        element: <BookDetails></BookDetails>,
      },
      {
        path: '/listedBooks',
        loader: ()=> fetch('/booksData.json'),
        element:  <ListedBooks></ListedBooks>
      },
      {
        path: '/blog',
        element: <BLog></BLog>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
