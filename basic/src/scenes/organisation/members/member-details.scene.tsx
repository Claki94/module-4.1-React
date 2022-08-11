import React from "react";
import { useParams } from "react-router-dom";

import { AppLayout } from "@/layout";
import { MemberDetailsContainer } from "@/pods/organisation";

export const MemberDetailsScene: React.FC = () => {
  const { login } = useParams();

  return (
    <AppLayout>
      <MemberDetailsContainer login={login} />
    </AppLayout>
  );
};
