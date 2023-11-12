import { useField } from "../hooks/index";
import { useNavigate } from "react-router-dom";
const CreateNew = (props) => {
  const content = useField('content')
  const author = useField('author')
  const info = useField('info')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    const submitCont = e.target.content.value
    const submitAuth = e.target.author.value
    const submitInfo = e.target.info.value
    e.preventDefault()
    props.addNew({
      content: submitCont,
      author: submitAuth,
      info: submitInfo,
      votes: 0
    })
    navigate('/')
  }
  const resetValue = (e) => {
    e.preventDefault()
    console.log('hit reset values')
    content.reset()
    author.reset()
    info.reset()

  }
  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name={content.name} value={content.value} onChange={content.onChange} />
        </div>
        <div>
          author
          <input name={author.name} value={author.value} onChange={author.onChange} />
        </div>
        <div>
          url for more info
          <input name={info.name} value={info.value} onChange={info.onChange} />
        </div>
        <button>create</button>
        <button onClick={resetValue}>reset</button>
      </form>
    </div>
  )
}

export default CreateNew