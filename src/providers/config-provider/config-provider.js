import React from 'react';
import {node} from 'prop-types';
import ConfigContext from './config-context';

const {Provider} = ConfigContext;

const ConfigProvider = ({
  children,
  pageContext: {
    config: {features},
  },
}) => {
  return <Provider value={{...features}}>{children}</Provider>;
};

ConfigProvider.propType = {
  children: node.isRequired,
};

export default ConfigProvider;
