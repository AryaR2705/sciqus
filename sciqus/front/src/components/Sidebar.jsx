import React from 'react';
import "./Sidebar.css";

function Sidebar() {
  const openLinkInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={() => openLinkInNewTab("https://sciqus.com/")}>
        Link1
      </button>
      <button className="sidebar-button" onClick={() => openLinkInNewTab("https://en.wikipedia.org/wiki/Jin_Kazama")}>
        Link2
      </button>
      <button className="sidebar-button" onClick={() => openLinkInNewTab("https://fast.com/")}>
        Link3
      </button>
    </div>
  );
}

export default Sidebar;
