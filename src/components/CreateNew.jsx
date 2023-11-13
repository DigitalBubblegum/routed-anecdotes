import { useField } from "../hooks/hook";
import { useNavigate } from "react-router-dom";
const CreateNew = (props) => {
  const content = useField('content')
  const author = useField('author')
  const info = useField('info')
  const {reset: conReset, ...conMod} = content
  console.log(conMod)
  console.log(conReset)
  const {reset: authReset, ...authMod} = author
  console.log(authMod)
  console.log(authReset)
  const {reset: infoReset, ...infoMod} = info
  console.log(infoMod)
  console.log(infoReset)

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
    conReset()
    authReset()
    infoReset()
  }
  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...conMod} />
        </div>
        <div>
          author
          <input {...authMod} />
        </div>
        <div>
          url for more info
          <input {...infoMod} />
        </div>
        <button>create</button>
        <button onClick={resetValue}>reset</button>
      </form>
    </div>
  )
}

export default CreateNew