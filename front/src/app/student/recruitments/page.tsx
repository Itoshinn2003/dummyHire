'use client';
import React, { useState } from 'react';

import InternSearchForm from '@/app/components/InternSearchForm';
import InternSearchResult from '@/app/components/InternSearchResult';
export default function Recruitments() {
  const [interns, setInterns] = useState<InternSearchApiResponse[]>([]);
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
