import {shape, string} from 'prop-types';
import React from 'react';

const SplitBillContainer = ({content}) => (
  <div>
    <h1>{content.title}</h1>
  </div>
);

SplitBillContainer.propTypes = {
  content: shape({
    title: string,
  }).isRequired,
};

export default SplitBillContainer;
