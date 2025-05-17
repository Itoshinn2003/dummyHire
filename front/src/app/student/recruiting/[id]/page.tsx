import { cookies } from 'next/headers';
import InternLike from '@/app/components/InternLike';
export default async function Recruiting({ params }: { params: { id: string } }) {
  let intern: null | InternApiResponse = null;
  let isLiked: boolean = false;
  const internId = params.id;
  const cookieStore = await cookies();
  const studentId = cookieStore.get('student_id')?.value;

  try {
    const response = await fetch(`http://api:3000/api/interns/${internId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    intern = data.intern;
    if (intern?.likes.length != 0 && studentId != undefined && intern != undefined) {
      isLiked = intern.likes.some((like) => like.student_id == studentId);
    }
  } catch (error) {
    console.error('Request failed', error);
  }

  return (
    <div className="container my-5">
      <InternLike isLiked={isLiked} internId={internId} studentId={studentId}></InternLike>
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
