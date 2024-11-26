//Connect socket
//Add event listener to listen for new socket messages
//Add event listener to handle sending the form data via the socket.

const socket = new WebSocket("ws://localhost:3000/stocks");
socket.addEventListener(`message`, (event) => {
  const message = event.data;
  const json = JSON.parse(message);
  console.log(message);
});
