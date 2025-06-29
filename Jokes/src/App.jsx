import Jokes from "./components/jokes"
import jokesData from "./jokesData"


export default function App() {
    const jokesElements=jokesData.map((joke)=>{
        return <Jokes
        setup={joke.setup}
        punchline={joke.punchline}
        />
    })
    return (
       <main>
        <h1>Jokes</h1>
         {jokesElements}
       </main>
    )
}
{/* <Jokes
            setup="I got my daughter a fridge for her birthday."
            punchline="I can't wait to see her face light up when she opens it."
            />
             <Jokes
            setup=" How did the hacker escape the police?"
            punchline="He just ransomware!"
            />
             <Jokes
            setup="Why don't pirates travel on mountain roads?"
            punchline="Scurvy."
            />

             <Jokes
            setup="Why do bees stay in the hive in the winter?"
            punchline="Swarm."
            />
             <Jokes
            setup="What's the best thing about Switzerland?"
            punchline=" I don't know, but the flag is a big plus!"
            /> */}