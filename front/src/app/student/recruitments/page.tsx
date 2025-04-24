export default function Recruitments() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">インターン募集一覧</h2>
      {/* 絞り込みフォーム */}
      <form className="row g-3 mb-4">
        <div className="col-md-4">
          <label htmlFor="region" className="form-label">
            地域
          </label>
          <select className="form-select" id="region">
            <option>すべて</option>
            <option>東京都</option>
            <option>大阪府</option>
            <option>愛知県</option>
            <option>福岡県</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="duration" className="form-label">
            期間
          </label>
          <select className="form-select" id="duration">
            <option>すべて</option>
            <option>1ヶ月〜</option>
            <option>3ヶ月〜</option>
            <option>6ヶ月〜</option>
          </select>
        </div>
        <div className="col-md-4 d-flex align-items-end">
          <button type="submit" className="btn btn-outline-primary w-100">
            絞り込む
          </button>
        </div>
      </form>

      <div className="row g-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="col-12" key={index}>
            <div className="card shadow-sm">
              <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
                <div>
                  <h5 className="card-title mb-1">インターン募集 {index + 1}</h5>
                  <p className="card-text mb-1">企業名：DummyCompany {index + 1}</p>
                  <p className="card-text mb-1">勤務地：東京都</p>
                  <p className="card-text text-muted mb-0">期間：1ヶ月〜</p>
                </div>
                <a href="#" className="btn btn-primary mt-3 mt-md-0">
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
