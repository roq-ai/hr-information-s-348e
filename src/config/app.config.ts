interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View company profiles', 'View employee profiles'],
  ownerAbilities: ['Manage company profile', 'Invite Admins to the system'],
  getQuoteUrl: 'https://app.roq.ai/proposal/910b0a1a-37aa-4e2b-abab-1c1ea869af31',
};
