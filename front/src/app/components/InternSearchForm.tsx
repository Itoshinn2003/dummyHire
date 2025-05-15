'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { index } from '@/api/intern';
export default function constInternSearchForm(props: any) {
  const [inerns, setInterns] = useState<InternSearchApiResponse[]>([]);
  const defaultValues = {
    location_eq: '',
    job_eq: '',
    salary_gteq: 0,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const [error, setError] = useState('');

  const onSubmit = async (data: InternSearchParams) => {
    const searchParams = {
      q: data,
    };
    try {
      let data = await index(searchParams);
      props.handleValueChange(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form className="row g-3 mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-4">
        <label htmlFor="location" className="form-label">
          希望勤務場所
        </label>
        <p className="text-danger">{errors.location_eq?.message}</p>
        <select
          className="form-select"
          id="region"
          {...register('location_eq', { required: '住んでいる場所は必須です' })}
        >
          <option value="">選択してください</option>
          <option value="北海道">北海道</option>
          <option value="東北地方">東北地方</option>
          <option value="関東地方">関東地方</option>
          <option value="中部地方">中部地方</option>
          <option value="関西地方">関西地方</option>
          <option value="中国地方">中国地方</option>
          <option value="四国地方">四国地方</option>
          <option value="九州地方">九州地方</option>
        </select>
      </div>
      <div className="col-md-4">
        <label htmlFor="desired-job" className="form-label">
          希望職種
        </label>
        <p className="text-danger">{errors.job_eq?.message}</p>
        <select
          className="form-select"
          id="desired-job"
          {...register('job_eq', { required: '希望職種は必須です' })}
        >
          <option value="">選択してください</option>
          <option value="エンジニア">エンジニア</option>
          <option value="デザイナー">デザイナー</option>
          <option value="営業">営業</option>
          <option value="マーケティング">マーケティング</option>
        </select>
      </div>
      <div className="col-md-4">
        <label htmlFor="salary" className="form-label">
          時給
        </label>
        <p className="text-danger">{errors.salary_gteq?.message}</p>
        <input
          type="text"
          className="form-control"
          id="salary"
          {...register('salary_gteq', {
            valueAsNumber: true,
            min: {
              value: 0,
              message: '0以上の値を入力してください',
            },
          })}
        />
        円~
      </div>
      <div className="col-md-4 mx-auto">
        <button type="submit" className="btn btn-outline-primary w-100">
          絞り込む
        </button>
      </div>
    </form>
  );
}
