import React from 'react';
import {graphql} from 'gatsby';
import {shape, string} from 'prop-types';

const Menu = ({
  data: {
    markdownRemark: {
      frontmatter: {title},
    },
  },
}) => {
  return <div>{title}</div>;
};

Menu.propTypes = {
  data: shape({
    markdownRemark: shape({
      frontmatter: shape({
        title: string,
      }),
    }),
  }).isRequired,
};

export default Menu;

export const MenusPageQuery = graphql`
  query MenusPageQuery {
    markdownRemark(frontmatter: {path: {eq: "menu"}}) {
      frontmatter {
        path
        title
      }
    }
  }
`;
