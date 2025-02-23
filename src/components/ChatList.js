import "./ChatList.css";

export default function NewChat() {
  return (
    <div className="chat-container">
      
      <div className="sidebar">
        <div className="menu-icon">☰</div>
        <div className="sidebar-icons">
          <div className="icon active">💬</div>
          <div className="icon">📞</div>
          <div className="icon">📋</div>
        </div>
        <div className="settings">⚙️</div>
      </div>

      <div className="chat-list">
        <div className="chat-header">
          <h2>Chats</h2>
          <button className="new-chat-btn">✏️</button>
        </div>
        <input type="text" placeholder="Search" className="search-bar" />
        <p className="no-chats">No chats</p>
        <p className="recent">Recent chats will appear here.</p>
      </div>

      <div className="welcome-section">
        <img
          src="https://play-lh.googleusercontent.com/FtGKSwVtpmMxKoJrJuI837DkYGRsqlMdiVPAd8bomLQZ3_Hc55XokY_dYdXKgGagiYs=w480-h960-rw"
          className="welcome-logo"
          alt="Signal Logo"
        />
        <h1 className="welcome-text">Welcome to Signal</h1>
        <a href="#" className="update-link">See what's new in this update</a>
      </div>
    </div>
  );
}
