import { Header } from './header';
import { Paging } from '../paging';

export interface ResponsePaging {
  header: Header;
  data: any[];
  paging: Paging;
}

export interface ResponseVo {
  header: Header;
  data: any;
}

export interface ResponseList {
  header: Header;
  data: any[];
}

export interface ResponseLov {
  header: Header;
  data: LovBase[];
}

export interface LovBase {
  code: string;
  name: string;
}
