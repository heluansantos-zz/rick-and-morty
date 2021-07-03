import styled from 'styled-components'
// import BackImage from '../../assets/Background.png'
import LogoImg from '../../assets/Logo.png'

export const Container = styled.div`
  position: absolute;
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  color: #ddd;
  flex-direction: column;
`

export const DivSearch = styled.div`
  flex-direction: row;
  justify-content: space-around;
  display: flex;
`

export const Search = styled.input.attrs({
  placeholder: 'Search characters',
})`
  outline: none;
  box-shadow: none;
  padding: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  border-radius: 8px;
  height: 42px;
  width: 196px;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  background: transparent;
  margin-right: 5%;
`

export const ButtonSearch = styled.button`
  outline: none;
  box-shadow: none;
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  height: 42px;
  width: 84px;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 8px;
  background: transparent;
`

export const Logo = styled.img.attrs({
  src: LogoImg,
})`
  width: 502px;
  height: 214px;
`


export const DivList = styled.div`
  height: 50%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`