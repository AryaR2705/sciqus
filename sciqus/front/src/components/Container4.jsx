import React from 'react';
import "./Container4.css";
function Container4() {
  const sites = [
    "https://asukaarya.netlify.app/",
    "https://imagearya.netlify.app",
    "https://aryalogin.netlify.app/",
    "https://aryar2705.github.io/mbti.com/",
    "https://imagearya.netlify.app",
    "https://aryar.netlify.app",
    "https://guestgenie.netlify.app/",
    "https://aryapsy.netlify.app",
    "https://aryahotel.netlify.app",
    "https://doctorarya.netlify.app"
  ];

  return (
    <div className="container">
      <h2>Container 4</h2>
      <p>Check out these websites:</p>
      <ul className="site-list">
        {sites.map((site, index) => (
          <li key={index}>
            <a href={site} target="_blank" rel="noopener noreferrer">
              {site}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Container4;
