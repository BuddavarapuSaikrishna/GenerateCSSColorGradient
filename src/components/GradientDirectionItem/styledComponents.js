// Style your elements here
import styled from 'styled-components'

export const GradientListItems = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`

export const CustomButton = styled.button`
  border-radius: 5px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #1e293b;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
