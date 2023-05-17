import React from "react";
import UserListStyle from "@styled/UserList";
import UserCard from "@UserList/UserCard";
import USERLISTDATA from "@constants/data";
import Navbar from "@Navbar/Navbar";

function UserList() {
  return (
    <UserListStyle>
      <Navbar />
      {USERLISTDATA.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          profile={user.profile}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
        />
      ))}
    </UserListStyle>
  );
}

export default UserList;
