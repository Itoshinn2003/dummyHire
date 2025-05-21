import ChatRoomToStudentForm from '@/app/components/ChatRoomToStudentForm';
import MessageFormToStudent from '@/app/components/MessageFormToStudent';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function MessageToStudent({ params }: { params: { id: string } }) {
  const cookieStore = await cookies();
  const companyId = cookieStore.get('company_id')?.value;
  const studentId = params.id;
  let messageData: MessageApiResponse | null = null;
  if (!companyId) {
    redirect('/signin/company');
  }
  try {
    const response = await fetch('http://api:3000/api//messages/chatroom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: 'Company', company_id: companyId, student_id: studentId }),
    });
    messageData = await response.json();
    console.log(messageData?.messages);
  } catch (error) {
    console.error('Request failed', error);
  }
  return (
    <>
      <ChatRoomToStudentForm
        company_id={companyId}
        student_id={studentId}
        messageData={messageData}
      ></ChatRoomToStudentForm>
      <MessageFormToStudent company_id={companyId} student_id={studentId}></MessageFormToStudent>
    </>
  );
}
