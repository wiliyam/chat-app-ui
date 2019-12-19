import React from 'react';
import ReactDOM from 'react-dom';
import './homescreen.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => (
    <div className="w-100 h-100 container d-flex justify-content-center align-items-center flex-direction-column">
        <h1 className="text-center">Welcome</h1>
        <form className="form">
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>
)

export default HomePage;