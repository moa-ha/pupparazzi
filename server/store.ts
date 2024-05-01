import type { PuppyData, Puppy } from '../models/Puppy.ts'
import initialData from './initial-data.ts'
import * as fs from 'node:fs/promises'

export async function getPuppies(): Promise<Puppy[]> {
  try {
    const json = await fs.readFile('storage/data.json', 'utf-8')
    const data = JSON.parse(json)
    return data
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return initialData
    }
    throw error
  }
}

export async function getPuppyById(id: number): Promise<Puppy | undefined> {
  try {
    const json = await fs.readFile('storage/data.json', 'utf-8')
    const data = JSON.parse(json)

    return data[id - 1]
  } catch (e: any) {
    return e.message
  }
}
export async function updatePuppy(id: number, data: PuppyData): Promise<void> {
  const puppies = await getPuppies()

  const pupArr = puppies.map((pup) => {
    if (pup.id === id) {
      return { ...data, id }
    } else return pup
  })
  const newPupList = { puppies: pupArr }

  const newPupsList = JSON.stringify(newPupList.puppies)

  await fs.writeFile('storage/data.json', newPupsList, 'utf-8')
}

export async function addPuppy(data: PuppyData): Promise<void> {
  const puppies = await getPuppies()
  const id = puppies.length + 1

  const addedPup = { id, ...data }
  const addedList = [...puppies, addedPup]

  const totalList = JSON.stringify(addedList)

  await fs.writeFile('storage/data.json', totalList, 'utf-8')
}
