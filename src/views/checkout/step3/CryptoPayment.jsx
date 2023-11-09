import React, { useRef, useEffect } from 'react';
import { Field, useFormikContext } from 'formik';
import { CustomInput } from '@/components/formik';
import axios from 'axios';
import BTCPayButton from './BtcPay';

const CryptoPayment = ({ subtotal }) => {
  const { values, setValues } = useFormikContext();
  const checkboxContainerRef = useRef(null);

  const onCryptoModeChange = (e) => {
    if (e.target.checked) {
      setValues({ ...values, type: 'crypto' });
    }
  };

  return (
    <>
      <div
        className={`checkout-field margin-0 ${
          values.type === 'crypto' ? 'is-selected-payment' : ''
        }`}
      >
        {/* ---- CHECKBOX TOGGLER ------ */}
        <div className="checkout-field margin-0">
          <div className="checkout-checkbox-field" ref={checkboxContainerRef}>
            <input
              checked={values.type === 'crypto'}
              id="modeCrypto"
              name="type"
              onChange={onCryptoModeChange}
              type="radio"
            />
            <label className="d-flex w-100" htmlFor="modeCrypto">
              <div className="d-flex-grow-1 margin-left-s">
                <h4 className="margin-0">Crypto</h4>
                <span className="text-subtle d-block margin-top-s">
                  Pay with Bitcoin, Ethereum, BNB, USDT
                </span>
              </div>
              <div className="crypto usdt" title="usdt" />
              <div className="crypto btc" title="btc" />
              <div className="crypto eth" title="eth" />
              <div className="crypto bnb" title="bnb" />
            </label>
          </div>
        </div>
        {values.type === 'crypto' && (
          <div className="checkout-collapse-sub">
            <span className="d-block padding-s text-center">
              Accepted Currencies
            </span>
            <div className="checkout-cards-accepted d-flex-center">
              {/* <div className="crypto usdt" title="usdt" /> */}
              <div className="crypto btc" title="btc" />
              {/* <div className="crypto eth" title="eth" /> */}
              {/* <div className="crypto bnb" title="bnb" /> */}
            </div>

            <div className='pay-button'>
              <BTCPayButton amount={subtotal} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CryptoPayment;
