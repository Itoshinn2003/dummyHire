'use client';
import Cookies from 'js-cookie';
import React from 'react';
import { useRouter } from 'next/navigation';
import { destroy } from '@/api/intern';
import { checkIsOnDemandRevalidate } from 'next/dist/server/api-utils';
export default function InternRecruiting({
  intern,
  internId,
}: {
  intern: null | InternApiResponse;
  internId: string;
}) {
  const router = useRouter();
  function handleDestroy() {
    try {
      destroy(internId);
      router.push('/company/profile');
    } catch (error) {}
  }
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-end mb-3">
        <button onClick={handleDestroy} className="btn btn-outline-secondary">
          募集を削除する
        </button>
      </div>
      <div className="mb-4">
        <h2>{intern?.title}</h2>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <strong>勤務地：</strong> {intern?.location}
        </div>
        <div className="col-md-4 mb-2">
          <strong>職種：</strong> {intern?.job}
        </div>
        <div className="col-md-4 mb-2">
          <strong>時給：</strong> {intern?.salary}円
        </div>
      </div>

      <div className="mb-4">
        <h5>業務内容</h5>
        <p>{intern?.intern_text}</p>
      </div>

      <div className="mb-4">
        <h5>応募資格</h5>
        <p>{intern?.terms}</p>
      </div>
      <div className="mb-4">
        <h5>選考フロー</h5>
        <p>{intern?.selection}</p>
      </div>
    </div>
  );
}
