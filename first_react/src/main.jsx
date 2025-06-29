
//  import { createElement } from "react"
// import {createRoot} from "react-dom/client"
// const root= createRoot(document.getElementById("root"))
// root.render(<h1>Hello</h1>)

// import {createElement} from "react"
// import {createRoot} from "react-dom/client"

// const root = createRoot(document.getElementById("root"))
// const reactElement = createElement("h1", null,"Hello from ku")
// console.log(reactElement)
// root.render(reactElement)

// function MainContent(){
//     return <h1>Why this heading is returning by mainContent</h1>
// }
// root.render(
//         <div>
//             <MainContent/>
//         </div>
// )
// let h1= document.createElement("h1")
// h1.innerText="Making it with vanilla js"
// h1.className="header"
// root.append(h1)

// import {createRoot} from "react-dom/client"
// const root = createRoot(document.getElementById(root))
// root.append(<h1>Practise</h1>)

// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"));
// root.render(
// <Page/>
// )
// function Page(){
//     return(
//         <ul>
//             <li>It is fun</li>
//             <li>It is easy</li>
//         </ul>
//     )
// }




import { createRoot } from "react-dom/client"
import Header from "./Header.jsx"
import MainContent from "./MainContent.jsx"
import Footer from "./footer.jsx"
const root = createRoot(document.getElementById("root"))
root.render(
    <Page />
)

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            < Footer />
        </div>
    )
}






