import Image from 'next/image';
export default function Recruitments() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">学生一覧</h2>
      {/* 絞り込みフォーム */}
      <form className="row g-3 mb-4">
        <div className="col-md-4">
          <label htmlFor="region" className="form-label">
            地域
          </label>
          <select className="form-select" id="region">
            <option>全て</option>
            <option>北海道</option>
            <option>東北</option>
            <option>関東</option>
            <option>中部</option>
            <option>近畿</option>
            <option>中国・四国</option>
            <option>九州</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="duration" className="form-label">
            職種
          </label>
          <select className="form-select" id="duration">
            <option>エンジニア</option>
            <option>デザイナー</option>
            <option>営業</option>
            <option>マーケティング</option>
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
          <div key={index} className="card my-5 col-4">
            <Image
              src="https://via.placeholder.com/286x180"
              alt="プロフィール画像"
              className="card-img-top"
              layout="intrinsic" // アスペクト比に基づいてサイズを自動的に調整
            />
            <div className="card-body text-center">
              <h5 className="text-start">
                フロントエンドエンジニア。ReactとUIデザインが好きです。
              </h5>
              <p className="text-start">山田太郎</p>
              <p className="text-start">特技: サッカー</p>
              <p className="text-start">希望職種: エンジニア・デザイナー</p>
              <a href="#" className="btn btn-primary">
                プロフィールを見る
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
