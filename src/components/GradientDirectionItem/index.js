// Write your code here
import {CustomButton, GradientListItems} from './styledComponents'

const GradientDirectionItem = props => {
  const {GradientItemDetails, GradientDirection, isActive} = props
  const {value, displayText} = GradientItemDetails

  const onClickDirection = () => {
    GradientDirection(value)
  }

  return (
    <GradientListItems>
      <CustomButton
        type="button"
        isActive={isActive}
        value={value}
        onClick={onClickDirection}
      >
        {displayText}
      </CustomButton>
    </GradientListItems>
  )
}

export default GradientDirectionItem
