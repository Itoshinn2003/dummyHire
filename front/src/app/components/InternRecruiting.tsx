'use client';
import Cookies from 'js-cookie';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { destroy } from '@/api/intern';
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

      <div className="mb-5">
        <h5>応募している学生一覧</h5>
        <div className="row g-4">
          {intern?.likes.map((likeuser, index) => (
            <div className="col-12" key={index}>
              <div className="card shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    {/* 名前 */}
                    <h5 className="card-title mb-1">{likeuser.student.user_name}</h5>
                    {/* 大学学部学年 */}
                    <p className="card-text mb-1">
                      {likeuser.student.university_name}/{likeuser.student.department}/
                      {likeuser.student.grade}年
                    </p>
                    {/* 希望勤務地 */}
                    <p className="card-text mb-1">希望職種: {likeuser.student.desired_job}</p>
                    <p className="card-text text-muted mb-0">
                      住んでいる場所: {likeuser.student.region}
                    </p>
                  </div>
                  <Link
                    href={`/company/student/${likeuser.student_id}`}
                    className="btn btn-primary mt-3 mt-md-0"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
