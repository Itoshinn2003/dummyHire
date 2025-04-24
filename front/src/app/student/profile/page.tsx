export default function Profile() {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>プロフィール</h2>
        <button className="btn btn-outline-secondary">編集</button>
      </div>

      <div className="row g-4">
        <div className="col-md-3 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="プロフィール写真"
            className="rounded-circle img-fluid mb-3"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h4 className="mb-1">山田 太郎</h4>
          <p className="text-muted">東京大学 工学部 3年</p>
        </div>

        <div className="col-md-9">
          <div className="mb-3">
            <h5>プロフィール文</h5>
            <p>
              情報系の学生で、現在はWebアプリケーション開発を学んでいます。
              チーム開発やUI/UXに興味があります。
            </p>
          </div>

          <div className="mb-3">
            <h5>希望職種</h5>
            <span className="badge bg-primary me-2">エンジニア</span>
            <span className="badge bg-secondary me-2">デザイナー</span>
            <span className="badge bg-info text-dark">マーケティング</span>
          </div>

          <div className="mb-3">
            <h5>GitHub アカウント</h5>
            <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
              https://github.com/example
            </a>
          </div>

          <div className="mb-3">
            <h5>ポートフォリオ</h5>
            <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
              https://yourportfolio.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
