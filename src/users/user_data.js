
const MIN=2000
const MAX=4000


const fakeData = {
    user1: {
        name: "John Smith",
        age: 25,
        email: "johnsmith@email.com",
        address: "123 Main St, Anytown USA"
    },
    user2: {
        name: "Jane Doe",
        age: 32,
        email: "janedoe@email.com",
        address: "456 Park Ave, Anothertown USA"
    },
    user3: {
        name: "Bob Johnson",
        age: 45,
        email: "bobjohnson@email.com",
        address: "789 Elm St, Yetanothertown USA"
    }
  }

function getUserData(user) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(fakeData[user]),  Math.random() * (MAX - MIN) + MIN)
  })
}

export { getUserData }
