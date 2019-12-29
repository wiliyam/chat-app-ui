import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./homescreen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

import { chatappServiceClient } from "../../generated/chatappService_grpc_web_pb";
import { req, res } from "../../generated/chatappService_pb";
import { stat } from "fs";

const client = new chatappServiceClient("https://api.4star.ga", null, null);
const request = new req();
let metadata = {};
let call;
const HomePage = () => {
  // let id = moment().unix();
  const [state, setState] = useState({
    name: "",
    token: "",
    newMsg: [],
    connUser: []
  });

  const subscribe = async token => {
    let reqData = {
      msg: "hello from client..looking for subscribe data...",
      name: state.name,
      handShack: 1
    };
    metadata = {
      token: token
    };

    request.setMessage(JSON.stringify(reqData));
    let callStub = client.subscribe(request, metadata, (err, response) => {
      // console.log("---", response);
    });
    console.log("metadata---", metadata);
    callStub.on("data", res => {
      let response = JSON.parse(res.getMessage());

      setState({
        ...state,
        connUser: response.connUser,
        newMsg: response.newMsg
      });
      console.log("state...", state.connUser);
      console.log("response----", response);
    });
    // setTimeout(() => {
    //   console.log("timeout....");
    //   callSub.;
    // }, 2000);
    callStub.on("end", a => {
      console.log("session expire...trying to reconnect....");
      subscribe(state.token);
    });
  };

  const onConn = async () => {
    let reqData = {
      msg: "hello from client..looking for token...",
      name: state.name,
      handShack: 0
      // id
    };
    console.log("reqData", reqData);
    // Cookie.set("username", state.name);
    request.setMessage(JSON.stringify(reqData));
    call = client.newUsr(request, metadata, (err, response) => {
      if (err) {
        console.log("err", err);
      }
      response = JSON.parse(response.getMessage());
      console.log("--", response);
      if (response.code == 409) {
        console.log("409...", response.token);
        if (typeof response.token == undefined) {
          console.log("token not found...");
        }
        setState({
          ...state,
          token: response.token
        });
      }
      setState({
        ...state,
        token: response.token
      });

      if (state.token != "") {
        subscribe(response.token);
      }
    });
  };

  const onNameChange = e => {
    setState({
      ...state,
      name: e.target.value
    });
  };
  return (
    <div className="w-100 h-100 container d-flex justify-content-center align-items-center flex-direction-column">
      <div>{/* <h1 className="text-center">Welcome</h1> */}</div>
      <div>
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={state.name}
              className="form-control"
              onChange={onNameChange}
              id="name"
            ></input>
          </div>
          <button type="button" className="btn btn-primary" onClick={onConn}>
            Submit
          </button>
          <ul>
            {state.newMsg &&
              state.newMsg.map(item => {
                return <div>{item}</div>;
              })}
          </ul>
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
