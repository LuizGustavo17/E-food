import Food from './Food'

class Restaurante {
  title: string
  description: string
  image: string
  infos: string[]
  id: number
  nota: number
  banner: string
  pratos: Food[]

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    infos: string[],
    nota: number,
    banner: string,
    pratos: Food[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.infos = infos
    this.nota = nota
    this.banner = banner
    this.pratos = pratos
  }
}

export default Restaurante
