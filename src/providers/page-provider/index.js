import React from 'react';
import {node, object} from 'prop-types';
import ConfigProvider from '../config-provider';
import ContentProvider from '../../content/content-provider';
import SocketProvider from '../socket-provider';

const PageProvider = ({element, props}) => (
  <ConfigProvider {...props}>
    <SocketProvider>
      <ContentProvider {...props}>{element}</ContentProvider>
    </SocketProvider>
  </ConfigProvider>
);

PageProvider.propTypes = {
  element: node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  props: object.isRequired,
};

export default PageProvider;
