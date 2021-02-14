import React from 'react';
import {node, object, shape} from 'prop-types';
import ContentContext from './content-context';

const {Provider} = ContentContext;

const ContentProvider = ({
  data: {
    markdownRemark: {frontmatter: content},
  },
  children,
}) => {
  return <Provider value={{content}}>{children}</Provider>;
};

ContentProvider.propType = {
  children: node.isRequired,
  data: shape({
    markdownRemark: shape({
      frontmatter: shape({}),
    }),
  }).isRequired,
};

export default ContentProvider;
