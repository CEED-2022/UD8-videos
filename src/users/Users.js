import { useState } from "react"
import UserWithChild from "./UserWithChild"
import './users.css'

function Users() {

  const [user, setUser] = useState()
  const [color, setColor] = useState('red')

  return(
    <>
      <button onClick={() => setUser('user1')}>User 1</button>
      <button onClick={() => setUser('user2')}>User 2</button>
      <button onClick={() => setUser('user3')}>User 3</button>
      <br/>
      <button onClick={() => setColor('red')}>red</button>
      <button onClick={() => setColor('blue')}>blue</button>
      <UserWithChild user={user} color={color}/>
    </>
  )
}

export default Users
