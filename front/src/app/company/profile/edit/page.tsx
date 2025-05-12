import Image from 'next/image';
import { cookies } from 'next/headers';
import CompanyProfileEditForm from '@/app/components/CompanyProfileEditForm';
export default async function companyProgileEdit() {
  let company: CompanyApiResponse | null = null;
  const cookieStore = await cookies();
  const companyId = cookieStore.get('company_id')?.value;
  if (companyId !== undefined) {
    try {
      const response = await fetch('http://api:3000/api/company/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: companyId }),
      });
      const data = await response.json();
      company = data.company;
      console.log(company);
    } catch (error) {
      console.error('Request failed', error);
    }
    return <CompanyProfileEditForm company={company}></CompanyProfileEditForm>;
  }
}
