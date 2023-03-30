import { Tag, Wrap } from "@chakra-ui/react";

export type SkillsProps = {
  size?: "sm" | "md";
  skills: string[];
};

export const Skills = ({ size, skills }: SkillsProps) => (
  <Wrap shouldWrapChildren>
    {skills.map((skill) => (
      <Tag key={skill} size={size} color="gray.600" bg="gray.200">
        {skill}
      </Tag>
    ))}
  </Wrap>
);
