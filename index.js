const nums=[1,2,3,4,5]
const nums2=nums.map((x)=>x*x);
console.log(nums2);
const names=["alice","bob","charlie"];
const capitalized=names.map((name)=>{
    return name[0].toUpperCase()+name.slice(1)
});
console.log(capitalized);
const pokemon=["Bulbasaur","Charmander","Squirtle"];
const pokemon_html=pokemon.map((poki)=>`<p>${poki}</p>`
)
console.log(pokemon_html)