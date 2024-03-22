import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const CallbackPage = () => {
  const { error } = useAuth0();

  if (error) {
    return (
      <div>
        error
      </div>
    );
  }

  return (
    <div className="page-layout" />
  );
};
