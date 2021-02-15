import React from 'react';
import {node} from 'prop-types';
import ConfigProvider from '../config-provider';
import ContentProvider from '../../content/content-provider';

const PageProvider = ({props, element}) => (
  <ConfigProvider {...props}>
    <ContentProvider {...props}>{element}</ContentProvider>
  </ConfigProvider>
);

PageProvider.propType = {
  element: node.isRequired,
};

export default PageProvider;
