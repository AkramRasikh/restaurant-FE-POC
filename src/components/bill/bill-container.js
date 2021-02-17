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
          <Link to="split-bill">{content.toSplitBill}</Link>
        </div>
      )}
    </div>
  );
};

BillContainer.propTypes = {
  content: shape({
    title: string.isRequired,
    toSplitBill: string.isRequired,
  }).isRequired,
};

export default BillContainer;
