import { Flex, Stack } from "@chakra-ui/react";
import { FaFolder, FaUserCircle, FaUsers } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { useData } from "../../../../context/DataContext";
import { Loader } from "../../../Loader";
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

export const NavigationBody = () => {
  const data = useData();

  if (!data) {
    return <Loader />;
  }

  const team = data.team;
  const participant = data.participant;

  const categories: Category[] = [
    {
      name: "Personal",
      pages: [
        {
          name: "My Profile",
          link: `/participants/${participant?.id}`,
          icon: FaUserCircle,
        },
        {
          name: "My Team",
          link: `/teams/${team?.id}`,
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
    <Stack spacing="3" key={category.name}>
      <NavigationHeading>{category.name}</NavigationHeading>
      <Stack spacing="1">{category.pages.map(renderPage)}</Stack>
    </Stack>
  );

  return (
    <Flex px="3" direction="column" justify="space-between" align="stretch">
      <Stack spacing="6">{categories.map(renderCategory)}</Stack>
    </Flex>
  );
};
