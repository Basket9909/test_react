// const Membre = (props) => {
//     const name = props.nom
//      const children = props.children
//     return ( 
//         <>
//             <h2>Membre: {name.toUpperCase()}</h2>
//         </>
//      );
// }
import Affichage from "./Affichage";
 
const Membre = ({nom, children, age, handleChange, hideName, addAge, dropAge,handleChangeAge}) => {
    
    return ( 
        <>
            <Affichage 
                nom={nom}
                age={age}
            />
            <input type="text" value={nom} onChange={handleChange}/>&nbsp;
            <button onClick={hideName}>X</button>
            { children ? <p>{children}</p> : null }
            <button onClick={addAge}>+2</button>
            <button onClick={dropAge}>-2</button>
            <input type="number" value={age} onChange={handleChangeAge}/>&nbsp;

        </>
     );
}
 
export default Membre;