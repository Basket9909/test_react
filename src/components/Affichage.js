const Affichage = (props) => {
    return ( 
        <h2
         style={{backgroundColor: props.age < 35 ? 'dodgerblue':'crimson', color: 'white'}}
        >
            Membre: {props.nom.toUpperCase()} - {props.age} ans
        </h2>
     );
}
 
export default Affichage;

