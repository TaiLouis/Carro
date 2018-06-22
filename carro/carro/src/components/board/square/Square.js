import React, {Component} from 'react';


class Square extends Component {
    render() {
        return (
            <button className="square" onClick={(x, y) => this.props.onClick(this.props.positionX, this.props.positionY)}>
                {this.props.value}
            </button>
        );
    }
    // shouldComponentUpdate(netxProps, netxState){
    //     console.log(this.props.value === netxProps.value)
    //     if(this.props.value === netxProps.value)
    //     {
    //         return false;
    //     }            
    //     else{
    //         return true;
    //     }
    // }

}

export default Square;