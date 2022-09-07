import {ICustomer} from './ICustomer';
import {IFacility} from './IFacility';

export interface IContract {
  id?: number;
  startDate?: string;
  endDate?: string;
  deposit?: number;
  totalMoney?: number;
  customer?: ICustomer;
  facility?: IFacility;
}
