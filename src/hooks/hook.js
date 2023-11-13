import { useState } from 'react'
export const useField = (name) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    console.log('set')
    setValue(event.target.value)
  }

  const reset = () => {
    console.log('reset')
    setValue('')
  }

  return {
    name,
    value,
    onChange,
    reset
  }
}