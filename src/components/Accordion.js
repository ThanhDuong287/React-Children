import React, { Children, Component } from 'react';
class Accordion extends Component {
    constructor() {
        super();
        this.state = {
            isCollapsed: true
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        })
        console.log(this.state.isCollapsed);

    }
    render() {
        const { heading, children } = this.props;
        const { isCollapsed } = this.state;
        return <div className='Accordion'>
            <div className='Heading' onClick={this.onClick}>
                <h1>{heading}</h1>
            </div>
            {!isCollapsed && <div className='Content'>
                {children}
            </div>}
        </div>
    }
}
export default Accordion;