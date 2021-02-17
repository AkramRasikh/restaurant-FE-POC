import React from 'react';
import {render} from '@testing-library/react';
import ConfigProvider from '../providers/config-provider';
import SocketProvider from '../providers/socket-provider';

export default ({page, configProps = {}}) => {
  const pageContext = {
    config: {
      features: {
        orderEnabled: true,
        payEnabled: true,
        splitBillEnabled: true,
      },
      ...configProps,
    },
  };

  return render(
    <ConfigProvider pageContext={pageContext}>
      <SocketProvider>{page}</SocketProvider>
    </ConfigProvider>,
  );
};
