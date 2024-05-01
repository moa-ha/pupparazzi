import { useCallback } from 'react'

import { useCreatePuppy } from '../hooks/api.ts'

import AddPuppyForm from '../components/AddPuppyForm.tsx'

import { PuppyData } from '../../models/Puppy.ts'

import { useNavigate } from 'react-router-dom'

export default function NewPuppy() {
  // const intitialPuppy =

  const newPuppy = useCreatePuppy()
  const navigate = useNavigate()

  const handleNew = useCallback(
    async (puppy: Partial<PuppyData>) => {
      await newPuppy.mutateAsync({ puppy })
      navigate('/')
    },
    [newPuppy, navigate]
  )
  return <AddPuppyForm onAdd={handleNew} />
}
