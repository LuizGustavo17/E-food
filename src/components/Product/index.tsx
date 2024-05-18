import Tag from '../Tag'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Div_Border,
  Card,
  Descricao,
  Titulo,
  Img_Card,
  Div_Img,
  Div_Tag,
  Estrela
} from './styles'
import Food from '../../models/Food'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  nota: number
  foods: Food[]
  banner: string
}

const Product = ({
  title,
  description,
  infos,
  image,
  nota,
  foods,
  banner
}: Props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    const dataArray = foods
    const novo_banner = banner
    const queryParams = new URLSearchParams({
      data: JSON.stringify(dataArray),
      novo_banner: novo_banner
    }).toString()
    navigate(`/restaurant?${queryParams}`)
  }
  return (
    <Card>
      <Div_Img>
        <Img_Card src={image} alt={title} />
        <Div_Tag>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Div_Tag>
      </Div_Img>
      <Div_Border>
        <div style={{ position: 'relative' }}>
          <Titulo>{title} </Titulo>
          <Estrela>
            {nota}
            <svg
              style={{ paddingTop: '5px' }}
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5564 12.706C17.108 13.139 16.9043 13.763 17.0093 14.375L17.6866 18.291C17.8976 19.51 16.9211 20.5 15.8134 20.5C15.5215 20.5 15.2201 20.431 14.9282 20.279L11.3845 18.43C11.1073 18.286 10.8038 18.214 10.4993 18.214C10.1959 18.214 9.89243 18.286 9.61523 18.43L6.07147 20.279C5.77957 20.431 5.47822 20.5 5.18632 20.5C4.07857 20.5 3.10207 19.51 3.31312 18.291L3.99037 14.375C4.09537 13.763 3.89167 13.139 3.44332 12.706L0.575768 9.933C-0.551933 8.842 0.0707209 6.941 1.62892 6.716L5.59162 6.145C6.21112 6.056 6.74662 5.67001 7.02277 5.11301L8.79517 1.55099C9.14377 0.849995 9.82207 0.5 10.4993 0.5C11.1776 0.5 11.8559 0.849995 12.2045 1.55099L13.9769 5.11301C14.2531 5.67001 14.7886 6.056 15.4081 6.145L19.3708 6.716C20.929 6.941 21.5516 8.842 20.4239 9.933L17.5564 12.706Z"
                fill="#FFB930"
              />
            </svg>
          </Estrela>
        </div>
        <Descricao>{description}</Descricao>
        <Button onClick={handleClick}>Saiba mais</Button>
      </Div_Border>
    </Card>
  )
}

export default Product
