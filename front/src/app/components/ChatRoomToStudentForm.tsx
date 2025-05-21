'use client';
import { useState } from 'react';

export default function MessageToStudentForm(props: {
  student_id: string;
  company_id: string | undefined;
  messageData: MessageApiResponse | null;
}) {
  return (
    <div className="container py-4" style={{ maxWidth: '600px' }}>
      <h5 className="mb-3">{props.messageData?.receiver_name}</h5>
      <div
        className="border rounded p-3 mb-3 bg-light"
        style={{ height: '600px', overflowY: 'scroll' }}
      >
        {props.messageData?.messages.map((message, index) => (
          <div className={`${message.sender_type === 'Company' ? 'text-end' : 'text-start'}`}>
            <div key={index} className={'d-inline-block p-2 rounded bg-secondary text-white mb-1'}>
              {message.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
