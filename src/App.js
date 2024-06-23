// Import all components
import AllPosts from './pages/AllPosts'
import SinglePost from './pages/SinglePost'
import Form from './pages/Form'

// import hooks
import { useState, useEffect } from 'react'

// import router
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

function App(props) {
  // STYLE

  const h1 = {
    textAlign: 'center',
    margin: '30px',
  }

  const button = {
    display: 'block',
    margin: 'auto',
  }

  // VARIABLES

  // Navigate
  const navigate = useNavigate()

  // API URL
  const url = process.env.REACT_APP_BACKEND_URL

  // State to hold our posts
  const [posts, setPosts] = useState([])

  // null Blog object
  const nullBlog = {
    title: '',
    body: '',
  }

  // hold the blog post to edit
  const [targetPost, setTargetPost] = useState(nullBlog)

  // FUNCTIONS

  // GET all blog posts from API
  const getBlogs = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPosts(data)
  }

  // POST blog from our form data
  const addBlog = async (newBlog) => {
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog)
    })

    getBlogs()
  }

  const getTargetPost = (post) => {
    setTargetPost(post)
    navigate('/edit')
  }

  const updatePost = async (post) => {
    const response = await fetch(url + post.id + '/', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post)
    })

    getBlogs()
  }

  const deletePost = async (post) => {
    const response = await fetch(url + post.id + '/', {
      method: 'delete',
    })

    getBlogs()
    navigate('/')
  }

  // useEffects

  // show the list when page loads
  useEffect(() => {
    getBlogs()
  }, [])

  // Returned JSX
  return (
    <div>
      <h1 style={h1}>My Blog</h1>
      <Link to='/new'><button style={button}>Create New Blog Post</button></Link>
      <Routes>
        <Route
          exact
          path='/'
          element={<AllPosts posts={posts} />}
        />
        <Route 
          path='/post/:id'
          element={<SinglePost posts={posts} edit={getTargetPost} deletePost={deletePost} />}
        />
        <Route 
          path='/new'
          element={
            <Form 
              initialPost={nullBlog}
              handleSubmit={addBlog}
              buttonLabel='Create Post'
            />
          }
        />
        <Route 
          path='/edit'
          element={
            <Form 
              initialPost={targetPost}
              handleSubmit={updatePost}
              buttonLabel='Update Post'
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App;
