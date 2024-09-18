"use client";

import { useState } from "react";
import { type NextPage } from "next";
import { TodoCard } from "@/app/TodoCard";
import { useCreateTodo, useFindManyTodo } from "@/lib/hooks";
import { Button, Loader, Stack } from "@mantine/core";

const CURRENT_LIST = "clwlyy7fz0008hkiboc23ioed";

const Todos: NextPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createAndClearForm();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      createAndClearForm();
    }
  };

  const createAndClearForm = () => {
    onTodoCreate(title, description);
    setTitle("");
    setDescription("");
  };

  // Create todo
  const { mutate: createTodo } = useCreateTodo({ optimisticUpdate: true });

  function onTodoCreate(title: string, description: string) {
    createTodo({
      data: {
        title,
        description,
        fromList: {
          connect: {
            id: CURRENT_LIST,
          },
        },
      },
    });
  }

  // list all Todos that're visible to the current user, together with their authors
  const { data: todos } = useFindManyTodo({
    where: {
      fromList: {
        id: CURRENT_LIST,
      },
    },
    include: { fromOwner: true },
    orderBy: { createdAt: "desc" },
  });

  console.log("Todos", todos);

  return (
    <>
      <Stack p="xl">
        <h1>Create a Todo</h1>
        <form onSubmit={handleFormSubmit}>
          <Stack>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
              required
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              onKeyDown={handleKeyDown}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
              required
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              onKeyDown={handleKeyDown}
            />
            <Button type="submit"> Create ⌘ ↵ </Button>
          </Stack>
        </form>
      </Stack>
      <Stack p="xl">
        <h1>Todos</h1>
        {todos ? (
          <Stack gap="xs">
            {todos?.length === 0 ? (
              <span>There’s nothing yet!</span>
            ) : (
              todos?.map((t) => {
                return <TodoCard key={t.id} todo={t} showDelete={true} />;
              })
            )}
          </Stack>
        ) : (
          <Stack align="center">
            <Loader size="lg" />
            <span>Loading...</span>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default Todos;
