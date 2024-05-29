import styled from 'styled-components'
import { cores } from '../../styles'
export const Home_Phrase = styled.h1`
  font-weight: 900;
  font-size: 36px;
  text-align: center;
  color: ${cores.red};
  max-width: 540px;
  line-height:42.19px;
  margin-top: 138.5px;
  margin-left:calc(50vw - 270px);
`
export const Profile_Phrase = styled.h2`
  font-weight: 900px;
  font-size: 18px;
  cursor: pointer;
`
export const Phrase2 = styled(Profile_Phrase)`
  margin-left: 720px;
`

export const BannerPhrase1 = styled.h1`
  margin-top: 24px;
  left:0px;
  font-weight: 100;
  font-size: 32px;
  line-height: 37.5px;
  color: ${cores.white};
`
export const BannerPhrase2 = styled.h1`
  margin-top: 156.5px;
  left:0px;
  font-weight: 900px;
  font-size: 32px;
  line-height: 37.5px;
  color: ${cores.white};
`
