// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: red;
  background-image: linear-gradient(${props => props.gradientColor});
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

export const DirectionText = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const GradientList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 85%;
  }
`
export const PickColorText = styled.p`
  font-size: 15px;
  color: #ffffff;
`

export const SelectColor = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CustomLabel = styled.p`
  color: #ffffff;
  margin-bottom: 10px;
`

export const CustomInput = styled.input`
  height: 40px;
  width: 50px;
  margin-right: 10px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`

export const CustomButton = styled.button`
  padding: 10px;
  background-color: #00c9b7;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-top: 10px;
`
