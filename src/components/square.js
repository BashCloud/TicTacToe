import React from 'react';

export default class Square extends React.Component {
    test = () => {
        this.props.onClick();
    }

    render() {
        return (
            <div className="square" onClick={() => this.test()}>
                {this.props.value}
            </div>
        );
    }
}