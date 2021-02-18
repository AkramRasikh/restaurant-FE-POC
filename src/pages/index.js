import React from 'react';
import {graphql} from 'gatsby';
import {shape} from 'prop-types';
import HomeContainer from '../components/home/home-container';
import useSocket from '../providers/socket-provider/use-socket';
import {socketMessages} from '../utils/socket';

const HomePage = ({
  data: {
    markdownRemark: {frontmatter: content},
  },
}) => {
  const {
    emit,
    orders: {basket},
  } = useSocket();

  const getOrders = () => {
    emit(socketMessages.getOrders);
  };

  return (
    <HomeContainer content={content} getOrders={getOrders} orders={basket} />
  );
};

HomePage.propTypes = {
  data: shape({
    markdownRemark: shape({
      frontmatter: shape({}),
    }),
  }).isRequired,
};

export const HomePageQuery = graphql`
  query HomePageQuery {
    markdownRemark(frontmatter: {path: {eq: "/"}}) {
      frontmatter {
        path
        title
        orders
        priceText
        getOrders
      }
    }
  }
`;

export default HomePage;
