import React from 'react';
import {Link} from 'gatsby';
import useConfig from '../../providers/config-provider/use-config';
import useContent from '../../content/content-provider/use-content';

const BillContainer = () => {
  const {
    features: {splitBillEnabled},
  } = useConfig();
  const content = useContent();
  console.log('content: ', content);
  return (
    <div>
      <h1>Bill</h1>
      {splitBillEnabled && (
        <div>
          <Link to="split-bill">go to split bill</Link>
        </div>
      )}
    </div>
  );
};

export default BillContainer;
