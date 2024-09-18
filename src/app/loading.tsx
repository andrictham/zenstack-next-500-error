import { Center, Loader } from "@mantine/core";

const LoadingPage = () => {
  return (
    <Center style={{ height: "100vh" }}>
      <Loader size="xl" variant="dots" />
    </Center>
  );
};

export default LoadingPage;
