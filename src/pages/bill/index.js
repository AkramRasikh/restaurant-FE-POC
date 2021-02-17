import React from 'react';
import {graphql} from 'gatsby';
import {shape, string} from 'prop-types';
import BillContainer from '../../components/bill/bill-container';

const Bill = ({
  data: {
    markdownRemark: {frontmatter: content},
  },
}) => {
  return <BillContainer content={content} />;
};

Bill.propTypes = {
  data: shape({
    markdownRemark: shape({
      frontmatter: shape({
        title: string,
        toSplitBill: string,
      }),
    }),
  }).isRequired,
};

export default Bill;

export const BillPageQuery = graphql`
  query BillPageQuery {
    markdownRemark(frontmatter: {path: {eq: "bill"}}) {
      frontmatter {
        path
        title
        toSplitBill
      }
    }
  }
`;
