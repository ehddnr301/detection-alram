const socket = io("/");

socket.on("Hello", () => console.log("Front Hello")); // * Hello 라는 event에 대해 콜백실행시킴

setTimeout(() => socket.emit("fromClient"), 3000);
