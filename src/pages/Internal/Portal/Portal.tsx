import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { User } from "firebase/auth";
import { PageWrapper } from "../../../components/wrappers/PageWrapper";
import { DataProvider, FiltersProvider } from "../../../context";
import { Participant } from "../../../types";
import { ParticipantPage } from "./ParticipantPage/ParticipantPage";
import { ParticipantsPage } from "./ParticipantsPage/ParticipantsPage";
import { TeamFormPage } from "./TeamFormPage/TeamFormPage";
import { TeamPage } from "./TeamPage/TeamPage";
import { TeamsPage } from "./TeamsPage/TeamsPage";

export const routes = [
  {
    path: "/create-team",
    element: (
      <PageWrapper>
        <TeamFormPage />
      </PageWrapper>
    ),
  },
  {
    path: "/update-team",
    element: (
      <PageWrapper>
        <TeamFormPage edit />
      </PageWrapper>
    ),
  },
  {
    path: "/participants",
    element: (
      <PageWrapper>
        <ParticipantsPage />
      </PageWrapper>
    ),
  },
  {
    path: "/participants/:id",
    element: (
      <PageWrapper>
        <ParticipantPage />
      </PageWrapper>
    ),
  },
  {
    path: "/teams",
    element: (
      <PageWrapper>
        <TeamsPage />
      </PageWrapper>
    ),
  },
  {
    path: "/teams/:id",
    element: (
      <PageWrapper>
        <TeamPage />
      </PageWrapper>
    ),
  },
  {
    path: "*",
    element: (
      <PageWrapper>
        <Navigate to="/participants" />
      </PageWrapper>
    ),
  },
];

const router = createBrowserRouter(routes);

export type PortalProps = {
  user: User;
  participant: Participant;
};

export const Portal = ({ user, participant }: PortalProps) => (
  <DataProvider user={user} participant={participant}>
    <FiltersProvider>
      <RouterProvider router={router} />
    </FiltersProvider>
  </DataProvider>
);
