import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  Heading,
  DirectionText,
  GradientList,
  PickColorText,
  SelectColor,
  CustomInput,
  CustomButton,
  CustomLabel,
  CustomInputAndColorContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientColor: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeFromColorInput = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColorInput = event => {
    this.setState({toColorInput: event.target.value})
  }

  onClickGradientDirection = value => {
    this.setState({activeGradientDirection: value})
  }

  GenerateGradientColor = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientColor: `to ${activeGradientDirection},${fromColorInput}, ${toColorInput}`,
    })
  }

  renderGradientDirectionItem = () => {
    const {activeGradientDirection} = this.state
    return (
      <GradientList>
        {gradientDirectionsList.map(eachItem => (
          <GradientDirectionItem
            GradientItemDetails={eachItem}
            GradientDirection={this.onClickGradientDirection}
            isActive={eachItem.value === activeGradientDirection}
            key={eachItem.directionId}
          />
        ))}
      </GradientList>
    )
  }

  render() {
    const {fromColorInput, toColorInput, gradientColor} = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientColor={gradientColor}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <DirectionText>Choose Direction</DirectionText>
        {this.renderGradientDirectionItem()}
        <PickColorText>Pick the Colors</PickColorText>
        <SelectColor>
          <CustomInputAndColorContainer>
            <CustomLabel htmlFor="fromColor">{fromColorInput}</CustomLabel>
            <CustomInput
              id="fromColor"
              type="color"
              value={fromColorInput}
              onChange={this.onChangeFromColorInput}
            />
          </CustomInputAndColorContainer>
          <CustomInputAndColorContainer>
            <CustomLabel htmlFor="toColor">{toColorInput}</CustomLabel>
            <CustomInput
              id="toColor"
              type="color"
              value={toColorInput}
              onChange={this.onChangeToColorInput}
            />
          </CustomInputAndColorContainer>
        </SelectColor>
        <CustomButton type="button" onClick={this.GenerateGradientColor}>
          Generate
        </CustomButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
