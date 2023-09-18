const mapping: Record<string, string> = {
  companies: 'company',
  customers: 'customer',
  documents: 'document',
  employees: 'employee',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
