import { useState } from 'react'
import { Pet } from '../types'

type AccordionProps = {
  pet: Pet
}

export default function Accordion({ pet }: AccordionProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="shadow rounded-lg overflow-hidden">
      <div
        className="bg-zinc-100 py-2 px-3 hover:bg-zinc-200 cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        {pet.name}
      </div>
      <div className={`transition-all duration-400 ${open ? 'h-18' : 'h-0'}`}>
        <div className="py-2 px-3 text-gray-700">
          <div>
            <span className="text-sm text-gray-500">Owner name:</span> {pet.ownerName}
          </div>
          <div>
            <span className="text-sm text-gray-500 mr-3">Owner age:</span> {pet.ownerAge}
          </div>
        </div>
      </div>
    </div>
  )
}
