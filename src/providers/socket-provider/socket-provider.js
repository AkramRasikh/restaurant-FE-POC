import React, {useEffect, useState} from 'react';
import {node} from 'prop-types';
import io from 'socket.io-client';
import SocketContext from './socket-context';
import {socketMessages} from '../../utils/socket';

const {Provider} = SocketContext;

const SocketProvider = ({children}) => {
  const [socket, setSocket] = useState();
  const [orders, setOrders] = useState({});
  useEffect(() => {
    if (socket) {
      socket.on(socketMessages.sendOrders, newOrders => {
        setOrders({...orders, ...newOrders});
      });
    }
  }, [socket]);

  useEffect(() => {
    const SOCKET_SERVER_URL = 'http://localhost:3000';
    const socketInstance = io(SOCKET_SERVER_URL);
    setSocket(socketInstance);
  }, []);

  const emit = (msg, payload) => {
    socket.emit(msg, payload);
  };

  return socket ? (
    <Provider value={{socket, orders, emit}}>{children}</Provider>
  ) : (
    <div>Loading</div>
  );
};

SocketProvider.propTypes = {
  children: node.isRequired,
};

export default SocketProvider;
