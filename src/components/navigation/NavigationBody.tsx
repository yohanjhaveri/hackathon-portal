import { FaFolder, FaUserCircle, FaUsers } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { Stack } from "@chakra-ui/react";
import { NavigationHeading } from "./NavigationHeading";
import { NavigationLink } from "./NavigationLink";

type Page = {
  name: string;
  link: string;
  icon: IconType;
};

type Category = {
  name: string;
  pages: Page[];
};

export type NavigationBodyProps = {
  participantId: string;
  teamId?: string;
};

export const NavigationBody = ({ participantId, teamId }: NavigationBodyProps) => {
  const categories: Category[] = [
    {
      name: "Personal",
      pages: [
        {
          name: "My Profile",
          link: `/participants/${participantId}`,
          icon: FaUserCircle,
        },
        {
          name: "My Team",
          link: `/teams/${teamId}`,
          icon: FaUsers,
        },
      ],
    },
    {
      name: "Directories",
      pages: [
        {
          name: "Team Directory",
          link: "/teams",
          icon: FaFolder,
        },
        {
          name: "Participant Directory",
          link: "/participants",
          icon: FaFolder,
        },
      ],
    },
  ];

  const renderPage = (page: Page) => (
    <NavigationLink key={page.link} icon={page.icon} link={page.link}>
      {page.name}
    </NavigationLink>
  );

  const renderCategory = (category: Category) => (
    <Stack key={category.name} spacing="3">
      <NavigationHeading>{category.name}</NavigationHeading>
      <Stack spacing="1">{category.pages.map(renderPage)}</Stack>
    </Stack>
  );

  return (
    <Stack px="3" spacing="6">
      {categories.map(renderCategory)}
    </Stack>
  );
};
