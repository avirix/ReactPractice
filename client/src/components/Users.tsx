import React from 'react';
import axios from 'axios';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://192.168.88.103:5000/socket');

class Users extends React.Component {
    state: { usernames: string[] } = {
        usernames: []
    };

    componentWillMount() {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
            const persons = this.state.usernames;
            persons.push(message.data)
            this.setState({ usernames: persons });
        };
    }

    componentDidMount() {
        axios.get(`http://192.168.88.103:5000/api/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ usernames: persons });
            })
    }

    render() {
        return (
            <div  style={{marginTop: '-10px'}}>
                <ul className="list-group">
                    {this.state.usernames.map(person =>
                        <li className="list-group-item" key={person}>{person}</li>)}
                </ul>
            </div>
        )
    };
}

export default Users;