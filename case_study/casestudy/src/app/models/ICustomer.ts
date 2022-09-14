import {ICustomerType} from './ICustomerType';

export interface ICustomer {
  id?: number;
  type?: ICustomerType;
  name?: string;
  birthday?: string;
  gender?: number;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
}
