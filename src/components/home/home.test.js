import React from 'react';
import {fireEvent} from '@testing-library/react';
import Home from '../../pages';
import {attributes as frontmatter} from '../../content/content-markdown/home.md';
import renderWithProviders from '../../test-utils/render-with-providers';
import {socketMessages} from '../../utils/socket';
import useSocket from '../../providers/socket-provider/use-socket';

jest.mock('../../providers/socket-provider/use-socket');

afterEach(() => {
  jest.clearAllMocks();
});
const renderComponent = (configProps = {}) => {
  return renderWithProviders({
    page: <Home data={{markdownRemark: {frontmatter}}} />,
    configProps,
  });
};
// mockReturnValue
test('should have content', () => {
  useSocket.mockImplementation(() => ({
    emit: () => {},
    orders: {
      basket: [{id: 1, name: 'chips', price: 200}],
    },
  }));
  const {getByTestId, getByText} = renderComponent();
  expect(getByText(frontmatter.title)).toBeDefined();
  expect(getByTestId('homeId')).toBeDefined();
});

test('should get basket orders', () => {
  useSocket.mockImplementation(() => ({
    emit: () => {},
    orders: {
      basket: [{id: 1, name: 'burger', price: 200}],
    },
  }));
  const {getByText, findByTestId, debug} = renderComponent();
  fireEvent.click(getByText(frontmatter.getOrders));
});
