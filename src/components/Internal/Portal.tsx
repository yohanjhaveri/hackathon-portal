import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { PageWrapper } from "./components/reusable/PageWrapper";

import { TeamFormPage } from "./pages/TeamFormPage/TeamFormPage";
import { ParticipantsPage } from "./pages/ParticipantsPage/ParticipantsPage";
import { ParticipantPage } from "./pages/ParticipantPage/ParticipantPage";
import { TeamsPage } from "./pages/TeamsPage/TeamsPage";
import { TeamPage } from "./pages/TeamPage/TeamPage";

import { DataProvider } from "../../context/DataContext";
import { FiltersProvider } from "../../context/FiltersContext";

import type { User } from "firebase/auth";
import type { Participant } from "../../types";

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

export const Portal = ({ user, participant }: PortalProps) => {
  return (
    <DataProvider user={user} participant={participant}>
      <FiltersProvider>
        <RouterProvider router={router} />
      </FiltersProvider>
    </DataProvider>
  );
};
