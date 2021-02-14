import React, {useEffect, useState} from 'react';
import {graphql} from 'gatsby';
import io from 'socket.io-client';
import axios from 'axios';
import useContent from '../content/content-provider/use-content';

const HomePage = () => {
  const {content} = useContent();
  const SOCKET_SERVER_URL = 'http://localhost:3000';
  const newSocket = io(SOCKET_SERVER_URL);

  const [response, setResponse] = useState(null);

  const getRequest = async () => {
    try {
      const {data} = await axios.get(`${SOCKET_SERVER_URL}/`);
      setResponse(data);
    } catch (error) {
      console.error('error: ', error);
    }
  };

  useEffect(() => {
    newSocket.on('sendMsg', msg => {
      console.log('sendMsg: ', msg);
    });
  }, [newSocket]);

  const handleClick = () => {
    newSocket.emit('event', {payload: 'chilling!!!'});
    console.log('emitting');
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <>
      <div>{content.title}</div>
      <div>
        <button type="button" onClick={handleClick}>
          click
        </button>
      </div>
      {response && <div>{response}</div>}
    </>
  );
};

export const HomePageQuery = graphql`
  query HomePageQuery {
    markdownRemark(frontmatter: {path: {eq: "/"}}) {
      frontmatter {
        path
        title
      }
    }
  }
`;

export default HomePage;
