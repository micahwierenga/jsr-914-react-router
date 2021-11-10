import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { collection, getDocs, doc, setDoc, deleteDoc, addDoc  } from 'firebase/firestore/lite';
import db from './config/firebase-setup';
import Home from './pages/Home';
import PuppyList from './pages/PuppyList';
import CreatePuppy from './pages/CreatePuppy';
import EditPuppy from './pages/EditPuppy';
import ShowPuppy from './pages/ShowPuppy';
import './App.css';

const puppiesCol = collection(db, 'puppies');

export default class App extends Component {
  state = {
    puppies: [],
  }

  createPuppy = async newPuppy => {
    await addDoc(puppiesCol, newPuppy);

    this.props.history.push('/puppies');
    this.readPuppies();
  }

  removePuppy = async id => {
    const puppyDoc = doc(puppiesCol, id);

    await deleteDoc(puppyDoc);

    this.props.history.push('/puppies');
    this.readPuppies();
  }

  updatePuppy = async editedPuppy => {
    const puppyDoc = doc(puppiesCol, editedPuppy.id);
    
    await setDoc(puppyDoc, editedPuppy);

    this.props.history.push('/puppies');
    this.readPuppies();
  }

  readPuppies = async () => {
    const puppiesSnapshot = await getDocs(puppiesCol)

    const puppiesData = [];
    puppiesSnapshot.forEach(doc => {
      puppiesData.push({
        id: doc.id,
        name: doc.data().name,
        breed: doc.data().breed,
        age: doc.data().age,
        image: doc.data().image,
      });
    });

    this.setState({
      puppies: puppiesData
    });
  }

  componentDidMount() {
    this.readPuppies();
    console.log(process.env.REACT_APP_API_KEY)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink exact to='/'>Central Bark</NavLink>
          <nav>
                <NavLink exact to='/puppies'>PUPPY LIST</NavLink>
                <NavLink exact to='/puppies/add'>ADD PUPPY</NavLink>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/puppies'>
              <PuppyList puppyList={this.state.puppies} removePuppy={this.removePuppy} />
            </Route>
            <Route exact path='/puppies/add'>
              <CreatePuppy createPuppy={this.createPuppy} />
            </Route>
            <Route path='/puppies/edit' render={({ location }) =>
              <EditPuppy updatePuppy={this.updatePuppy} location={location} />
            } />
            <Route path='/puppies/details' render={({ location }) =>
              <ShowPuppy removePuppy={this.removePuppy} location={location} />
            } />
          </Switch>
        </main>
      </div>
    );
  }
}
