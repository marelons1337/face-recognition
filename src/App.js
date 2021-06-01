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
    }
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

  onButtonSubmit = (input) => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b",
      this.state.input
      )
    .then (response => this.displayBoundingBox(this.calculateFaceLocation(response)))
    .catch(error => console.log(error))
  }

  render() { 
    return ( 
      <div className="App">
        <Navigation />
        <SignIn />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit= {this.onButtonSubmit}/>
        <FaceRecognition box={ this.state.box } imageUrl={ this.state.imageUrl }/>
      </div> 
    );
  }
}
 
export default App;