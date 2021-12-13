
import React, {Component, Fragment} from 'react'
import './App.css'
import Membre from './components/Membre'
//import Button from './components/Button'

var league = {
  membre1 : {
    nom: 'Batman',
    age: 46
  },
  membre2 : {
    nom: 'Superman',
    age: 46
  },
  membre3 : {
    nom: 'Wonder Woman',
    age: 79
  },
  membre4: {
    nom: 'Catwoman',
    age: 31
  }
}

class App extends Component {
  state = {
    league : league,
    plus : 2,
    isShow: false
  }
  
  componentDidMount() {
    console.log('montage')
  }

  componentDidUpdate() {
    console.log('je recharge mon composant')
  }

  componentWillUnmount() {
    console.log('démontage')
  }

  handleClick = (nb) =>{
    const league = {...this.state.league}
    league.membre1.age +=nb
    this.setState({league})
  }

  handleShow = () => {
   const isShow = !this.state.isShow // ! retourne l'inverse (toggle)
  //  this.setState({isShow:isShow})
   this.setState({isShow})
  }

  handleChange = (event,id) => {
    const league = {...this.state.league}
    const nom = event.target.value 
    league[id].nom = nom
    this.setState({league})
  }

  hideName = (id) =>{
    const league = {...this.state.league}
    league[id].nom ='X'
    league[id].age =0
    this.setState({league})
  }

  handleChangeAge = (event, id) =>{
    const league = {...this.state.league}
    const age = event.target.value 
    league[id].age = age
    if(league[id].age < 0) league[id].age = 0
    this.setState({league})
  }
  addAge = (id) =>{
    const league = {...this.state.league}
    league[id].age = league[id].age + 2
    this.setState({league})
  }

  dropAge = (id) =>{
    const league = {...this.state.league}
    league[id].age = league[id].age - 2
    if(league[id].age < 0) league[id].age = 0
    this.setState({league})
  }
  
  
  render() { 
    const {title} = this.props
    // ["membre1","membre2","membre3","membre4"]
    // je boucle mon tableau pour récup les keys et aller chercher dans mon state avec les clées les valeurs
    // <Membre age={this.state.league.membre1.age} />
    // <Membre age={this.state.league.iteration.age} />
    // <Membre age={this.state.league[iteration].age} />
    const liste = Object.keys(this.state.league).map(iteration => {
      return (
        <Membre 
          key={iteration} 
          handleChange={(event) => this.handleChange(event,iteration)}
          hideName={() => this.hideName(iteration)}
          handleChangeAge={(event) => this.handleChangeAge(event,iteration)}
          addAge={() => this.addAge(iteration)}
          dropAge={() => this.dropAge(iteration)}
          age={this.state.league[iteration].age} 
          nom={this.state.league[iteration].nom} />
      )
    })


    return (
      <Fragment>
          <div className="App">
            <h1>React App</h1>
            <h2>{title}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aperiam est provident reiciendis! Architecto nam natus temporibus veritatis, nisi velit odio, magni vitae praesentium est accusantium sequi ullam inventore soluta!</p>
          </div>
        {liste}
      </Fragment>
    )
    // React.createElement('div',{className: 'App'}, React.createElement('h1',null,'React App'))
  }
}
 
export default App;


