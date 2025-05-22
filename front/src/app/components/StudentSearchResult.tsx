'use client';
import Link from 'next/link';

export default function StudentSearchResult(props: any) {
  return (
    <div className="row g-4">
      {props.students == null ? (
        ''
      ) : props.students.length > 0 ? (
        props.students.map((student: StudentSearchApiResponse) => (
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
                <div>
                  <h5 className="card-title mb-1">{student.user_name}</h5>
                  <p className="card-text mb-1">
                    所属：{student.university_name}/ {student.department}/ {student.grade}年
                  </p>
                  <p className="card-text text-muted mb-0">希望職種: {student.desired_job}</p>
                  <p className="card-text text-muted mb-0">住んでいる場所: {student.region}</p>
                </div>
                <Link
                  href={`/company/student/${student.id}`}
                  className="btn btn-primary mt-3 mt-md-0"
                >
                  プロフィールを見る
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>検索結果なし</p>
      )}
    </div>
  );
}
