export type Pet = {
  name: string
  type: string
  ownerName: string
  ownerAge: number
}

export type Person = {
  name: string
  gender: string
  age: number
  pets: Pet[] | null
}
