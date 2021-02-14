import React from 'react';
import {Link} from 'gatsby';
import useConfig from '../../providers/config-provider/use-config';

const BillContainer = ({content}) => {
  const {
    features: {splitBillEnabled},
  } = useConfig();

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

export default BillContainer;
