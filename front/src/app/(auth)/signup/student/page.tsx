'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { create } from '@/api/student';
export default function RegisterForm() {
  const defaultValues = {
    name: '',
    userId: '',
    password: '',
    universityName: '',
    grade: '',
    desiredJob: '',
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <div className="container mt-5">
      <h2 className="mb-4">新規登録</h2>
      <form onSubmit={handleSubmit(create)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            名前
          </label>
          <p className="text-danger">{errors.name?.message}</p>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register('name', {
              required: '名前は必須入力です',
            })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="user-id" className="form-label">
            ユーザーID
          </label>
          <p className="text-danger">{errors.userId?.message}</p>
          <input
            type="text"
            className="form-control"
            id="user-id"
            {...register('userId', {
              required: 'ユーザーIDは必須入力です',
            })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            パスワード
          </label>
          <p className="text-danger">{errors.password?.message}</p>
          <input
            type="text"
            className="form-control"
            id="password"
            {...register('password', {
              required: 'パスワードは必須入力です',
            })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="university-name" className="form-label">
            大学
          </label>
          <p className="text-danger">{errors.universityName?.message}</p>
          <input
            type="text"
            className="form-control"
            id="university-name"
            {...register('universityName', {
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

        <button type="submit" className="btn btn-primary">
          登録
        </button>
      </form>
    </div>
  );
}
