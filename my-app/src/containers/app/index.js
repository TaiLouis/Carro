import React, { PureComponent, Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './component/board/Board'
import './App.css';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepNumber: 0,
            xIsNext: true,
            winner: false,
            history: [
                {
                    squares: Array(30).fill(null).map((row, rowindex) => {
                        return Array(30).fill(null).map((cell, cellindex) => {
                            return { value: null, id: rowindex * 30 + cellindex };
                        })
                    })
                }
            ],
        };
    }

    handleClick(x, y) {

        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = JSON.parse(JSON.stringify(current.squares))

        if (squares[x][y] || this.state.winner) {
            return;
        }
        squares[x][y] = this.state.xIsNext ? "X" : "O";

        this.setState({
            history: history.concat([
                {
                    squares: squares

                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });

        if (this.checkWin(squares, x, y)) {
            this.setState({
                winner: true
            })
        };

    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            winner: false
        });
    }

    checkWin(squares, x, y) {
        // let square = squares[x][y];
        // let col = 0;
        // let row = 0;
        // let diag = 0;
        // let undiag = 0;
        // for (let i = -5; i <= 5; i++) {
        //     if ((y + i) >= 0 && (y + i) < squares.length) {
        //         square === squares[x][y+i] ? row++ : row = 0;        
        //     }
        //     if (row === 5) {
        //         return square;
        //     }
        // }
        // for (let i = -5; i <= 5; i++) {
        //     if ((y + i) >= 0 && (y + i) < squares.length)
        //         square === squares[x][y + i] ? col++ : col = 0;
        //     if (col === 5) {
        //         return square;
        //     }
        // }

        // for (let i = -5; i <= 5; i++) {
        //     if ((y + i) >= 0 && (y + i) <squares.length && (x + i) > 0 && (x + i) < squares.length)
        //         square === squares[x + i][y + i] ? diag++ : diag = 0;
        //     if (diag === 5) {
        //         return square;
        //     }
        // }

        // for (let i = -5; i <= 5; i++) {
        //     if ((y - i) >= 0 && (y - i) < squares.length && (x + i) > 0 && (x + i) < squares.length)
        //         square === squares[x + i][y - i] ? undiag++ : undiag = 0;

        //     if (undiag === 5) {
        //         return square;
        //     }
        // }

        return null;
    }


    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (this.state.winner) {
            status = "Winner: " + this.state.winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(x, y) => this.handleClick(x, y)}
                        maxHeight={30}
                        maxWidth={30}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

