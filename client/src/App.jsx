import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
// const App = () => {
//   return (
    // <>
    // <Navbar />
    // </>
//   )
// }


const App = () => {

  const users = [
        {
          "name": "Alice Johnson",
          "city": "New York",
          "age": 28,
          "profession": "Software Engineer",
          "profile_photo": "https://example.com/photos/alice.jpg"
        },
        {
          "name": "Bob Smith",
          "city": "Los Angeles",
          "age": 34,
          "profession": "Graphic Designer",
          "profile_photo": "https://example.com/photos/bob.jpg"
        },
        {
          "name": "Charlie Davis",
          "city": "Chicago",
          "age": 25,
          "profession": "Data Scientist",
          "profile_photo": "https://example.com/photos/charlie.jpg"
        },
        {
          "name": "Dana Lee",
          "city": "San Francisco",
          "age": 40,
          "profession": "Marketing Manager",
          "profile_photo": "https://example.com/photos/dana.jpg"
        },
        {
          "name": "Evan Clark",
          "city": "Austin",
          "age": 31,
          "profession": "UX/UI Designer",
          "profile_photo": "https://example.com/photos/evan.jpg"
        }
      ]
  return (
    <div>
      <div className='p-10'>
      {users.map(function(elm, idx){
        return <Card key={idx} username = {elm.name} age={elm.age} city={elm.city} profession={elm.profession} photo={elm.profile_photo}/>
      })}
      </div>
    </div>
  )
}

export default App








// import React, { useState } from 'react'
// import axios from "axios"

// const App =()=> {

//   const [data, setdata] = useState([])

//   const getData = async ()=>{
    
//    const response = await  axios.get('https://picsum.photos/v2/list')
    
//    setdata(response.data);
//    console.log(data);
   
    
//   }

//   return (
//     <>
     
//     <div>
//     <button onClick={getData} className='bg-red-500 w-30 h-10 text-white font-semibold rounded m-20 active:scale-90'>Get Data</button> 
//     </div>
    
//     <div className='p-3 -mt-19.5 bg-blue-700 text-white font-semibold '>Hello</div>
//     {data.map((elem, idx)=>{
//       return <div key={idx} className='bg-red-500 text-blue-500 flex align-center justify-between w-full px-5 py-6 rounded mb-3'> 
       
//        <img src={elem } alt="" />
        

//       </div>
//      })}
//     </>
//   )
// }

// export default App