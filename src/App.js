import './dist/css/App.css';
import 'animate.css';
import Clarifai from 'clarifai';
import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Logo from './components/Logo'
import Rank from './components/Rank'
import ImageLinkForm from './components/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition'
import SignIn from './components/SignIn'
import Register from './components/Register'
import { data } from 'autoprefixer';


const app = new Clarifai.App({
  apiKey: '503f6a53e1e34c548ab59411cc49bf2e'
 });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        "id": "",
        "name": "",
        "email": "",
        "entries": "0",
        "created": ""
      }
    }
  }

  loadUser = (data) => {
    this.setState(
      {user: {
        "id": data.id,
        "name": data.name,
        "email": data.email,
        "entries": data.entries,
        "created": data.created
      }})
  }
  
  calculateFaceLocation = (data) => {
    const recognizedFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.querySelector("#inputImage")
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: recognizedFace.left_col * width,
      topRow: recognizedFace.top_row * height,
      rightCol: width - (recognizedFace.right_col * width),
      bottomRow: height - (recognizedFace.bottom_row * height),
    }
  }

  displayBoundingBox = (box) => {
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b",
      this.state.input
      )
    .then (response => {
      fetch('http://localhost:3000/image', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: this.state.user.id
        })
      })
      .then(response=> response.json())
      .then(count=> {
        this.setState(Object.assign(this.state.user, {entries:count}))
      })
      this.displayBoundingBox(this.calculateFaceLocation(response))})
    .catch(error => console.log(error))
  }

  onRouteChange = (givenRoute) => {
    if (givenRoute === 'signout') {
      this.setState({isSignedIn: false})
    }else if (givenRoute === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: givenRoute});
  }

  render() { 
    const { isSignedIn, route, box, imageUrl } = this.state;
    return ( 
      <div className="App">
        <Navigation isSignedIn={ isSignedIn } onRouteChange={ this.onRouteChange } />
        { this.state.route==='home' 
        ? <div className='main-div-center'>
            <Logo />
            <Rank name={ this.state.user.name } entries={ this.state.user.entries }/>
            <ImageLinkForm onInputChange={ this.onInputChange } onButtonSubmit= { this.onButtonSubmit }/>
            <FaceRecognition box={ box } imageUrl={ imageUrl }/>
          </div>
        : ( 
          route==='signin' 
          ? <SignIn loadUser={ this.loadUser } onRouteChange={ this.onRouteChange } />
          : <Register loadUser={ this.loadUser } onRouteChange={ this.onRouteChange } />
          ) 
        }
      </div>
    );
  }
}
 
export default App;