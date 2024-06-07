import { Button, Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const ElemTwo = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button
          style={{ backgroundColor: "lightpink", border: "solid black 1px" }}
          onClick={toggle}
        >
          Elementary 2 Team
        </Button>
      </Group>

      <Collapse in={opened}>
        <Text>
          <p>Avery</p>
          <p>Rhys</p>
          <p>June</p>
          <p>Killian</p>
          <p>Killian's Friend</p>
        </Text>
      </Collapse>
    </Box>
  );
};
