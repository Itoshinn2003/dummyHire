export default function Recruiting() {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-end mb-3">
        <a href="#" className="btn btn-outline-secondary">
          募集を停止する
        </a>
      </div>
      <div className="mb-4">
        <h2>フロントエンドエンジニア インターン募集</h2>
        <p className="text-muted">DummyCompany株式会社</p>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <strong>勤務地：</strong> 東京都渋谷区
        </div>
        <div className="col-md-4 mb-2">
          <strong>職種：</strong> エンジニア
        </div>
        <div className="col-md-4 mb-2">
          <strong>時給：</strong> 1200~
        </div>
      </div>

      <div className="mb-4">
        <h5>業務内容</h5>
        <p>
          自社サービスのフロントエンド開発に携わっていただきます。
          React/Next.jsを使ったUIの構築、改善を行っていただきます。
        </p>
      </div>

      <div className="mb-4">
        <h5>応募資格</h5>
        <ul>
          <li>HTML/CSS/JavaScriptの基礎知識がある方</li>
          <li>React経験者優遇</li>
          <li>チーム開発に興味のある方</li>
        </ul>
      </div>
      <div className="mb-4">
        <h5>選考フロー</h5>
        <p>一回の面接</p>
      </div>
    </div>
  );
}
