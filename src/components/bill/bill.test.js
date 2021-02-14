import React from 'react';
import {render} from '@testing-library/react';
import Bill from './bill-container';
import {attributes as content} from '../../content/content-markdown/bill.md';
// import ContentProvider from '../../content/content-provider';
import ConfigProvider from '../../providers/config-provider';

const renderComponent = () =>
  render(
    <ConfigProvider
      features={{
        features: {
          orderEnabled: true,
          payEnabled: true,
          splitBillEnabled: true,
        },
      }}
    >
      <Bill content={content} />
    </ConfigProvider>,
  );

test('should have content', () => {
  const {getByText} = renderComponent();
  expect(getByText(content.title)).toBeDefined();
});
