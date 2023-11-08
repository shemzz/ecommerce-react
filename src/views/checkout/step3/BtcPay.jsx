import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addOrder } from '@/redux/actions/orderActions';

const BTCPayButton = ({ amount, orderDetails }) => {
  const dispatch = useDispatch();
  const orderedItems = orderDetails.map(item => {
    return {
        name_lower: item.name_lower,
        quantity: item.quantity,
        id: item.id
    };
});

  const [orderId, setOrderId] = useState('');
  const storeId = "3RHZia37LNK3qxdHqFYCfMT1eSfiRUPa1bd68g6nWWgm";
  const BTCpayDomain = "https://btcpay0.voltageapp.io";
  const apiKey = '6ad7b7362f5e45489407631b7fd0b325b012026c'; 
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `token ${apiKey}`
  }
  const deets =
  {
    "metadata": {
      "orderId": orderId,
      "itemDesc": "Orders from ChristaGold.com",
      "items": orderedItems,
    },
    "checkout": {
      "speedPolicy": "HighSpeed",
      "paymentMethods": [
        "BTC", "SATS"
      ],
      "defautPaymentMethod": "BTC",
      "lazyPaymentMethods": true,
      "paymentTolerance": 20,
      "redirectURL": "https://christagold.com/thank-you",
      "redirectAutomatically": true,
      "requiresRefundEmail": true,
      "checkoutType": "v2"
    },
    "amount": `${amount}`,
    "currency": "USD",
    "additionalSearchTerms": [
      "string"
    ]
  };

  const generatePaymentUrl = async () => {
    try {
      dispatch(addOrder(orderedItems))

      fetch(`${BTCpayDomain}/api/v1/stores/${storeId}/invoices`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(deets)
      })
        .then(resp => resp.json())
        .then(data => {
          window.location.href = data.checkoutLink;
      })
      
    } catch (error) {
      console.error('Error generating payment URL:', error);
    }
  };

  return (
    <div>
      <p>Click the link below to complete your payment</p>
        <img onClick={generatePaymentUrl} src="https://btcpay0.voltageapp.io/img/paybutton/pay.svg" style={{ width:"209px", cursor: "pointer"}} alt="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor" />

    </div>
  );
};

export default BTCPayButton;
