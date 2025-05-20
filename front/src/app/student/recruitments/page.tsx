'use client';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import InternSearchForm from '@/app/components/InternSearchForm';
import InternSearchResult from '@/app/components/InternSearchResult';
export default function Recruitments() {
  const router = useRouter();
  if (!Cookies.get('student_id')) {
    router.push('/signin/student');
  }
  const [interns, setInterns] = useState<InternSearchApiResponse[] | null>();
  const handleValueChange = (interns: InternSearchApiResponse[]) => {
    setInterns(interns);
  };
  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4">インターン募集一覧</h2>
        <InternSearchForm handleValueChange={handleValueChange}></InternSearchForm>
        <InternSearchResult interns={interns}></InternSearchResult>
      </div>
    </>
  );
}
