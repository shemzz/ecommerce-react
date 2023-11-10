import { useScrollTop } from '@/hooks';
import PropType from 'prop-types';
import React from 'react';

const Thanks = ({ history }) => {
  useScrollTop();

  return (
    <div className="page-not-found" style={{height: '60vh', textAlign: 'center'}}>
      <h1>Thanks for shopping with us! you will get an reciept in your email shortly</h1>
      <br />
      <button
        className="button"
        onClick={() => history.push('/')}
        type="button"
      >
        Continue shopping
      </button>
    </div>
  );
};

Thanks.propTypes = {
  history: PropType.shape({
    push: PropType.func
  }).isRequired
};

export default Thanks;
