export default function Likes() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">いいねした募集一覧</h2>
      <div className="row row-cols-1 g-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="col" key={index}>
            <div className="card shadow-sm">
              <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                <div className="mb-3 mb-md-0">
                  <h5 className="card-title">インターン募集 {index + 1}</h5>
                  <p className="card-text mb-1">企業名：DummyCompany {index + 1}</p>
                  <p className="card-text text-muted mb-0">勤務地：東京都｜期間：1ヶ月〜</p>
                </div>
                <a href="#" className="btn btn-outline-primary">
                  詳細を見る
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
