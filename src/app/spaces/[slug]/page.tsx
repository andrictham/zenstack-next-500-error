"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  useCreateList,
  useFindManyList,
  useFindUniqueSpace,
} from "@/lib/hooks";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Button, Loader, Stack } from "@mantine/core";

const SpaceHome: NextPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { user, isSignedIn, isLoaded: isClerkLoaded } = useUser();

  const { data: space, isLoading: isSpaceLoading } = useFindUniqueSpace(
    {
      where: {
        slug,
      },
    },
    {
      enabled: !!user,
    },
  );

  const { data: lists, isLoading: isListsLoading } = useFindManyList(
    {
      where: {
        fromSpace: {
          slug,
        },
      },
      include: {
        fromOwner: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    },
    {
      enabled: !!user,
    },
  );

  const { mutate: createList } = useCreateList();

  function onCreateList() {
    const title = prompt("Enter a title for your list");
    if (!title) return;
    if (title) {
      createList({
        data: {
          title,
          fromSpace: {
            connect: {
              id: space?.id,
            },
          },
        },
      });
    }
  }

  if (!isClerkLoaded || isSpaceLoading || isListsLoading) {
    return (
      <Stack align="center" mt="xl">
        <Loader size="lg" />
        <span>Loading...</span>
      </Stack>
    );
  }

  if (!isSignedIn) {
    return (
      <Stack align="center">
        <h1>You must be logged in to view this page.</h1>
        <SignInButton />
      </Stack>
    );
  }

  if (!space || !lists) {
    return (
      <Stack align="center">
        <h1>No space found.</h1>
      </Stack>
    );
  }

  return (
    <Stack p="lg">
      <h1>
        Welcome to space <em>{space.name}</em>
      </h1>
      <Stack>
        <Button onClick={onCreateList}>Create a list</Button>
      </Stack>
      <Stack>
        {lists.map((list) => (
          <Link key={list.id} href={`/spaces/${slug}/${list.id}`}>
            {list.title}
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default SpaceHome;
