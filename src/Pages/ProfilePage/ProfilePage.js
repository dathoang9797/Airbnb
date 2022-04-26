import FooterUser from "@Layouts/User/FooterUser";
import HeaderUser from "@Layouts/User/HeaderUser";
import React from "react";
import ProfilePageBody from "./ProfilePageBody/ProfilePageBody";

function ProfilePage() {
  return (
    <div>
      <HeaderUser />
      <ProfilePageBody />
      <FooterUser />
    </div>
  );
}

export default ProfilePage