/*
 The MIT License (MIT)

 Copyright (c) Michele Riva <master@micheleriva.it>

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React     from 'react'
import PropTypes from 'prop-types'

export default class IndeterminableCheckbox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ...this.props,
            status: this.props.indeterminate ? 0 : 1
        };
    }

    componentDidMount(){
        if(!this.state.status){
            this.el.indeterminate = true;
        }
    }

    changeStatus(){
        const status = this.state.status;
        if(status < 2){
            let newState = status + 1;
            return this.setState({status: newState}, () => this.handleChangeProp());
        }else{
            return this.setState({status: 0}, () => this.handleChangeProp());
        }
    }

    handleChangeProp(){

        const status = this.state.status;

        switch(status){
            case 1:
                this.el.indeterminate = false;
                this.el.checked       = true;
                break;
            case 2:
                this.el.indeterminate = false;
                this.el.checked       = false;
                break;
            default:
                this.el.indeterminate = true;
                this.el.checked       = false;
                break;
        }

        return this.props.change(status);
    }

    render(){
        return(
            <input
                name={this.state.name}
                type="checkbox"
                ref={el => this.el = el}
                onChange={() => this.changeStatus()}
            />
        )
    }
}

IndeterminableCheckbox.propTypes = {
    indeterminate: PropTypes.bool,
    change:        PropTypes.func,
    name:          PropTypes.string
};

IndeterminableCheckbox.defaultProps = {
    indeterminate: true,
};