'use client';

import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { create } from '@/api/intern';
import { useRouter } from 'next/navigation';
export default function CreateIntern() {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const defaultValues = {
    companyId: Cookies.get('company_id'),
    title: '',
    job: '',
    internText: '',
    terms: '',
    selection: '',
    salary: 0,
    location: '',
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: InternParams) => {
    try {
      await create(data);
      setError('');
      router.push('/company/profile');
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            インターン募集タイトル
          </label>
          <p className="text-danger">{errors.title?.message}</p>
          <input
            type="text"
            className="form-control"
            id="title"
            {...register('title', {
              required: 'タイトルは必須入力です',
              maxLength: {
                value: 40,
                message: '最大40文字です',
              },
            })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="job" className="form-label">
            希望職種
          </label>
          <p className="text-danger">{errors.job?.message}</p>
          <select
            className="form-select"
            id="job"
            {...register('job', { required: '職種は必須です' })}
          >
            <option value="">選択してください</option>
            <option value="engineer">エンジニア</option>
            <option value="designer">デザイナー</option>
            <option value="sales">営業</option>
            <option value="marketing">マーケティング</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="intern-text" className="form-label">
            業務内容
          </label>
          <p className="text-danger">{errors.internText?.message}</p>
          <input
            type="text"
            className="form-control"
            id="intern-text"
            {...register('internText', {
              required: '業務内容は必須です。',
              maxLength: {
                value: 300,
                message: '最大300文字です',
              },
            })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="terms" className="form-label">
            応募条件
          </label>
          <p className="text-danger">{errors.terms?.message}</p>
          <input
            type="text"
            className="form-control"
            id="terms"
            {...register('terms', {
              required: '応募条件は必須入力です',
            })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="selection" className="form-label">
            選考フロー
          </label>
          <p className="text-danger">{errors.selection?.message}</p>
          <input
            type="text"
            className="form-control"
            id="selection"
            {...register('selection', {
              required: '選考フローは必須入力です',
            })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            時給
          </label>
          <p className="text-danger">{errors.salary?.message}</p>
          <input
            type="text"
            className="form-control"
            id="salary"
            {...register('salary', {
              valueAsNumber: true,
              min: {
                value: 0,
                message: '0以上の値を入力してください',
              },
            })}
          />
          円
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            勤務地
          </label>
          <p className="text-danger">{errors.location?.message}</p>
          <select
            className="form-select"
            id="location"
            {...register('location', { required: '住んでいる場所は必須です' })}
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
        <button type="submit" className="btn btn-primary">
          保存
        </button>
      </form>
    </div>
  );
}
