import { Link, useParams } from "react-router-dom"

const SinglePost = ({ posts, edit, deletePost }) => {
    const params = useParams()

    const id = parseInt(params.id)
    const post = posts.find((post) => {
        return post.id === id
    })

    const div = {
        textAlign: 'center',
        border: '3px solid green',
        width: '80%',
        margin: '30px auto',
        padding: '25px',
    }

    const button = {
        margin: '20px',
    }

    return (
        <div style={div}>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <button style={button} onClick={(e) => edit(post)}>Edit</button>
            <button style={button} onClick={(e) => deletePost(post)}>Delete</button>
            <Link to='/'>
                <button style={button}>Return to Homepage</button>
            </Link>
        </div>
    )
}

export default SinglePost