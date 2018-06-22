import React, {Component} from 'react';


class Square extends Component {
    render() {
        return (
            <button className="square" onClick={(x, y) => this.props.onClick(this.props.positionX, this.props.positionY)}>
                {this.props.value}
            </button>
        );
    }
    shouldComponentUpdate(netxProps, netxState){
        console.log('update' + this.props.positionX + "and" + this.props.positionY);
        return this.props.value !== netxProps.value;
    }
}

export default Square;