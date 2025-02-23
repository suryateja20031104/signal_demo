import { useState } from "react";
import "./ChatList.css";

export default function NewChat() {
  const initialChats = [
    {
      id: 1,
      name: "Aarav",
      message: "Hey, how's it going?",
      time: "10:45 AM",
      conversation: [
        { sender: "Aarav", text: "Hey, how's it going?" },
        { sender: "You", text: "All good! What about you?" },
      ],
    },
    {
      id: 2,
      name: "Neha",
      message: "Meeting at 3 PM.",
      time: "9:30 AM",
      conversation: [
        { sender: "Neha", text: "Hey, meeting is at 3 PM." },
        { sender: "You", text: "Got it, see you there!" },
      ],
    },
    {
      id: 3,
      name: "Vihaan",
      message: "Sent you the files.",
      time: "8:15 AM",
      conversation: [
        { sender: "Vihaan", text: "I sent the files." },
        { sender: "You", text: "Thanks! I'll review them." },
      ],
    },
    {
      id: 4,
      name: "Ananya",
      message: "Let's catch up soon!",
      time: "Yesterday",
      conversation: [
        { sender: "Ananya", text: "It's been a while, let's catch up!" },
        { sender: "You", text: "Absolutely! This weekend?" },
      ],
    },
    {
      id: 5,
      name: "Rohan",
      message: "Can you check the report?",
      time: "Monday",
      conversation: [
        { sender: "Rohan", text: "Can you check the latest report?" },
        { sender: "You", text: "Sure, I'll review it today." },
      ],
    },
    {
      id: 6,
      name: "Ishita",
      message: "Movie night?",
      time: "Sunday",
      conversation: [
        { sender: "Ishita", text: "How about a movie night?" },
        { sender: "You", text: "Sounds fun! Which movie?" },
      ],
    },
    {
      id: 7,
      name: "Kabir",
      message: "Lunch at 1?",
      time: "Saturday",
      conversation: [
        { sender: "Kabir", text: "Are we still on for lunch at 1?" },
        { sender: "You", text: "Yes! Looking forward to it." },
      ],
    },
    {
      id: 8,
      name: "Meera",
      message: "Project deadline extended.",
      time: "Friday",
      conversation: [
        { sender: "Meera", text: "Good news! The deadline is extended." },
        { sender: "You", text: "Great, more time to polish the work!" },
      ],
    },
    {
      id: 9,
      name: "Arjun",
      message: "Did you get my email?",
      time: "Thursday",
      conversation: [
        { sender: "Arjun", text: "Hey, did you check my email?" },
        { sender: "You", text: "Yes, I'll respond shortly." },
      ],
    },
    {
      id: 10,
      name: "Sanya",
      message: "Happy Birthday!",
      time: "Wednesday",
      conversation: [
        { sender: "Sanya", text: "Happy Birthday! 🎉" },
        { sender: "You", text: "Thank you! Appreciate it." },
      ],
    },
  ];
  

  const [chats, setChats] = useState(initialChats);
  const [activeChat, setActiveChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");

  // Filter chats based on search query (name or last message)
  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle sending new messages
  const sendMessage = () => {
    if (!newMessage.trim() || !activeChat) return;

    const updatedChats = chats.map((chat) =>
      chat.id === activeChat.id
        ? {
            ...chat,
            conversation: [
              ...chat.conversation,
              { sender: "You", text: newMessage },
            ],
            message: newMessage,
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          }
        : chat
    );

    setChats(updatedChats);
    setActiveChat(updatedChats.find((c) => c.id === activeChat.id));
    setNewMessage("");
  };

  return (
    <div className="chat-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="menu-icon">☰</div>
        <div className="sidebar-icons">
          <div className="icon active">💬</div>
          <div className="icon">📞</div>
          <div className="icon">📋</div>
        </div>
        <div className="settings">⚙️</div>
      </div>

      {/* Chat List */}
      <div className="chat-list">
        <div className="chat-header">
          <h2>Chats</h2>
          <button className="new-chat-btn">✏️</button>
        </div>

        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${activeChat?.id === chat.id ? "active" : ""}`}
            onClick={() => setActiveChat(chat)}
          >
            <div className="avatar">{chat.name.charAt(0)}</div>
            <div className="chat-details">
              <div className="chat-name">{chat.name}</div>
              <div className="chat-message">{chat.message}</div>
            </div>
            <div className="chat-time">{chat.time}</div>
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="chat-window">
        {activeChat ? (
          <>
            <div className="chat-window-header">{activeChat.name}</div>

            <div className="chat-content">
              {activeChat.conversation.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.sender === "You" ? "sent" : "received"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="message-input"
              />
              <button onClick={sendMessage}>➤</button>
            </div>
          </>
        ) : (
          <div className="welcome-section">
            <h2>Select a chat to start messaging</h2>
          </div>
        )}
      </div>
    </div>
  );
}