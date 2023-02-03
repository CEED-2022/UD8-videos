import { useDispatch, useSelector } from 'react-redux'
import { fetchFruits } from './thunks'

function AsyncButton() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.list.loading)

  function handleClick() {
    dispatch(fetchFruits(['pear']))
  }

  return (
    <>
      { loading && <p>Loading...</p> }
      <button onClick={handleClick}>Load the list</button>
    </>
  )
}

export default AsyncButton;
