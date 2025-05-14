import Image from 'next/image';
import { cookies } from 'next/headers';
import StudentProfileEditForm from '@/app/components/StudentProfileEditForm';
export default async function studentProfileEdit() {
  let student: StudentApiResponse | null = null;
  const cookieStore = await cookies();
  const studentId = cookieStore.get('student_id')?.value;
  if (studentId !== undefined) {
    try {
      const response = await fetch('http://api:3000/api/students/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: studentId }),
      });

      const data = await response.json();
      student = data.student;
    } catch (error) {
      console.error('Request failed', error);
    }
    return <StudentProfileEditForm student={student}></StudentProfileEditForm>;
  }
}
