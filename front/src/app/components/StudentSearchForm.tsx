'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { index } from '@/api/student';
export default function StudentSearchForm(props: any) {
  const [students, setStudents] = useState<StudentSearchApiResponse[]>([]);
  const defaultValues = {
    region_eq: '',
    desired_job_eq: '',
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const [error, setError] = useState('');

  const onSubmit = async (data: StudentSearchParams) => {
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
      <div className="col-md-6">
        <label htmlFor="region" className="form-label">
          住んでいる場所
        </label>
        <p className="text-danger">{errors.region_eq?.message}</p>
        <select
          className="form-select"
          id="region"
          {...register('region_eq', { required: '住んでいる場所は必須です' })}
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
      <div className="col-md-6">
        <label htmlFor="desired-job" className="form-label">
          希望職種
        </label>
        <p className="text-danger">{errors.desired_job_eq?.message}</p>
        <select
          className="form-select"
          id="desired-job"
          {...register('desired_job_eq', { required: '希望職種は必須です' })}
        >
          <option value="">選択してください</option>
          <option value="エンジニア">エンジニア</option>
          <option value="デザイナー">デザイナー</option>
          <option value="営業">営業</option>
          <option value="マーケティング">マーケティング</option>
        </select>
      </div>
      <div className="col-md-4 mx-auto">
        <button type="submit" className="btn btn-outline-primary w-100">
          絞り込む
        </button>
      </div>
    </form>
  );
}
