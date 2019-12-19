import React from 'react';
import ReactDOM from 'react-dom';
import './homescreen.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


let res = []
const onConn = async () => {
    axios.post('http://13.233.6.179:9999/messages', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }).then(function (response) {
        //res.push(response)
        // console.log(response);
        axios.get('http://13.233.6.179:9999/messages').then(function (response) {
            res.push(response)
            console.log("response", response);

        }).catch(function (error) {
            console.log(error);
        });

    }).catch(function (error) {
        console.log(error);
    });
}

const HomePage = () => (
    <div className="w-100 h-100 container d-flex justify-content-center align-items-center flex-direction-column">
        <div>
            {/* <h1 className="text-center">Welcome</h1> */}
        </div>
        <div>
            <form className="form">
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name"></input>
                </div>
                <button type="button" class="btn btn-primary" onClick={onConn}>Submit</button>
            </form>
        </div>

        <ul class="list-group">
            {
                res.map(r => <li class="list-group-item">{r.messages}</li>)
            }

        </ul>
    </div>
)

export default HomePage;