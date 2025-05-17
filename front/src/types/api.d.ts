type StudentApiResponse = {
  user_name: string;
  university_name: string;
  department: string;
  profile_text: string;
  self_pr: string;
  grade: number;
  region: string;
  desired_job: string;
  github: string;
  portfolio: string;
};

type CompanyApiResponse = {
  employee: number;
  established: string;
  location: string;
  mail: string;
  name: string;
  official_site: string;
  profile_text: string;
  interns: Intern[];
};

type Intern = {
  id: number;
  title: string;
  salary: string;
  job: string;
  location: string;
};

type InternApiResponse = {
  company_id: string;
  title: string;
  job: string;
  intern_text: string;
  terms: string;
  selection: string;
  salary: number;
  location: string;
  likes: {
    student_id: string;
    student: {
      user_name: string;
      university_name: string;
      department: string;
      grade: number;
      desired_job: string;
      region: string;
    };
  }[];
};

type InternSearchApiResponse = {
  id: number;
  title: string;
  location: string;
  salary: number;
  company_id: number;
  company: {
    name: string;
  };
};

type StudentSearchApiResponse = {
  id: number;
  user_name: string;
  university_name: string;
  department: number;
  grade: number;
  desired_job: string;
  region: string;
};
