'use client';
import { changeLiked } from '@/api/like';
import { useState, useEffect } from 'react';

export default function InternLike(props: {
  isLiked: boolean;
  internId: string;
  studentId: string | undefined;
}) {
  const [isLiked, setIsLiked] = useState(props.isLiked);

  async function handleChange() {
    try {
      let data: boolean = await changeLiked({
        student_id: props.studentId,
        intern_id: props.internId,
      });
      data;
      setIsLiked(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(isLiked);
  }, [isLiked]);
  return (
    <div className="d-flex justify-content-end mb-3">
      <button className="btn btn-outline-secondary" onClick={handleChange}>
        {isLiked ? 'いいねをやめる' : 'いいねする'}
      </button>
    </div>
  );
}
