import React, { useState } from "react";

function ProfileIcon() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  //give your other button components attributes like the ones below
  return (
    <button
      className="profile-icon"
      value={open}
      name="profile icon"
      onClick={handleOpen}
    >
      Profile Icon/Button
    </button>
  );
}

export default ProfileIcon;
