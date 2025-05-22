import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function MessageListToStudent() {
  let students: null | MessageListToStudentApiResponse[] = null;
  const cookieStore = await cookies();
  const companyId = cookieStore.get('company_id')?.value;
  if (!companyId) {
    redirect('/signin/company');
  }
  try {
    const response = await fetch('http://api:3000/api/messages/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: 'Company', company_id: companyId }),
    });
    const data = await response.json();
    students = data.students;
    console.log(students);
  } catch (error) {
    console.error('Request failed', error);
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">メッセージ一覧</h2>

      {students?.map((student, index) => (
        <div className="card mb-3 shadow-sm" key={index}>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title mb-1">{student.user_name}</h5>
            </div>
            <Link href={`/company/message/${student.id}`} className="btn btn-outline-primary">
              チャットを開く
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
