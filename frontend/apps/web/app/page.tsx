'use client';
import type Echo from 'laravel-echo';
import { useEffect } from 'react';
import { Avatar, IconButton, InputBase, SvgIcon } from '@mui/material';
import { createSocket } from '@app/web/app/reverb';

const channel: string = 'chat.message';

export default function Home() {
  useEffect(() => {
    const socket: Echo<'reverb'> = createSocket();
    socket.channel(channel).listen('.sent', (event: any) => {
      const messageText: string = `Новое сообщение: ${event.text}`;
      console.log(messageText);
      alert(messageText);
    });
    return () => {
      socket.leave(channel);
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/messages`);
  };

  return (
    <main className="b-chat">
      <header className="b-chat-header">
        <Avatar className="b-avatar">TU</Avatar>
        <div>
          <h1 className="b-chat-header__title">Test User</h1>
          <p className="b-chat-header__status">
            <span className="b-chat-header__indicator" />в сети
          </p>
        </div>
      </header>
      <section className="b-chat__history">
        <ol className="b-chat__messages">
          <li className="b-chat__date">Сегодня</li>

          <li className="b-chat-message">
            <p className="b-chat-message__text">Тестовое сообщение 1</p>
            <div className="b-chat-message__meta">
              <time dateTime="10:24">10:24</time>
            </div>
          </li>

          <li className="b-chat-message b-chat-message_outgoing">
            <p className="b-chat-message__text">Тестовое сообщение 2</p>
            <div className="b-chat-message__meta">
              <time dateTime="10:25">10:25</time>
              <span>✓✓</span>
            </div>
          </li>

          <li className="b-chat-message">
            <p className="b-chat-message__text">Тестовое сообщение 3</p>
            <div className="b-chat-message__meta">
              <time dateTime="10:26">10:26</time>
            </div>
          </li>

          <li className="b-chat-message b-chat-message_outgoing">
            <p className="b-chat-message__text">Тестовое сообщение 4</p>
            <div className="b-chat-message__meta">
              <time dateTime="10:27">10:27</time>
              <span>✓✓</span>
            </div>
          </li>

          <li className="b-chat-message">
            <p className="b-chat-message__text">Тестовое сообщение 5</p>
            <div className="b-chat-message__meta">
              <time dateTime="10:28">10:28</time>
            </div>
          </li>
        </ol>
      </section>
      <div className="b-chat-composer">
        <div className="b-chat-composer__field">
          <InputBase
            className="b-input"
            placeholder="Написать сообщение…"
            multiline
            maxRows={4}
            slotProps={{ input: { className: 'b-input__control' } }}
          />
        </div>
        <IconButton
          className="b-btn"
          type="button"
          onClick={sendMessage}
        >
          <SvgIcon
            className="b-btn__icon"
            aria-hidden="true"
          >
            <path d="M2.1 3.1a.8.8 0 0 1 .9-.1l18 8.2a.9.9 0 0 1 0 1.6L3 21a.8.8 0 0 1-1.1-.9L3.5 14 13 12 3.5 10 1.9 4a.8.8 0 0 1 .2-.9Z" />
          </SvgIcon>
        </IconButton>
      </div>
    </main>
  );
}
