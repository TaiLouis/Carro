import React, {Component} from 'react';

class Board extends Component {

    render() {

        return (
            <div>
                {
                    this.props.squares.map((row, rowindex) =>
                        (<div key={rowindex}>
                            {
                                row.map((cell, colindex) => (
                                    <Square
                                        value={this.props.squares[rowindex][colindex]['value']}
                                        onClick={(rowindex, colindex) => this.props.onClick(rowindex, colindex)}
                                        positionX={rowindex}
                                        positionY={colindex}
                                        key={colindex}
                                    />
                                ))
                            }</div>
                        )

                    )
                }

            </div>
        );
    }
}


export default Board;