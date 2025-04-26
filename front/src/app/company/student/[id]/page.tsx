// 学生の個々のプロフィール見るページ
import React from 'react';

export default function StudentProfile() {
  return (
    <div className="container my-5" style={{ maxWidth: '700px' }}>
      {/* ヘッダー */}
      <div className="text-center mb-4">
        <img
          src="https://via.placeholder.com/100"
          alt="プロフィール画像"
          className="rounded-circle mb-3"
        />
        <h2>田中 花子</h2>
        <p className="text-muted">東京大学 / 3年生 / 情報工学専攻</p>
      </div>

      {/* 自己紹介 */}
      <div className="mb-4">
        <h5>自己紹介</h5>
        <p>
          現在、大学で情報工学を学んでいます。ReactやNode.jsを用いたWebアプリ開発に興味があり、
          将来的にはフロントエンドエンジニアとして活躍したいと考えています。
        </p>
      </div>

      {/* スキル */}
      <div className="mb-4">
        <h5>スキル</h5>
        <div className="d-flex flex-wrap gap-2">
          <span className="badge bg-secondary">HTML</span>
          <span className="badge bg-secondary">CSS</span>
          <span className="badge bg-secondary">JavaScript</span>
          <span className="badge bg-secondary">React</span>
          <span className="badge bg-secondary">Figma</span>
        </div>
      </div>

      {/* 希望職種・居住地 */}
      <div className="mb-4">
        <h5>希望条件</h5>
        <ul className="list-unstyled">
          <li>
            <strong>希望職種：</strong> フロントエンドエンジニア
          </li>
          <li>
            <strong>居住地：</strong> 東京都
          </li>
        </ul>
      </div>

      {/* ポートフォリオ */}
      <div className="mb-4">
        <h5>ポートフォリオ</h5>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          https://example.com
        </a>
      </div>

      {/* アクションボタン */}
      <div className="text-center">
        <button className="btn btn-primary">メッセージを送る</button>
      </div>
    </div>
  );
}
