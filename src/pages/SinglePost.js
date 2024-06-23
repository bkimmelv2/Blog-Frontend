import { Link, useParams } from "react-router-dom"

const SinglePost = ({ posts, edit }) => {
    const params = useParams()

    const id = parseInt(params.id)
    const post = posts.find((post) => post.id === id)

    const div = {
        textAlign: 'center',
        border: '3px solid green',
        width: '80%',
        margin: '30px auto',
        padding: '25px',
    }

    return (
        <div style={div}>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <button onClick={(e) => edit(post)}>Edit</button>
            <Link to='/'>
                <button>Return to Homepage</button>
            </Link>
        </div>
    )
}

export default SinglePost