import React from "react";
import UserListStyle from "@src/styled/UserList";
import UserCard from "@src/components/UserList/UserCard";
import USERLISTDATA from "@src/constants/data";
import {Navbar} from "@src/components/Navbar/index";

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
