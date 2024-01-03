import React from "react";
import { MdNotifications } from "react-icons/md";

function Notification() {
  return (
    <div className="notification-container">
      <MdNotifications className="notification-icon" />
      <div className="notification-content">
        <h2>Modifier votre profil</h2>
      </div>
    </div>
  );
}

export default Notification;
