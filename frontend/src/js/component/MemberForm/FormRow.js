import React from 'react';

class FormRow extends React.Component {

    render() {
        return (
            <div className="form-row">
                <div className="form-group  col-sm-3">
                    <label htmlFor={this.props.id} className="mt-1">{this.props.label}</label>
                    <input type="text" className="form-control" id={this.props.id} />
                    <small className="form-text text-muted">{this.props.tips}</small>
                </div>
            </div>
        );
    }
};


export default FormRow;