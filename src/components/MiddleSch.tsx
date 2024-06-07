import { Button, Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const MiddleSch = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button
          style={{
            backgroundColor: "mediumspringgreen",
            border: "solid black 1px",
          }}
          onClick={toggle}
        >
          Middle School Team
        </Button>
      </Group>

      <Collapse in={opened}>
        <Text>
          <p>Alex</p>
          <p>Emil</p>
          <p>Harvey</p>
          <p>Kai</p>
          <p>
            <i>Howie?</i>
          </p>
        </Text>
      </Collapse>
    </Box>
  );
};
