import { useDispatch, useSelector } from 'react-redux'
import { getData } from './get_data'
import { fruitsFullfilled, fruitsPending, fruitsRejected } from './features/listSlice'

function AsyncButton() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.list.loading)

  async function loadList() {
    const ERROR_PROBABILITY = 0.4
    let error = Math.random() < ERROR_PROBABILITY;

    try {
      dispatch(fruitsPending())
      const fruits = await getData({error})
      dispatch(fruitsFullfilled(fruits))
    }catch(error) {
      dispatch(fruitsRejected(error))
    }
  }

  return (
    <>
      { loading && <p>Loading...</p> }
      <button onClick={ () => loadList()}>Load the list</button>
    </>
  )
}

export default AsyncButton;
