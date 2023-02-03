const TIME = 2000

function generateFruitList() {
  const fruits = ['apple', 'banana', 'orange', 'grape', 'strawberry'];
  const fruitList = [];
  const listLength = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < listLength; i++) {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    fruitList.push(fruits[randomIndex]);
  }

  return fruitList;
}

async function getData({error=false}){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(error) reject('An error happened')
      else resolve(generateFruitList())
    }, TIME)
  })
}

export { getData }
