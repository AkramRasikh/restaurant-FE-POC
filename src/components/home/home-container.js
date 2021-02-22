import React, {useEffect} from 'react';
import {arrayOf, func, object, shape, string} from 'prop-types';

const HomeContainer = ({content, orders, getOrders}) => {
  const handleClick = () => {
    getOrders();
  };
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div data-testid="homeId">
      <div>{content.title}</div>
      <div>
        <button type="button" onClick={handleClick}>
          {content.getOrders}
        </button>
        {!!orders.length && (
          <>
            <div>{content.orders}</div>
            {orders.map(({id, name, price}) => {
              return (
                <div key={id}>
                  <p>{name}</p>
                  <p>
                    {content.priceText}
                    {price}
                  </p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

HomeContainer.propTypes = {
  content: shape({
    title: string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  orders: arrayOf(object),
  getOrders: func.isRequired,
};

HomeContainer.defaultProps = {
  orders: [],
};

export default HomeContainer;
