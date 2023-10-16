import { useEffect } from 'react'
import Accordion from '../components/Accordion'
import { RootState, useAppDispatch, useAppSelector } from '../store'
import { fetchCats } from '../store/slices/catSlice'

export default function Home() {
  const dispatch = useAppDispatch()
  const { maleOwnerCats, femaleOwnerCats, status } = useAppSelector((state: RootState) => state.cats)

  // Fetch cats on initial render
  useEffect(() => {
    if (status === 'idle') dispatch(fetchCats())
  }, [status, dispatch])

  return (
    <div className="grid gap-12 divide-y-2 pt-4">
      <div>
        <div className="p-3 text-blue-600 text-lg font-semibold">Cats owned by Male:</div>
        <ul className="grid gap-4 transition-all">
          {maleOwnerCats.map((pet) => (
            <Accordion key={pet.name} pet={pet} />
          ))}
        </ul>
      </div>
      <div className="pt-4">
        <div className="p-3 text-pink-500 text-lg font-semibold">Cats owned by Female:</div>
        <ul className="grid gap-4">
          {femaleOwnerCats.map((pet) => (
            <Accordion key={pet.name} pet={pet} />
          ))}
        </ul>
      </div>
    </div>
  )
}
