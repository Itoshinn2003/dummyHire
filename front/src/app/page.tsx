import style from '../styles/styles.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <h1 className="m-0">DummyHire</h1>
          </div>
          <div className="d-flex">
            <button className="btn btn-outline-light mx-2">
              <Link href={'/signin/student'} className="nav-link">
                学生ログイン
              </Link>
            </button>
            <button className="btn btn-outline-light">
              <Link href={'/signin/company'} className="nav-link">
                企業ログイン
              </Link>
            </button>
          </div>
        </div>
      </header>
      <main
        className={`container-fluid text-center ${style.mainBackground} min-vh-100 d-flex flex-column justify-content-center w-100`}
      >
        <button className="btn btn-light mx-auto w-25 px-4 py-2 border border-dark">
          <Link href={'/signup/student'} className="nav-link">
            学生新規登録
          </Link>
        </button>
      </main>
    </>
  );
}
