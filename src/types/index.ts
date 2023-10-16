export type Pet = {
  name: string
  type: string
}

export type Person = {
  name: string
  gender: string
  age: number
  pets: Pet[] | null
}
