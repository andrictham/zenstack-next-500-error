import { useDeleteTodo, useUpdateTodo } from "@/lib/hooks";
import {
  Button,
  Card,
  Checkbox,
  Group,
  Loader,
  Stack,
  Title,
} from "@mantine/core";
import type { Todo } from "@prisma/client";

type Props = {
  value: Todo;
  optimistic?: boolean;
};

export default function Todo({ value, optimistic }: Props) {
  const { mutate: deleteTodo } = useDeleteTodo({ optimisticUpdate: true });
  const { mutate: updateTodo } = useUpdateTodo({ optimisticUpdate: true });

  function onTodoDelete() {
    deleteTodo({
      where: {
        id: value.id,
      },
    });
  }

  function onToggleComplete(completed: boolean) {
    if (completed === !!value.completedAt) {
      return;
    }

    updateTodo({
      where: {
        id: value.id,
      },
      data: {
        completedAt: completed ? new Date() : null,
      },
    });
  }

  return (
    <Card withBorder p="md">
      <Stack>
        <Group className="flex" gap="xs">
          <Checkbox
            checked={!!value.completedAt}
            onChange={(e) => onToggleComplete(e.currentTarget.checked)}
          />
          <Title order={3} td={value.completedAt ? "line-through" : undefined}>
            {value.title}
            {optimistic && <Loader size="xs" ml="sm" />}
          </Title>
        </Group>
        <Button color="red" variant="outline" size="xs" onClick={onTodoDelete}>
          Delete
        </Button>
      </Stack>
    </Card>
  );
}
