import React from 'react';
import {shape, string} from 'prop-types';
import SplitBillContainer from '../../components/split-bill/split-bill-container';

const SplitBill = ({
  data: {
    markdownRemark: {frontmatter: content},
  },
}) => <SplitBillContainer content={content} />;

SplitBill.propTypes = {
  data: shape({
    markdownRemark: shape({
      frontmatter: shape({
        title: string,
      }),
    }),
  }).isRequired,
};

export const SplitBillPageQuery = graphql`
  query SplitBillPageQuery {
    markdownRemark(frontmatter: {path: {eq: "split-bill"}}) {
      frontmatter {
        path
        title
      }
    }
  }
`;

export default SplitBill;
