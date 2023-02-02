import Items from "./Items"
import AsyncButton from "./AsyncButton"

import { useSelector } from "react-redux"

function AsyncList() {

  const items = useSelector(state => state.list.items)
  const error = useSelector(state => state.list.error)

  return (
    <div>
      <h1>My list</h1>
      <AsyncButton />
      <Items items={items} />
      {error && <p>{error}</p>}
    </div>
  )
}

export default AsyncList
