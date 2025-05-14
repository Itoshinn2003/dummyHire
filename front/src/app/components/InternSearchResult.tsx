export default function InternSearchResult(props: any) {
  return (
    <div className="row g-4">
      {props.interns.map((intern: InternSearchApiResponse) => (
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
              <div>
                <h5 className="card-title mb-1">{intern.title}</h5>
                <p className="card-text mb-1">企業名：{intern.company.name}</p>
                <p className="card-text mb-1">勤務地：{intern.location}</p>
                <p className="card-text text-muted mb-0">時給: {intern.salary}円</p>
              </div>
              <a href="#" className="btn btn-primary mt-3 mt-md-0">
                詳細を見る
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
