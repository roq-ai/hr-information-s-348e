import { DocumentInterface } from 'interfaces/document';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  job_title: string;
  department: string;
  start_date: any;
  end_date?: any;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  document?: DocumentInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    document?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  department?: string;
  user_id?: string;
  company_id?: string;
}
