import Contact from "./Components/contact";
export default function App() {
    return (
        <div className="contacts">
            <Contact
                img="./mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                emil="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="./fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                emil="fluff@me.com"
            />
            <Contact
                img="./felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
                
            />
            <Contact
                img="./pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />

        </div>
    )
}