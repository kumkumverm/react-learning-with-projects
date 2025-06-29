import Header from "./components/Header";
import Entry from "./components/Entry";
import entryData from "./data"

export default function App(){
    const entryElement=entryData.map((entry)=>{
        return(
        <Entry 
        key={entry.id}
        entry={entry}
        // img={ entry.img
        //     // {
        //         // src:entry.img.src,
        //         // alt:entry.img.alt
        //     // }
        // }
        // title={entry.title}
        // country={entry.country}
        // googleMapsLink={entry.googleMapsLink}
        // date={entry.dates}
        // text={entry.text}
        />
    )
    })
    return(
        <>
        <Header/>
        <main className="container">
            {entryElement}
           </main>
        </>
    )
}

