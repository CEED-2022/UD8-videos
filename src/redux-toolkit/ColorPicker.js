import { useDispatch } from 'react-redux'
import { blue, red } from './features/colorSlice'

function ColorPicker() {
  const dispatch = useDispatch()

  return (
    <div className="color-picker">
      <button onClick={ () => dispatch(red())}>red</button>
      <button onClick={ () => dispatch(blue())}>blue</button>
    </div>
  )
}

export default ColorPicker
