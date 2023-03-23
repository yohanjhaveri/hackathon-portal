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
    element: <TeamFormPage />,
  },
  {
    path: "/update-team",
    element: <TeamFormPage edit />,
  },
  {
    path: "/participants",
    element: <ParticipantsPage />,
  },
  {
    path: "/participants/:id",
    element: <ParticipantPage />,
  },
  {
    path: "/teams",
    element: <TeamsPage />,
  },
  {
    path: "/teams/:id",
    element: <TeamPage />,
  },
  {
    path: "*",
    element: <Navigate to="/participants" />,
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
        <PageWrapper>
          <RouterProvider router={router} />
        </PageWrapper>
      </FiltersProvider>
    </DataProvider>
  );
};
