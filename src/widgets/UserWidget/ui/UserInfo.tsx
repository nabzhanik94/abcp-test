import React from "react";
import { UserInfoProps } from "../model";
import "./UserWidgetStyles.css";

const UserInfo: React.FC<UserInfoProps> = React.memo(({ user }) => {
  return (
    <table className="user-info-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.name}</td>
          <td>{user.phone}</td>
        </tr>
      </tbody>
    </table>
  );
});

export default UserInfo;
