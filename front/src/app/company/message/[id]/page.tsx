import ChatRoomToStudentForm from '@/app/components/ChatRoomToStudentForm';
import MessageFormToStudent from '@/app/components/MessageFormToStudent';
import { cookies } from 'next/headers';
import { useRouter } from 'next/navigation';

export default async function MessageToStudent({ params }: { params: { id: string } }) {
  let router = useRouter();
  const cookieStore = await cookies();
  const companyId = cookieStore.get('company_id')?.value;
  const studentId = params.id;
  if (!companyId) {
    router.push('signin/company');
  }
  try {
    const response = await fetch('http://api:3000/api//messages/chatroom', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: 'Company', company_id: companyId, student_id: studentId }),
    });
    const data = await response.json();
  } catch (error) {
    console.error('Request failed', error);
  }
  return (
    <>
      <ChatRoomToStudentForm></ChatRoomToStudentForm>
      <MessageFormToStudent company_id={companyId} student_id={studentId}></MessageFormToStudent>
    </>
  );
}
