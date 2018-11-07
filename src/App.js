import React, { Component } from 'react';
import './App.css';

class App extends Component {

  ref = React.createRef();
  history = '0,0';

  componentDidMount(){

    let Scratchy = this.ref.current;

    Scratchy.addEventListener("mousemove", e => {
      this.history += ","+e.layerX+","+e.layerY;
      Scratchy.style.setProperty('--paintlet-history', this.history);
    });

  }

  render() {
    return (
      <div className="Scratchy" ref={this.ref}>
        <div className="Symbols">
          <div><i className="fab fa-aws"></i></div>
          <div><i className="fab fa-github"></i></div>
          <div><i className="fab fa-edge"></i></div>
          <div><i className="fab fa-css3"></i></div>
          <div><i className="fab fa-chrome"></i></div>
          <div><i className="fab fa-apple"></i></div>
          <div><i className="fab fa-html5"></i></div>
          <div><i className="fab fa-sass"></i></div>
          <div><i className="fab fa-firefox"></i></div>
        </div>
      </div>
    );
  }
}

export default App;
