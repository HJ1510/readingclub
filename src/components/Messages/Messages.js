import React from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message/Message'
import './Messages.css'

const Messages = ({ messages, name }) => {
    return (
<div>
       {messages.length === 0 ? (
  <div>{messages === null ? null : "No messages yet"}</div>
) : (
  messages.map((message, i) => (
    <div key={i}>
      <Message message={message} name={name} />
    </div>
  ))
)}
     </div>
    )
  }

export default Messages