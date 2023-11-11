import { useState } from 'react'
import {Routes, Route, useMatch } from 'react-router-dom'
import Menu from './components/Menu'
import About from './components/About'
import CreateNew from './components/CreateNew'
import Footer from './components/Footer'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Anecdote from './components/Anecdote'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('nostalgia is poison for the mind')

  const notifier = (anecdote) =>{
    setNotification(`a new anecdote ${anecdote.content} created!`)
  }
  const resetnotifier = () =>{
    setTimeout(() => {
      setNotification(``)
    }, 5000);
  }
  const addNew = (anecdote) => {
    console.log('in addnew Func',anecdote)
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    notifier(anecdote)
    resetnotifier()
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const match = useMatch('/:id')
  console.log('match',match)
  const anecdote = match 
    ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
    : null
  console.log('anecdote is',anecdote)
  return (
      <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notification notification={notification}/>
      <Routes>
        <Route path='/:id' element={<Anecdote anecdote ={anecdote}/>}/>
        <Route path = '/' element={<AnecdoteList anecdotes={anecdotes} />}/>
        <Route path = '/create' element={<CreateNew addNew={addNew} />}/>
        <Route path = '/about' element={<About />}/>
      </Routes>
      <Footer />
    </div>
    
  )
}

export default App
