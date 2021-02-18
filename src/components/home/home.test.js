import React from 'react';
import {fireEvent} from '@testing-library/react';
import Home from '../../pages';
import {attributes as frontmatter} from '../../content/content-markdown/home.md';
import renderWithProviders from '../../test-utils/render-with-providers';

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

test.only('should get basket orders', () => {
  const {getByText} = renderComponent();
  fireEvent.click(getByText(frontmatter.getOrders));
  expect(getByText('burger')).toBeDefined();
});
