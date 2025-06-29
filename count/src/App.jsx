// import React from "react"
// import Count from "./components/count"
// export default function App() {
//   const [count, setCount] = React.useState(0)

//   function add() {
//     setCount(prevCount => prevCount + 1)
//   }

//   function subtract() {
//     setCount(prevCount => prevCount - 1)


//   return (
//     <main className="container">
//       <div className="counter">
//         <button
//           className="minus"
//           onClick={subtract}
//           aria-label="Decrease count"
//         >-</button>

//         <Count number={count} />

//         <button
//           className="plus"
//           onClick={add}
//           aria-label="Increase count"
//         >+</button>
//       </div>
//     </main>
//   )
// }


//second 
// import React from "react"
// import Star from "./components/star"

// export default function App() {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (212) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false
//   })

//   // let starIcon = contact.isFavorite ? starFilled : starEmpty

//   function toggleFavorite() {
//     setContact(prevContact => ({
//       ...prevContact,
//       isFavorite: !prevContact.isFavorite
//     }))
//   }

//   return (
//     <main>
//       <article className="card">
//         <img
//           src=""
//           className="avatar"
//           alt="User profile picture of John Doe"
//         />

//         <div className="info">
//           <Star isFilled={contact.isFavorite} 
//           handleClick={toggleFavorite}
//           />
//           <h2 className="name">
//             {contact.firstName} {contact.lastName}
//           </h2>
//           <p className="contact">{contact.phone}</p>
//           <p className="contact">{contact.email}</p>
//         </div>

//       </article>
//     </main>
//   )
// }

//third
import React from "react"
import Header from "./components/header"
import Body from "./components/body"

export default function App() {
  const [userName, setUserName] = React.useState("Joe")

    return (
        <main>
            <Header userName={userName}/>
            <Body userName={userName}/>
        </main>
    )
}