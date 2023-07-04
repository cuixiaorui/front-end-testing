import io from "socket.io-client";

const listeners: Listen[] = [];

export let socket;
export function initSocket() {
  socket = io("http://localhost:3000");

  socket.on("message", (message) => {
    listeners.forEach((listener) => {
      listener(message);
    });
  });

  return socket;
}

type Listen = (message: string) => void;

export function addListener(listen: Listen) {
  listeners.push(listen);
}
