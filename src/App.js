import React,{useState} from 'react'
import data from './data'
import List from './List'


const App = () => {
  const[people,setPeople] = useState(data)
  return (
    <div>
      <main>
        <section className='container'>
            <h3>{people.length} Best Books of All Times</h3>
            <List people={people}/>
            <button  onClick={()=>setPeople([])}>Clear All</button>
        </section>
      </main>
    </div>
  )
}

export default App
