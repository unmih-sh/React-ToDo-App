import React, { PureComponent } from 'react';
import '../styles/stylesheet.css';

const Notification = props => {
  const { latestNotificationMessage } = props;
  return (
    <div className="notification">
      <p> {latestNotificationMessage} </p>
    </div>
  );
};
export default Notification;
