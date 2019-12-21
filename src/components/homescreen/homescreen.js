import React from "react";
import ReactDOM from "react-dom";
import "./homescreen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { chatappServiceClient } from "../../generated/chatappService_grpc_web_pb";
import { req, res } from "../../generated/chatappService_pb";

const client = new chatappServiceClient("http://localhost:3333", null, null);

//let res = [];

const onConn = async () => {
  const metadata = { id: Date() };
  const request = new req();
  request.setMessage("hello from clinet....");
  client.newUsr(request, metadata, (err, response) => {
    console.log("error", err);
    if (response == null) {
      console.log(err);
    } else {
      console.log("response", response);
    }
  });
};

const HomePage = () => (
  <div className="w-100 h-100 container d-flex justify-content-center align-items-center flex-direction-column">
    <div>{/* <h1 className="text-center">Welcome</h1> */}</div>
    <div>
      <form className="form">
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name"></input>
        </div>
        <button type="button" class="btn btn-primary" onClick={onConn}>
          Submit
        </button>
      </form>
    </div>

    {/* <ul class="list-group">
      {res.map(r => (
        <li class="list-group-item">{r.messages}</li>
      ))}
    </ul> */}
  </div>
);

export default HomePage;
