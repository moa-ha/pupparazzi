import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { Puppy, PuppyData } from '../../models/Puppy'

interface Props {
  onAdd: (data: PuppyData) => void
}

export default function AddPuppyForm(props: Props) {
  const { onAdd } = props

  const [formState, setFormState] = useState({
    name: '',
    breed: '',
    owner: '',
    image: '',
  })

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const addedData = { ...formState }
    console.log('addedData: ', addedData)
    onAdd(addedData)
  }

  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }, [])

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-item">
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          id="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="breed">Breed:</label>
        <input
          name="breed"
          id="breed"
          value={formState.breed}
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="owner">Owner:</label>
        <input
          name="owner"
          id="owner"
          value={formState.owner}
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="image">Image:</label>
        <input
          name="image"
          id="image"
          value={formState.image}
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </form>
  )
}

//data-pending={pending}
