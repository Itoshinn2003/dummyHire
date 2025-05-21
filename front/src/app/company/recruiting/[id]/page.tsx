import InternRecruiting from '@/app/components/InternRecruiting';
export const dynamic = 'force-dynamic';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
export default async function Recruiting({ params }: { params: { id: string } }) {
  let intern: null | InternApiResponse = null;
  const internId = params.id;
  const cookieStore = await cookies();
  const companyId = cookieStore.get('company_id')?.value;
  if (!companyId) {
    redirect('/signin/company');
  }
  try {
    const response = await fetch(`http://api:3000/api/interns/${internId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    intern = data.intern;
  } catch (error) {
    console.error('Request failed', error);
  }
  return <InternRecruiting intern={intern} internId={internId}></InternRecruiting>;
}
