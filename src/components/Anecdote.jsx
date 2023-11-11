const Anecdote = ({ anecdote }) => {
    console.log('individual anecdote',anecdote)
    return(
        <div>
            <h2>{anecdote.content} by {anecdote.author}</h2>
            has {anecdote.votes} votes
            for more info see <a href={anecdote.info}>{anecdote.info}</a>
        </div>
    )
}
export default Anecdote