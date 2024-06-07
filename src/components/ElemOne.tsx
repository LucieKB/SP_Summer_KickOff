import { Button, Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const ElemOne = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button
          style={{ backgroundColor: "lavender", border: "solid black 1px" }}
          onClick={toggle}
        >
          Elementary 1 Team
        </Button>
      </Group>

      <Collapse in={opened}>
        <Text>
          <p>Adelaïde</p>
          <p>Agathe</p>
          <p>Hunter</p>
          <p>Ryker</p>
          <p>
            <i>Wylder</i>
          </p>
          <p></p>
        </Text>
      </Collapse>
    </Box>
  );
};
