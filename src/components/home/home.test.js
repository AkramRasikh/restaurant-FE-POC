import React from 'react';
import {fireEvent} from '@testing-library/react';
import Home from '../../pages';
import {attributes as frontmatter} from '../../content/content-markdown/home.md';
import renderWithProviders from '../../test-utils/render-with-providers';
import {socketMessages} from '../../utils/socket';

jest.mock('../../providers/socket-provider/use-socket', () => () => ({
  emit: () => {},
  orders: {
    basket: [{id: 1, name: 'burger', price: 200}],
  },
}));

jest.mock('socket.io-client', () => () => ({
  on: () => {},
  emit: () => {},
}));

const renderComponent = (configProps = {}) => {
  return renderWithProviders({
    page: <Home data={{markdownRemark: {frontmatter}}} />,
    configProps,
  });
};
// mockReturnValue
test('should have content', () => {
  const {getByTestId, getByText} = renderComponent();
  expect(getByText(frontmatter.title)).toBeDefined();
  expect(getByTestId('homeId')).toBeDefined();
});

test('should get basket orders', () => {
  const {getByText, findByTestId, debug} = renderComponent();
  fireEvent.click(getByText(frontmatter.getOrders));
});
