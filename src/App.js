import React, { Component } from 'react';
import Symbols from './Symbols';
import './App.css';

class App extends Component {

  ref = React.createRef();
  history = [];
  scratching = false;

  componentDidMount(){

    let Scratchy = this.ref.current;

    Scratchy.addEventListener("mouseenter", e => {
      this.scratching = false;
    });

    Scratchy.addEventListener("mouseleave", e => {
      this.scratching = false;
    });

    Scratchy.addEventListener("mousedown", e => {
      this.scratching = true;
    });

    Scratchy.addEventListener("mouseup", e => {
      this.scratching = false;
    });

    Scratchy.addEventListener("mousemove", e => {
      if (this.scratching) {
        this.history.push(e.layerX, e.layerY);
        Scratchy.style.setProperty('--paintlet-history', this.history.join(','));
      }
    });

  }

  render() {
    return (
      <main className="Scratchy" ref={this.ref}>
        <Symbols />
      </main>
    );
  }
}

export default App;
