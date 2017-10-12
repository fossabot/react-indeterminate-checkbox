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