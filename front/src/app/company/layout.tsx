'use client';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            DummyHire
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href={'/company/students'} className="nav-link">
                  学生検索
                </Link>
              </li>
              <li className="nav-item">
                <Link href={'/company/profile'} className="nav-link">
                  プロフィール
                </Link>
              </li>
              <li className="nav-item">
                <Link href={'/company/message'} className="nav-link">
                  メッセージ
                </Link>
              </li>
              <li className="nav-item">
                <Link href={'/company/recruit'} className="nav-link">
                  募集作成
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <>{children}</>
    </div>
  );
}
