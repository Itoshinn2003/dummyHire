'use client';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import StudentSearchForm from '@/app/components/StudentSearchForm';
import StudentSearchResult from '@/app/components/StudentSearchResult';
import { useRouter } from 'next/navigation';
export default function Students() {
  let router = useRouter();
  if (!Cookies.get('company_id')) {
    router.push('/signin/company');
  }
  const [students, setStudents] = useState<StudentSearchApiResponse[] | null>();
  const handleValueChange = (students: StudentSearchApiResponse[]) => {
    setStudents(students);
  };
  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4">学生一覧</h2>
        <StudentSearchForm handleValueChange={handleValueChange}></StudentSearchForm>
        <StudentSearchResult students={students}></StudentSearchResult>
      </div>
    </>
  );
}
