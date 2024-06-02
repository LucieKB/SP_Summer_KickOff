import { Button, Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const KinderTeam = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button
          style={{ backgroundColor: "papayawhip", border: "solid black 1px" }}
          onClick={toggle}
        >
          KinderGarten Team
        </Button>
      </Group>

      <Collapse in={opened}>
        <Text>
          <p>Name1</p>
          <p>Name2</p>
          <p>Name3</p>
          <p>Name4</p>
          <p>Name5</p>
        </Text>
      </Collapse>
    </Box>
  );
};
