import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function MessageListToCompany() {
  let companies: null | MessageListToCompanyApiResponse[] = null;
  const cookieStore = await cookies();
  const studentId = cookieStore.get('student_id')?.value;
  if (!studentId) {
    redirect('/signin/student');
  }
  try {
    const response = await fetch('http://api:3000/api/messages/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: 'Student', student_id: studentId }),
    });
    const data = await response.json();
    companies = data.companies;
  } catch (error) {
    console.error('Request failed', error);
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">メッセージ一覧</h2>

      {companies?.map((company, index) => (
        <div className="card mb-3 shadow-sm" key={index}>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title mb-1">{company.name}</h5>
            </div>
            <Link href={`/student/message/${company.id}`} className="btn btn-outline-primary">
              チャットを開く
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
