// 募集を作るページ
import React from 'react';

export default function CreateIntern() {
  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">インターン募集作成</h2>

      <form>
        {/* 募集タイトル */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            募集タイトル
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="例：フロントエンドエンジニア募集"
          />
        </div>
        <p>職種</p>
        {/* 業務内容 */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            業務内容
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            placeholder="業務の内容を詳しく記入してください"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="process" className="form-label">
            応募条件
          </label>
          <textarea
            className="form-control"
            id="process"
            rows="3"
            placeholder="例：書類選考 → 面接（1回） → 合否連絡"
          ></textarea>
        </div>

        {/* 選考フロー */}
        <div className="mb-3">
          <label htmlFor="process" className="form-label">
            選考フロー
          </label>
          <textarea
            className="form-control"
            id="process"
            rows="3"
            placeholder="例：書類選考 → 面接（1回） → 合否連絡"
          ></textarea>
        </div>

        {/* 時給 */}
        <div className="mb-3">
          <label htmlFor="wage" className="form-label">
            時給
          </label>
          <input type="number" className="form-control" id="wage" placeholder="例：1200" />
        </div>

        {/* 勤務地 */}
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            勤務地
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="例：東京都渋谷区"
          />
        </div>

        {/* ボタン */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            募集を作成する
          </button>
        </div>
      </form>
    </div>
  );
}
