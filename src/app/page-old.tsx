'use client';

import { CoreMessage } from 'ai';
import { useState } from 'react';
import Layout from './layout';

export default function Page() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<CoreMessage[]>([]);

  return (
    <Layout>
      <div>
        <input
          value={input}
          onChange={event => {
            setInput(event.target.value);
          }}
          onKeyDown={async event => {
            if (event.key === 'Enter') {
              setMessages(currentMessages => [
                ...currentMessages,
                { role: 'user', content: input },
              ]);

              const response = await fetch('/api/chat', {
                method: 'POST',
                body: JSON.stringify({
                  messages: [...messages, { role: 'user', content: input }],
                }),
              });

              const { messages: newMessages } = await response.json();

              setMessages(currentMessages => [
                ...currentMessages,
                ...newMessages,
              ]);
            }
          }}
        />
      </div>
    </Layout>
  );
}