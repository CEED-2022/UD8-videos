import { useDispatch } from 'react-redux'

function AsyncButton() {

  const dispatch = useDispatch();

  function customAction() {
    return {
      type: 'list/banana/subaction2',
      payload: {
        message: 'Banana!'
      }
    }
  }

  return (
    <button onClick={ () => dispatch(customAction())}>Load the list</button>
  )
}

export default AsyncButton;
