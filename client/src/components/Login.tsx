import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state: { name: string } = { name: "" };

    handleChange = (event: any) => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        axios.post(`http://127.0.0.1:5000/api/login`, { name: this.state.name })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    onChange={this.handleChange} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                        type="button" id="button-addon2"
                        onClick={this.handleSubmit}>Save</button>
                </div>
            </div>
        );
    }
}

export default Login;