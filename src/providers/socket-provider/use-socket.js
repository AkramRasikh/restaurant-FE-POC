import {useContext} from 'react';
import socketContext from './socket-context';

const useSocket = () => {
  const socket = useContext(socketContext);
  return socket;
};

export default useSocket;
