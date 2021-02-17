import React from 'react';
import {fireEvent} from '@testing-library/react';
// import socket from 'socket.io-client';
import Home from '../../pages';
import {attributes as frontmatter} from '../../content/content-markdown/home.md';
import renderWithProviders from '../../test-utils/render-with-providers';

jest.mock('socket.io-client');

const renderComponent = (configProps = {}) => {
  return renderWithProviders({
    page: <Home data={{markdownRemark: {frontmatter}}} />,
    configProps,
  });
};

test('should have content', () => {
  const {getByText} = renderComponent();
  expect(getByText(frontmatter.title)).toBeDefined();
});

test.only('should get basket orders', async () => {
  const {getByText, findByTestId} = renderComponent();
  await findByTestId('homeId');
  fireEvent.click(getByText(frontmatter.getOrders));
  // expect(socket.emit).toBeCalled();
  expect(getByText('burger')).toBeDefined();
});
