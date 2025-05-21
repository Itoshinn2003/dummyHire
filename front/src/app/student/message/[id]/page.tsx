import ChatRoomToCompany from '@/app/components/ChatRoomToCompany';
import MessageFormToCompany from '@/app/components/MessageFormToCompany';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function MessageToCompany({ params }: { params: { id: string } }) {
  const cookieStore = await cookies();
  const studentId = cookieStore.get('student')?.value;
  const companyId = params.id;
  let messageData: MessageApiResponse | null = null;
  if (!studentId) {
    redirect('/signin/student');
  }
  try {
    const response = await fetch('http://api:3000/api/messages/chatroom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: 'Student', company_id: companyId, student_id: studentId }),
    });
    messageData = await response.json();
  } catch (error) {
    console.error('Request failed', error);
  }
  return (
    <>
      <ChatRoomToCompany
        company_id={companyId}
        student_id={studentId}
        messageData={messageData}
      ></ChatRoomToCompany>
      <MessageFormToCompany company_id={companyId} student_id={studentId}></MessageFormToCompany>
    </>
  );
}
