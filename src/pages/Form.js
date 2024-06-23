import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Form = ({ initialPost, handleSubmit, buttonLabel }) => {
    const [formData, setFormData] = useState(initialPost)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmission = (e) => {
        e.preventDefault()
        handleSubmit(formData)
        navigate('/')
    }

    return (
        <section>
            <h2>Create a New Blog Post</h2>
                <form onSubmit={handleSubmission}>
                    <input 
                        type='text'
                        onChange={handleChange}
                        value={formData.title}
                        name='title'
                        placeholder='Title'
                    />
                    <input 
                        type='text'
                        onChange={handleChange}
                        value={formData.body}
                        name='body'
                        placeholder='body'
                    />
                    <input type='submit' value={buttonLabel} />
                </form>
            <Link to='/'>
                <button>Return to Homepage</button>
            </Link>
        </section>
    )


}

export default Form