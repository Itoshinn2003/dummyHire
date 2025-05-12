import { cookies } from 'next/headers';
export default async function Recruiting({ params }: { params: { id: string } }) {
  let intern: null | InternApiResponse = null;
  const cookieStore = await cookies();
  const companyId = cookieStore.get('company_id')?.value;
  try {
    const response = await fetch('http://api:3000/api/intern/show', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: params.id }),
    });
    const data = await response.json();
    intern = data.intern;
  } catch (error) {
    console.error('Request failed', error);
  }

  async function onDelete() {
    try {
      const response = await fetch('http://api:3000/api/intern/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: params.id }),
      });
    } catch (error) {
      console.error('Request failed', error);
    }
  }
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-end mb-3">
        <button onClick={onDelete} className="btn btn-outline-secondary">
          募集を削除する
        </button>
      </div>
      <div className="mb-4">
        <h2>{intern?.title}</h2>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <strong>勤務地：</strong>{' '}
          {intern?.location === 'hokkaido'
            ? '北海道'
            : intern?.location === 'tohoku'
              ? '東北地方'
              : intern?.location === 'kanto'
                ? '関東地方'
                : intern?.location === 'chubu'
                  ? '中部地方'
                  : intern?.location === 'kansai'
                    ? '関西地方'
                    : intern?.location === 'chugoku'
                      ? '中国地方'
                      : intern?.location === 'shikoku'
                        ? '四国地方'
                        : intern?.location === 'kyushu'
                          ? '九州地方'
                          : '未設定'}
        </div>
        <div className="col-md-4 mb-2">
          <strong>職種：</strong>{' '}
          {intern?.job == 'engineer'
            ? 'エンジニア'
            : intern?.job == 'designer'
              ? 'デザイナー'
              : intern?.job == 'sales'
                ? '営業'
                : 'マーケティング'}
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
