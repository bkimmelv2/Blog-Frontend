import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    const div = {
        textAlign: 'center',
        border: '3px solid',
        margin: '50px auto',
        width: '80%',
        padding: '30px',
    }
    return (
        <div style={div}>
            <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
            </Link>
            <h2>{post.body}</h2>
        </div>
    )
}

export default Post