import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/hope.jpeg';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
export default async function Profile() {
  let student: null | StudentApiResponse = null;
  const cookieStore = await cookies();
  const studentId = cookieStore.get('student_id')?.value;
  if (!studentId) {
    redirect('/signin/student');
  }
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
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>プロフィール</h2>
        <Link className="btn btn-outline-secondary" href="/student/profile/edit">
          編集
        </Link>
      </div>

      <div className="row g-4">
        <div className="col-md-3 text-center">
          <Image
            src={logo}
            alt="企業ロゴ"
            className="rounded-circle mb-3"
            width={120}
            height={120}
          />
          <h4 className="mb-1">{student?.user_name}</h4>
          <p className="text-muted">
            {student?.university_name}/{student?.department}/{student?.grade}年
          </p>
          <p>{student?.region}</p>
        </div>

        <div className="col-md-9">
          <div className="mb-5">
            <h5>自己紹介</h5>
            <p>{student?.profile_text || '自己紹介がありません'}</p>
          </div>
          <div className="mb-5">
            <h5>インターンで経験したいこと/自己PR</h5>
            <p>{student?.self_pr || '自己PRがありません'}</p>
          </div>
          <div className="mb-5">
            <h5>希望職種</h5>
            <span className="badge bg-primary me-2">{student?.desired_job}</span>
          </div>

          <div className="mb-3">
            <h5>GitHub アカウント</h5>
            <a href={student?.github} target="_blank" rel="noopener noreferrer">
              {student?.github || 'GitHubアカウント未登録'}
            </a>
          </div>

          <div className="mb-3">
            <h5>ポートフォリオ</h5>
            <a href={student?.portfolio} target="_blank" rel="noopener noreferrer">
              {student?.portfolio || 'ポートフォリオ未登録'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
