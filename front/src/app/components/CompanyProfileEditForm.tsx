'use client';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { update } from '@/api/company';
export default function StudentProfileEditForm({
  company,
}: {
  company: CompanyApiResponse | null;
}) {
  const router = useRouter();
  console.log(company);
  const [error, setError] = useState<string>('');
  const defaultValues = {
    id: Cookies.get('company_id'),
    name: company?.name,
    mail: company?.mail,
    profileText: company?.profile_text,
    location: company?.location,
    established: company?.established,
    employee: company?.employee,
    officialSite: company?.official_site,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const onSubmit = async (data: CompanyEditFormParams) => {
    try {
      await update(data);
      setError('');
      router.push('/company/profile');
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
          <label htmlFor="mail" className="form-label">
            メールアドレス
          </label>
          <p className="text-danger">{errors.mail?.message}</p>
          <input
            type="text"
            className="form-control"
            id="mail"
            {...register('mail', {
              required: 'メールアドレスは必須です。',
            })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            住所
          </label>
          <p className="text-danger">{errors.location?.message}</p>
          <input
            type="text"
            className="form-control"
            id="location"
            {...register('location', {
              required: '住所は必須入力です',
            })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="established" className="form-label">
            設立年
          </label>
          <p className="text-danger">{errors.established?.message}</p>
          <input
            type="text"
            className="form-control"
            id="established"
            {...register('established', {
              required: '設立年は必須入力です',
            })}
          />
          年
        </div>

        <div className="mb-3">
          <label htmlFor="employee" className="form-label">
            従業員数
          </label>
          <p className="text-danger">{errors.employee?.message}</p>
          <input
            type="text"
            className="form-control"
            id="employee"
            {...register('employee', {
              required: '従業員数は必須入力です',
            })}
          />
          人
        </div>

        <button type="submit" className="btn btn-primary">
          保存
        </button>
      </form>
    </div>
  );
}
