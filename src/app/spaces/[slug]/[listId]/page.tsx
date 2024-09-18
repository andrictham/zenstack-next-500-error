"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useCreateTodo, useFindManyTodo, useFindUniqueList } from "@/lib/hooks";
import { useUser } from "@clerk/nextjs";
import { Input, Stack } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";

import Todo from "./Todo.component";

export default function TodoList() {
  const { listId } = useParams<{ listId: string }>();
  const { user } = useUser();

  const { data: list } = useFindUniqueList(
    {
      where: { id: listId },
    },
    { enabled: !!user },
  );

  const { mutate: create } = useCreateTodo({ optimisticUpdate: true });
  const { data: todos } = useFindManyTodo(
    {
      where: { fromListId: listId },
      orderBy: { createdAt: "desc" as const },
    },
    { enabled: !!user },
  );

  const [title, setTitle] = useState("");

  function onCreate() {
    create({
      data: {
        title,
        fromOwner: { connect: { id: user?.id } },
        fromList: { connect: { id: listId } },
      },
    });
    setTitle("");
  }

  if (!user || !list) {
    return <></>;
  }

  return (
    <div>
      <Stack gap="lg" m="lg">
        <Stack mx="xs" gap={0}>
          <h1>{list.title}</h1>
          <Input
            type="text"
            placeholder="Add a todo..."
            value={title}
            autoFocus
            rightSection={<IconArrowBack />}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                onCreate();
              }
            }}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
        </Stack>
        <Stack gap="lg">
          {todos?.map((todo) => (
            <Todo key={todo.id} value={todo} optimistic={todo.$optimistic} />
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
