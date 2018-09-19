import React from 'react';

class FormRow extends React.Component {

    render() {
        return (
            <div className="form-row">
                <div className="form-group  col-sm-3">
                    <label htmlFor={this.props.id} className="mt-1">{this.props.label}</label>
                    <small className="form-text text-muted">{this.props.tip}</small>
                    <input type={this.props.type} className="form-control" id={this.props.id}
                        onChange={(event) => this.props.onChange(event, this.props.id)} />
                </div>
            </div>
        );
    }
};


export default FormRow;