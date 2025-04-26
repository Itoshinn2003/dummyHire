'use client';
import { useState } from 'react';

export default function ProfileEdit() {
  const [name, setName] = useState('山田 太郎');
  const [university, setUniversity] = useState('東京大学 工学部 3年');
  const [profileText, setProfileText] = useState(
    '情報系の学生で、現在はWebアプリケーション開発を学んでいます。チーム開発やUI/UXに興味があります。'
  );
  const [jobPreference, setJobPreference] = useState({
    engineer: true,
    designer: false,
    marketing: false,
  });
  const [github, setGithub] = useState('https://github.com/example');
  const [portfolio, setPortfolio] = useState('https://yourportfolio.com');

  const handleJobChange = (event) => {
    const { name, checked } = event.target;
    setJobPreference((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>プロフィール編集</h2>
        <button className="btn btn-outline-secondary">保存</button>
      </div>

      <div className="row g-4">
        <div className="col-md-3 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="プロフィール写真"
            className="rounded-circle img-fluid mb-3"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h4 className="mb-1">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </h4>
          <p className="text-muted">
            <input
              type="text"
              className="form-control"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </p>
        </div>

        <div className="col-md-9">
          <div className="mb-3">
            <h5>自己紹介</h5>
            <textarea
              className="form-control"
              rows="5"
              value={profileText}
              onChange={(e) => setProfileText(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <h5>インターンで経験したいこと</h5>
            <textarea
              className="form-control"
              rows="5"
              value={profileText}
              onChange={(e) => setProfileText(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <h5>希望職種</h5>
            <div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="engineer"
                  name="engineer"
                  checked={jobPreference.engineer}
                  onChange={handleJobChange}
                />
                <label className="form-check-label" htmlFor="engineer">
                  エンジニア
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="designer"
                  name="designer"
                  checked={jobPreference.designer}
                  onChange={handleJobChange}
                />
                <label className="form-check-label" htmlFor="designer">
                  デザイナー
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="marketing"
                  name="marketing"
                  checked={jobPreference.marketing}
                  onChange={handleJobChange}
                />
                <label className="form-check-label" htmlFor="marketing">
                  マーケティング
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="marketing"
                  name="marketing"
                  checked={jobPreference.marketing}
                  onChange={handleJobChange}
                />
                <label className="form-check-label" htmlFor="marketing">
                  営業
                </label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h5>GitHub アカウント</h5>
            <input
              type="url"
              className="form-control"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <h5>ポートフォリオ</h5>
            <input
              type="url"
              className="form-control"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
