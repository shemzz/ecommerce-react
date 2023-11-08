
import {
  ADD_ORDER,
  ADD_ORDER_SUCCESS,
  GET_ORDERS_SUCCESS,
  GET_ORDERS
} from '@/constants/constants';

export const getOrders = (lastRef) => ({
  type: GET_ORDERS,
  payload: lastRef
});

export const getOrdersSuccess = (orders) => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders
});

export const addOrder = (order) => ({
  type: ADD_ORDER,
  payload: order
});

export const addOrderSuccess = (order) => ({
  type: ADD_ORDER_SUCCESS,
  payload: order
});
