import Image from 'next/image';
import logo from '@/images/hope.jpeg';
export default function Company() {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-end mb-3">
        <a href="#" className="btn btn-outline-secondary">
          編集する
        </a>
      </div>

      <div className="text-center mb-5">
        <Image src={logo} alt="企業ロゴ" className="rounded-circle mb-3" />
        <h2>DummyCompany 株式会社</h2>
        <p className="text-muted">Web・IT業界 / 東京都渋谷区</p>
      </div>

      <div className="mb-4">
        <h5>会社紹介</h5>
        <p>
          DummyCompanyは、スタートアップ・中小企業向けにクラウドソリューションを提供するテックカンパニーです。
          UI/UXにこだわった開発を強みとし、グローバルに活躍するエンジニアチームを持っています。
        </p>
      </div>

      <div className="mb-4">
        <h5>基本情報</h5>
        <ul className="list-unstyled">
          <li>
            <strong>所在地：</strong> 東京都渋谷区桜丘町99-9
          </li>
          <li>
            <strong>設立：</strong> 2015年4月
          </li>
          <li>
            <strong>従業員数：</strong> 50名
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <a href="https://dummycompany.com" target="_blank">
          公式サイト
        </a>
      </div>

      <div className="mb-5">
        <h5>現在募集中のインターン</h5>
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
    </div>
  );
}
