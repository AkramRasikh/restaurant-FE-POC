import React from 'react';
import {node} from 'prop-types';
import ConfigProvider from '../config-provider';

const PageProvider = ({element}) => {
  return <ConfigProvider>{element}</ConfigProvider>;
};

PageProvider.propType = {
  element: node.isRequired,
};

export default PageProvider;
