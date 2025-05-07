'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from '@/api/company';
import { useRouter } from 'next/navigation';

export default function companySignIn() {
  const router = useRouter();
  const defaultValues = {
    mail: '',
    password: '',
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const [error, setError] = useState('');

  const onSubmit = async (data: any) => {
    try {
      await signIn(data);
      router.push('/company/profile');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">企業ログイン</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            メールアドレス
          </label>
          <p className="text-danger">{errors.mail?.message}</p>
          <input
            type="text"
            className="form-control"
            id="userId"
            {...register('mail', {
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
            type="password"
            className="form-control"
            id="password"
            {...register('password', {
              required: 'パスワードは必須入力です',
              minLength: {
                value: 8,
                message: 'パスワードは8文字以上で入力してください',
              },
              maxLength: {
                value: 20,
                message: 'パスワードは20文字以内で入力してください',
              },
            })}
          />
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button type="submit" className="btn btn-primary">
          ログイン
        </button>
      </form>
    </div>
  );
}
