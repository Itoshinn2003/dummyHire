import { useRouter } from 'next/navigation';
import { cookies } from 'next/headers';
export default async function MessageListToCompany() {
  const router = useRouter();
  const cookieStore = await cookies();
  const studentId = cookieStore.get('student_id')?.value;
  if (!studentId) {
    router.push('/signin/student');
  }
  return (
    <div className="container my-5">
      <h2 className="mb-4">メッセージ一覧</h2>

      {Array.from({ length: 5 }).map((_, index) => (
        <div className="card mb-3 shadow-sm" key={index}>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title mb-1">DummyCompany {index + 1}</h5>
              <p className="card-text mb-1 text-muted">
                企業からのメッセージ内容がここに表示されます（ダミー）
              </p>
              <small className="text-muted">2025/04/24</small>
            </div>
            <a href="#" className="btn btn-outline-primary">
              メッセージを見る
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
