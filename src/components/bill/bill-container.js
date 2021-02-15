import React from 'react';
import {Link} from 'gatsby';
import {shape, string} from 'prop-types';
import useConfig from '../../providers/config-provider/use-config';

const BillContainer = ({content}) => {
  const {splitBillEnabled} = useConfig();
  return (
    <div>
      <h1>{content.title}</h1>
      {splitBillEnabled && (
        <div>
          <Link to="split-bill">go to split bill</Link>
        </div>
      )}
    </div>
  );
};

BillContainer.propType = {
  content: shape({
    title: string,
  }).isRequired,
};

export default BillContainer;
