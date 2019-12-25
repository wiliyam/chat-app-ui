import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./homescreen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

import { chatappServiceClient } from "../../generated/chatappService_grpc_web_pb";
import { req, res } from "../../generated/chatappService_pb";

const client = new chatappServiceClient("https://api.4star.ga", null, null);

let call;
const HomePage = () => {
  let id = moment().unix();
  const [state, setState] = useState({
    name: ""
  });

  const onConn = async () => {
    const metadata = { id: id };
    const request = new req();

    let res = {
      msg: "hello from client..",
      // name,
      handShack: 0,
      id
    };

    // Cookie.set("username", state.name);
    request.setMessage(JSON.stringify(res));
    call = client.subscribe(request, metadata, (err, response) => {
      console.log("error", err);
      console.log("response", response.getMessage());
      if (response == null) {
        console.log(err);
      } else {
        console.log("response", response);
      }
    });

    call.on("data", res => console.log("--", res));
  };

  const onNameChange = e => {
    setState({
      name: e.target.value
    });
  };
  return (
    <div className="w-100 h-100 container d-flex justify-content-center align-items-center flex-direction-column">
      <div>{/* <h1 className="text-center">Welcome</h1> */}</div>
      <div>
        <form className="form">
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              value={state.name}
              className="form-control"
              onChange={onNameChange}
              id="name"
            ></input>
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
};

export default HomePage;
