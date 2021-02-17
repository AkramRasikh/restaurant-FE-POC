import React from 'react';
import Bill from './bill-container';
import {attributes as content} from '../../content/content-markdown/bill.md';
import renderWithProviders from '../../test-utils/render-with-providers';

const renderComponent = (configProps = {}) => {
  return renderWithProviders({page: <Bill content={content} />, configProps});
};

test('should have content', () => {
  const {getByText} = renderComponent();
  expect(getByText(content.title)).toBeDefined();
});
