import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   return this.props.value !== nextProps.value;
  // }
  handleClick = () => {
    const { idx, onClick } = this.props;
    onClick(idx);
  }
  componentDidUpdate() {
    console.log(this.props.value);
  }
  render() {
    return (
      <button 
        className="square" 
        onClick={this.handleClick}
      >
        { this.props.value }
      </button>
    );
  }
}

// function Square(props) {
//   return (
//     <button 
//       className="square"
//       onClick={props.onClick}
//     >
//       { props.children }
//     </button>
//   );
// }

class Board extends Component {
  componentDidUpdate() {
    console.log('Component, Board');
  }
  renderSquare(i) {
    const { onClick, squares } = this.props;
    return (
      <Square key={i} idx={i} onClick={onClick} value={squares[i]} />
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  state = {
    history: [Array(9).fill(null)],
    stepNumber: 0,
    xIsNext: true,
  }
  handleClick = (i) => {
    const { xIsNext, stepNumber } = this.state;
    const history = this.state.history.slice(0, stepNumber + 1);
    const squares = history[stepNumber];
    // 格子已有值 或者 有胜出者
    if (squares[i] || calculateWinner(squares)) return;
    const squaresClone = [...squares];
    squaresClone[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: [...history, squaresClone],
      stepNumber: stepNumber + 1,
      xIsNext: !xIsNext,
    });
  }
  jumpTo = (index) => {
    // this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
    this.setState({
      history: this.state.history.slice(0, index + 1),
      xIsNext: index % 2 === 0,
      stepNumber: index,
    });
  }
  render() {
    const { xIsNext, stepNumber, history } = this.state;
    const steps = history.map((step, index) => {
      const desc = index ? `Go to move #${index}` : 'Go to game start';
      return (
        <li key={index}>
          <button onClick={() => this.jumpTo(index)}>{desc}</button>
        </li>
      );
    });
    const squares = history[stepNumber];
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{steps}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game/>, document.getElementById('root'));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}