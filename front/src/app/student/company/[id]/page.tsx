import Link from 'next/link';
export default async function Company({ params }: { params: { id: string } }) {
  let companyId = params.id;
  let company: null | CompanyApiResponse = null;
  try {
    const response = await fetch(`http://api:3000/api/companies/${companyId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    company = data.company;
  } catch (error) {
    console.error('Request failed', error);
  }
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2>{company?.name}</h2>
        <p className="text-muted">{company?.location}</p>
      </div>

      <div className="mb-4">
        <h5>会社紹介</h5>
        <p>{company?.profile_text}</p>
      </div>

      <div className="mb-4">
        <h5>基本情報</h5>
        <ul className="list-unstyled">
          <li>
            <strong>所在地：</strong> {company?.location}
          </li>
          <li>
            <strong>設立：</strong> {company?.established}年
          </li>
          <li>
            <strong>従業員数：</strong> {company?.employee}名
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <a href={company?.official_site} target="_blank">
          公式サイト
        </a>
      </div>

      <div className="mb-5">
        <h5>現在募集中のインターン</h5>
        <div className="row g-4">
          {company?.interns.map((intern, index) => (
            <div className="col-12" key={index}>
              <div className="card shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <h5 className="card-title mb-1">{intern.title}</h5>
                    <p className="card-text mb-1">職種:{intern.job}</p>
                    <p className="card-text mb-1">
                      勤務地：
                      {intern.location}
                    </p>
                    <p className="card-text text-muted mb-0">時給：{intern.salary}円</p>
                  </div>
                  <Link
                    href={`/student/recruiting/${intern.id}`}
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
