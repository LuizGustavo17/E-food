class Food {
  title: string
  description: string
  details: string
  image: string
  persons: string
  price: number
  id: number
  constructor(
    title: string,
    description: string,
    details: string,
    image: string,
    persons: string,
    price: number,
    id: number
  ) {
    this.title = title
    this.description = description
    this.details = details
    this.image = image
    this.persons = persons
    this.price = price
    this.id = id
  }
}

export default Food
