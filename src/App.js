import React from "react";
import "./styles.css";

function Name({ name }) {
  return <h1>Hello, {name}</h1>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alpha: 20,
      beta: 100,
      gamma: 1000,
      x: "CS385",
      y: "App Development",
    };
  }

  render() {
    const { alpha, beta, gamma, x, y } = this.state;
    return (
      <div>
        <Name name="832204223_22124446_Shi Yuzhuo" />
        <p>Sum: {alpha + beta + gamma}</p>
        <p>Product: {alpha * beta * gamma}</p>
        <p>Sum Multiplied by 10: {(alpha + beta + gamma) * 10}</p>
        <p>
          Strings: {x} {y}
        </p>
        <p>String x Uppercase: {x.toUpperCase()}</p>
        <p>String y Lowercase: {y.toLowerCase()}</p>
      </div>
    );
  }
}

export default App;
