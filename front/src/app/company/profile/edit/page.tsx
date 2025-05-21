import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import CompanyProfileEditForm from '@/app/components/CompanyProfileEditForm';
export default async function companyProgileEdit() {
  let company: CompanyApiResponse | null = null;
  const cookieStore = await cookies();
  const companyId = cookieStore.get('company_id')?.value;
  if (!companyId) {
    redirect('/signin/company');
  }
  try {
    const response = await fetch('http://api:3000/api/companies/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: companyId }),
    });
    const data = await response.json();
    company = data.company;
  } catch (error) {
    console.error('Request failed', error);
  }
  return <CompanyProfileEditForm company={company}></CompanyProfileEditForm>;
}
