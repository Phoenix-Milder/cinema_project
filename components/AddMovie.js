import { useState } from 'react'

const AddMovie = ({onAdd}) =>{
  const [title, setTitle] = useState('')
  const [director, setDirector] = useState('')
  const [actors, setActors] = useState('')

const onSubmit = (e) =>{
  e.preventDefault()

  if(!title){
    alert('Please add a title')
    return
  }

  onAdd({title, director, actors})

  setTitle(' ')
  setDirector(' ')
  setActors(' ')
}


  return(
    <form className= 'a' onSubmit = {onSubmit}>
      <div className= 'form-control'>
      <label> Movie </label>
      <input type = 'text'
      placeholder = 'Add Movie'
      value={title}
      onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className= 'form-control'>
      <label> Director </label>
      <input type = 'text'
      placeholder = 'Add Director'
      value={director}
      onChange={(e) => setDirector(e.target.value)}/>
      </div>
      <div className= 'form-control'>
      <label> Main Actor </label>
      <input type = 'text'
      placeholder = 'Add Actor'
      value={actors}
      onChange={(e) => setActors(e.target.value)}/>
      </div>


      <input type = 'submit'
      value = 'Save Movie'
      className='btn'/>
    </form>
  )
}

export default AddMovie
