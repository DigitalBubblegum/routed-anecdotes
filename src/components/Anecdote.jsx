const Anecdote = ({ anecdote }) => {
    console.log('individual anecdote',anecdote)
    console.log('in anecdote view',anecdote.info)
    const newLink = "http://"+anecdote.info
    console.log(newLink)
    return(
        <div>
            <h2>{anecdote.content} by {anecdote.author}</h2>
            has {anecdote.votes} votes
            for more info see <a target="_blank" rel="noreferrer"  href={newLink}>{anecdote.info}</a>
        </div>
    )
}
export default Anecdote