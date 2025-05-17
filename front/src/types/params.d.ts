type StudentEditFormParams = {
  id: string | undefined;
  userName: string | undefined;
  universityName: string | undefined;
  department: string | undefined;
  profileText: string | undefined;
  selfPR: string | undefined;
  grade: number | undefined;
  region: string | undefined;
  desiredJob: string | undefined;
  github: string | undefined;
  portfolio: string | undefined;
};

type studentParams = {
  userName: String;
  userId: String;
  password: String;
  universityName: String;
  grade: String;
  region: string;
  desiredJob: String;
};

type CompanyEditFormParams = {
  id: string | undefined;
  name: string | undefined;
  mail: string | undefined;
  profileText: string | undefined;
  location: strin | undefined;
  established: string | undefined;
  employee: number | undefined;
  officialSite: string | undefined;
};

type InternParams = {
  companyId: string | undefined;
  title: string | undefined;
  job: string | undefined;
  internText: string | undefined;
  terms: string | undefined;
  selection: string | undefined;
  salary: number | undefined;
  location: string | undefined;
};

type InternSearchParams = {
  location_eq: string;
  job_eq: string;
  salary_gteq: number;
};

type StudentSearchParams = {
  region_eq: string;
  desired_job_eq: string;
};
