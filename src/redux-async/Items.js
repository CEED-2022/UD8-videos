
function Items(props) {
  const { onDelete, items } = props

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Items
