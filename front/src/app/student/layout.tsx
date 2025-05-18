'use client';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  function handleLogout() {
    Cookies.remove('student_id', { path: '/' });
    router.push('/signin/student');
  }
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
                <Link href={'/student/recruitments'} className="nav-link">
                  インターン検索
                </Link>
              </li>
              <li className="nav-item">
                <Link href={'/student/profile'} className="nav-link">
                  メッセージ
                </Link>
              </li>
              <li className="nav-item">
                <Link href={'/student/profile'} className="nav-link">
                  プロフィール
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link btn btn-link">
                  ログアウト
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <>{children}</>
    </div>
  );
}
