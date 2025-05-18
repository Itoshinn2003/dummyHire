import React from 'react';
import Link from 'next/link';
export default async function StudentProfile({ params }: { params: { id: string } }) {
  let studentId = params.id;
  let student: null | StudentApiResponse = null;
  try {
    const response = await fetch(`http://api:3000/api/students/${studentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    student = data.student;
    console.log(student);
  } catch (error) {
    console.error('Request failed', error);
  }
  return (
    <div className="container my-5" style={{ maxWidth: '700px' }}>
      <div className="text-center mb-4">
        <h2>{student?.user_name}</h2>
        <p className="text-muted">
          {student?.university_name}/ {student?.department}/ {student?.grade}年
        </p>
      </div>

      <div className="mb-5">
        <h5>自己紹介</h5>
        <p>{student?.profile_text}</p>
      </div>
      <div className="mb-5">
        <h5>インターンで経験したいこと/自己PR</h5>
        <p>{student?.self_pr || '自己PRがありません'}</p>
      </div>

      <div className="mb-4">
        <ul className="list-unstyled">
          <li>
            <strong>希望職種：</strong> {student?.desired_job}
          </li>
          <li>
            <strong>居住地：</strong> {student?.region}
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <div className="mb-5">
          <h5>ポートフォリオ</h5>
          <a href={student?.portfolio} target="_blank" rel="noopener noreferrer">
            {student?.portfolio || 'GitHubアカウント未登録'}
          </a>
        </div>
        <div>
          <h5>Githubアカウント</h5>
          <a href={student?.github} target="_blank" rel="noopener noreferrer">
            {student?.github || 'ポートフォリオ未登録'}
          </a>
        </div>
      </div>

      <div className="text-center">
        <Link href={`/company/message/${studentId}`} className="btn btn-primary">
          メッセージを送る
        </Link>
      </div>
    </div>
  );
}
