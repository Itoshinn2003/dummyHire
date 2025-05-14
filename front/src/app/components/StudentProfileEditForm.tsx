'use client';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { update } from '@/api/student';
export default function StudentProfileEditForm({
  student,
}: {
  student: StudentApiResponse | null;
}) {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const defaultValues = {
    id: Cookies.get('student_id'),
    userName: student?.user_name,
    universityName: student?.university_name,
    department: student?.department,
    profileText: student?.profile_text,
    selfPR: student?.self_pr,
    grade: student?.grade,
    region: student?.region,
    desiredJob: student?.desired_job,
    github: student?.github,
    portfolio: student?.portfolio,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const onSubmit = async (data: StudentEditFormParams) => {
    try {
      await update(data);
      setError('');
      router.push('/student/profile');
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>プロフィール編集</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            名前
          </label>
          <p className="text-danger">{errors.userName?.message}</p>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register('userName', {
              required: '名前は必須入力です',
            })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profile-text" className="form-label">
            プロフィール文章
          </label>
          <p className="text-danger">{errors.profileText?.message}</p>
          <input
            type="text"
            className="form-control"
            id="profile-text"
            {...register('profileText', {
              maxLength: {
                value: 300,
                message: '最大300文字です',
              },
            })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="self-pr" className="form-label">
            インターンで経験したいこと・自己PR
          </label>
          <p className="text-danger">{errors.selfPR?.message}</p>
          <input
            type="text"
            className="form-control"
            id="self-pr"
            {...register('selfPR', {
              maxLength: {
                value: 300,
                message: '最大300文字です',
              },
            })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="university" className="form-label">
            大学
          </label>
          <p className="text-danger">{errors.universityName?.message}</p>
          <input
            type="text"
            className="form-control"
            id="university"
            {...register('universityName', {
              required: '学校名は必須入力です',
            })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            学部
          </label>
          <p className="text-danger">{errors.department?.message}</p>
          <input
            type="text"
            className="form-control"
            id="department"
            {...register('department', {
              required: '学校名は必須入力です',
            })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="grade" className="form-label">
            学年
          </label>
          <p className="text-danger">{errors.grade?.message}</p>
          <select
            className="form-select"
            id="grade"
            {...register('grade', { required: '学年は必須です' })}
          >
            <option value="">選択してください</option>
            <option value="1">1年</option>
            <option value="2">2年</option>
            <option value="3">3年</option>
            <option value="4">4年</option>
            <option value="5">5年</option>
            <option value="6">6年</option>
            <option value="other">その他</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="region" className="form-label">
            住んでいる場所
          </label>
          <p className="text-danger">{errors.region?.message}</p>
          <select
            className="form-select"
            id="region"
            {...register('region', { required: '住んでいる場所は必須です' })}
          >
            <option value="">選択してください</option>
            <option value="hokkaido">北海道</option>
            <option value="tohoku">東北地方</option>
            <option value="kanto">関東地方</option>
            <option value="chubu">中部地方</option>
            <option value="kansai">関西地方</option>
            <option value="chugoku">中国地方</option>
            <option value="shikoku">四国地方</option>
            <option value="kyushu">九州地方</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="desired-job" className="form-label">
            希望職種
          </label>
          <p className="text-danger">{errors.desiredJob?.message}</p>
          <select
            className="form-select"
            id="desired-job"
            {...register('desiredJob', { required: '希望職種は必須です' })}
          >
            <option value="">選択してください</option>
            <option value="engineer">エンジニア</option>
            <option value="designer">デザイナー</option>
            <option value="sales">営業</option>
            <option value="marketing">マーケティング</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="github" className="form-label">
            GithubアカウントURL
          </label>
          <p className="text-danger">{errors.github?.message}</p>
          <input type="text" className="form-control" id="github" {...register('github')} />
        </div>
        <div className="mb-3">
          <label htmlFor="portfolio" className="form-label">
            ポートフォリオURL
          </label>
          <p className="text-danger">{errors.portfolio?.message}</p>
          <input type="text" className="form-control" id="portfolio" {...register('portfolio')} />
        </div>

        <button type="submit" className="btn btn-primary">
          保存
        </button>
      </form>
    </div>
  );
}
