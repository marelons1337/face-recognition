import './dist/css/App.css';
import 'animate.css';
import Clarifai from 'clarifai';
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'


const app = new Clarifai.App({
  apiKey: '503f6a53e1e34c548ab59411cc49bf2e'
 });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      input: '',
    }
  }
  

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b","https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528")
    .then (
      function(response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    )

  }

  render() { 
    return ( 
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit= {this.onButtonSubmit}/>
        <FaceRecognition />
      </div> 
    );
  }
}
 
export default App;