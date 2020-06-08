import React from 'react';

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            house: "",
            street: "",
            block: "",
            area: ""
        };
    }

    handleHouseChange = event => {
        this.setState({
            house: event.target.value
        })
    }

    handleStreetChange = event => {
        this.setState({
            street: event.target.value
        })
    }

    handleBlockChange = event => {
        this.setState({
            block: event.target.value
        })
    }

    handleAreaChange = event => {
        this.setState({
            area: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form className="mt-4" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label className="col-1 col-form-label" htmlFor="house">House</label>
                    <input className="col-3 form-control ml-4" type="text" id="house" value={this.state.house} onChange={this.handleHouseChange} required></input>
                </div>

                <div className="form-group row">
                    <label className="col-1 col-form-label" htmlFor="street">Street</label>
                    <input className="col-3 form-control ml-4" type="text" id="street" value={this.state.street} onChange={this.handleStreetChange} required></input>
                </div>

                <div className="form-group row">
                    <label className="col-1 col-form-label" htmlFor="block">Block/Sector</label>
                    <input className="col-3 form-control ml-4" type="text" id="block" value={this.state.block} onChange={this.handleBlockChange} required></input>
                </div>

                <div className="form-group row">
                    <label className="col-1 col-form-label" htmlFor="area">Area</label>
                    <input className="col-3 form-control ml-4" type="text" id="area" value={this.state.area} onChange={this.handleAreaChange} required></input>
                </div>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }
}

export default CheckoutForm;