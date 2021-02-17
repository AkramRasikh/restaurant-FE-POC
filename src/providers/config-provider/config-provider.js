import React from 'react';
import {node, shape} from 'prop-types';
import ConfigContext from './config-context';

const {Provider} = ConfigContext;

const ConfigProvider = ({
  children,
  pageContext: {
    config: {features},
  },
}) => <Provider value={{...features}}>{children}</Provider>;

ConfigProvider.propTypes = {
  children: node.isRequired,
  pageContext: shape({
    features: shape({}),
  }).isRequired,
};

export default ConfigProvider;
