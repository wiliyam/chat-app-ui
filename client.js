const {
  chatappServiceClient
} = require("./generated/chatappService_grpc_web_pb");
const { req, res } = require("./generated/chatappService_pb");

const client = new chatappServiceClient("localhost:60051");

const request = new req();
request.setMessage({ mesaage: "Hello World!" });

const metadata = { id: Date() };

client.newUsr(request, metadata, (err, response) => {
  // ...
});
