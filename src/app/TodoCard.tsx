import { useDeleteTodo, useFindFirstClerkUserEvents } from "@/lib/hooks";
import { Button, Card, Skeleton, Title } from "@mantine/core";
import type { Prisma } from "@prisma/client";

type todoWithOwner = Prisma.TodoGetPayload<{
  include: { fromOwner: true };
}>;

export const TodoCard: React.FC<{
  todo: todoWithOwner;
  showDelete?: boolean;
}> = ({ todo, showDelete }) => {
  const { data: user } = useFindFirstClerkUserEvents({
    where: {
      fromUserID: todo.fromOwner?.id, // `fromOwner` may be undefined during an optimistic create
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log("user", user);

  // Delete todo
  const { mutate: deleteTodo, isLoading: isDeleteLoading } = useDeleteTodo();

  function onDelete() {
    deleteTodo({
      where: {
        id: todo.id,
      },
    });
  }

  return (
    <Card>
      <Title order={5}>{todo.title}</Title>
      {todo.description}
      <p>
        {user ? (
          `by ${user.firstName} ${user.lastName} – ${user.primaryEmail}`
        ) : (
          <Skeleton height={16} radius="xl" />
        )}
      </p>

      {showDelete ? (
        <Button color="red" onClick={onDelete} loading={isDeleteLoading}>
          Delete
        </Button>
      ) : null}
    </Card>
  );
};
