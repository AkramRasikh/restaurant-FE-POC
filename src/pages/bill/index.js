import React from 'react';
import {graphql} from 'gatsby';
import BillContainer from '../../components/bill/bill-container';

const Bill = ({
  data: {
    markdownRemark: {frontmatter: content},
  },
}) => {
  return <BillContainer content={content} />;
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
