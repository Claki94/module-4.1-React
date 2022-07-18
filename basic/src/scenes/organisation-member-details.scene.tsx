import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layout";
import { OrganisationMemberDetailsContainer } from "@/pods/organisation-member-details";

export const OrganisationMemberDetailsScene: React.FC = () => {
  const { login } = useParams();

  return (
    <AppLayout>
      <OrganisationMemberDetailsContainer login={login} />
    </AppLayout>
  );
};
