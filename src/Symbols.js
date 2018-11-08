import React, { Component } from 'react';

class Symbols extends Component {

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
        <div className="Symbols" ref={this.ref}>
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
    );
  }
}

export default Symbols;
