import { useState

} from "react"
import List from "./List"
import Table from "./Table"
import Text from "./Text"

import banana from "./banana.png"

function Conditional() {

  const [showImage, setShowImage] = useState(false)
  const [showMethod, setShowMethod] = useState("list")

  const data = [
    "milk", "eggs", "bread", "apples", "bananas", "chicken", "pasta"
  ]

  const display = {
    list: <List data={data}/>,
    table: <Table data={data}/>,
    text: <Text data={data}/>
  }

  return(
    <>
      <button onClick={ () => setShowImage(!showImage)}>Toggle image</button>
      <br/>
      { showImage ? <img src={banana}/> : 'No image' }
      <br/>
      <button onClick={ () => setShowMethod('list')}>List</button>
      <button onClick={ () => setShowMethod('table')}>Table</button>
      <button onClick={ () => setShowMethod('text')}>Text</button>
      <br/>
      { display[showMethod] }
    </>
  )
}

export default Conditional
