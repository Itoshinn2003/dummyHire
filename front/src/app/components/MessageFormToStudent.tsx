'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { create } from '@/api/message';

export default function MessageFormToStudent(props: {
  student_id: string;
  company_id: string | undefined;
}) {
  const defaultValues = {
    content: '',
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });
  const [error, setError] = useState('');

  const onSubmit = async (message: { content: string }) => {
    let data = {
      content: message.content,
      student_id: props.student_id,
      company_id: props.company_id,
      type: 'Company',
    };
    try {
      let responseData = await create(data);
      reset();
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container" style={{ maxWidth: '600px' }}>
      <div className="mb-3 d-flex align-items-start gap-2">
        <input
          type="text"
          className="form-control"
          id="content"
          {...register('content', {
            required: '',
          })}
        />
        <button type="submit" className="btn btn-primary">
          送信
        </button>
      </div>
    </form>
  );
}
