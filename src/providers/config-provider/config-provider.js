import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {node} from 'prop-types';
import ConfigContext from './config-context';

const {Provider} = ConfigContext;

const ConfigProvider = ({children}) => {
  const {
    allConfigType: {nodes: configNodes},
  } = useStaticQuery(
    graphql`
      query Data {
        allConfigType {
          nodes {
            features {
              orderEnabled
              payEnabled
              splitBillEnabled
            }
          }
        }
      }
    `,
  );

  return <Provider value={{...configNodes[0]}}>{children}</Provider>;
};

ConfigProvider.propType = {
  children: node.isRequired,
};

export default ConfigProvider;
