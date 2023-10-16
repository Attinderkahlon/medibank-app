import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Person, Pet } from '../../types'

type CatState = {
  maleOwnerCats: Pet[]
  femaleOwnerCats: Pet[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: CatState = {
  maleOwnerCats: [],
  femaleOwnerCats: [],
  status: 'idle',
  error: null,
}

// Fetching cats using Redux Thunk
export const fetchCats = createAsyncThunk('cats/fetchCats', async (): Promise<Person[]> => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/people.json`)
  return response.data
})

const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCats.fulfilled, (state, action: PayloadAction<Person[]>) => {
        state.status = 'succeeded'

        const malePets: Pet[] = []
        const femalePets: Pet[] = []

        // Loop through each person and their pets to find cats
        action.payload.forEach((person) => {
          if (person.pets) {
            person.pets.forEach((pet) => {
              const enhancedPet = {
                ...pet,
                ownerName: person.name,
                ownerAge: person.age,
              }

              if (pet.type === 'Cat') {
                if (person.gender === 'Male') {
                  malePets.push(enhancedPet)
                } else if (person.gender === 'Female') {
                  femalePets.push(enhancedPet)
                }
              }
            })
          }
        })

        // Sort cats by name
        malePets.sort((a, b) => a.name.localeCompare(b.name))
        femalePets.sort((a, b) => a.name.localeCompare(b.name))

        state.maleOwnerCats = malePets
        state.femaleOwnerCats = femalePets
      })
      .addCase(fetchCats.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  },
})

export default catSlice.reducer
