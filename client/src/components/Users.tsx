import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    state: { usernames: string[] } = {
        usernames: []
    };

    componentDidMount() {
        axios.get(`http://127.0.0.1:5000/api/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ usernames: persons });
            })
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.state.usernames.map(person =>
                        <li className="list-group-item" key={person}>{person}</li>)}
                </ul>
            </div>
        )
    };
}

export default Users;