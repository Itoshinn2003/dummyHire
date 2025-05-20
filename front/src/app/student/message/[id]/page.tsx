'use client';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';
export default function MessageListToCompany() {
  if (!Cookies.get('student_id')) {
    redirect('/signin/student');
  }
  const [messages, setMessages] = useState([
    { id: 1, user: 'me', content: 'こんにちは！' },
    { id: 2, user: 'other', content: 'こんにちは、よろしくお願いします！' },
    { id: 3, user: 'me', content: 'こちらこそ！' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { id: Date.now(), user: 'me', content: input }]);
    setInput('');
  };

  return (
    <div className="container py-4" style={{ maxWidth: '600px' }}>
      <h5 className="mb-3">🗨️ 相手の名前</h5>

      <div
        className="border rounded p-3 mb-3 bg-light"
        style={{ height: '600px', overflowY: 'scroll' }}
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-2 ${msg.user === 'me' ? 'text-end' : 'text-start'}`}>
            <div
              className={`d-inline-block px-3 py-2 rounded ${msg.user === 'me' ? 'bg-primary text-white' : 'bg-white border'}`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* 入力フォーム */}
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="メッセージを入力..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button className="btn btn-primary" onClick={sendMessage}>
          送信
        </button>
      </div>
    </div>
  );
}
