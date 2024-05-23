import styled from 'styled-components'
import { cores } from '../../styles'
export const Home_Phrase = styled.h1`
  font-weight: 900;
  font-size: 36px;
  text-align: center;
  line-height: 42px;
  color: ${cores.red};
  max-width: 540px;
  margin-top: 150px;
  margin-left: 34vw;
`
const Profile_Phrase = styled.h2`
  font-weight: 900px;
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  position: absolute;
  top: 7vh;
`
export const Phrase1 = styled(Profile_Phrase)`
  left: 15vw;
`
export const Phrase2 = styled(Profile_Phrase)`
  left: 70vw;
`
export const BannerPhrase1 = styled.h1`
  position: absolute;
  top: 25px;
  left: 170px;
  font-weight: 100;
  font-size: 32px;
  line-height: 37.5px;
  color: ${cores.white};
`
export const BannerPhrase2 = styled.h1`
  position: absolute;
  top: 214.75px;
  left: 170px;
  font-weight: 900px;
  font-size: 32px;
  line-height: 37.5px;
  color: ${cores.white};
`
