'use client';
import React, { useState } from 'react';

import StudentSearchForm from '@/app/components/StudentSearchForm';
import StudentSearchResult from '@/app/components/StudentSearchResult';
export default function Students() {
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
