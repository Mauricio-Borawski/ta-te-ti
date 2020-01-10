import React, { Component } from 'react'
import Square from '../squareComponents/square' 
export class Tablero extends Component {
    constructor(props) {
        super(props)

        this.state = {
            casilla: Array(9).fill(null),
            xIsNext: true 
        }
    }

    click(i){
        const casilla = this.state.casilla.slice()
        if(calculateWinner(casilla) || casilla[i]){
            return;
        }
        casilla[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({casilla: casilla, xIsNext: !this.state.xIsNext})
    }

    renderSquare(i){
        return <Square value={this.state.casilla[i]} 
        onClick={()=>{this.click(i)}}/>
      }

    render() {

        const winner = calculateWinner(this.state.casilla)
        let status
        if(winner){
            status = 'Ganador: ' + winner
            setTimeout(()=>{
                this.setState({casilla: Array(9).fill(null), xIsNext:   true})
            }, 1000)
        }
        else{
            status = 'Jugador: ' + (this.state.xIsNext ? 'X' : 'O')
        }
        return (
            <div>
                <div className="game">
                    <h2>{status}</h2>
          <div className="boardRow">
            {this.renderSquare(0)}  {this.renderSquare(1)}  {this.renderSquare(2)}
          </div>
          <div className="boardRow">
            {this.renderSquare(3)}  {this.renderSquare(4)}  {this.renderSquare(5)}
          </div><div className="boardRow">
            {this.renderSquare(6)}  {this.renderSquare(7)}  {this.renderSquare(8)}
          </div>
        </div>
            </div>
        )
    }
    
}

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

export default Tablero
