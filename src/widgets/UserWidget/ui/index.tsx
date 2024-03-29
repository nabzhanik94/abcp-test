import React, { useState, useCallback } from "react";
import Button from "./Button";
import UserInfo from "./UserInfo";
import { User, fetchUserById } from "../model";
import { useThrottle } from "../ilb";
import "./UserWidgetStyles.css";

const UserWidget: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const receiveRandomUser = useCallback(async () => {
    const id = Math.floor(Math.random() * (10 - 1)) + 1;
    const fetchedUser = await fetchUserById(id);
    setUser(fetchedUser);
  }, []);

  const throttledGetUser = useThrottle(receiveRandomUser, 1000);

  return (
    <div className="user-widget">
      <h2>Get a random user</h2>
      <Button onClick={throttledGetUser} />
      {user && <UserInfo user={user} />}
    </div>
  );
};

export default UserWidget;
