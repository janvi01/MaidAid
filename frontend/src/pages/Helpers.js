import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const SocialProfileWithImage = ({
  name = "John Doe",
  age = 21,
  location = "Delhi, India",
  salary = 10000,
}) => {
  const randomSeed = Math.floor(Math.random() * 1000);
  return (
    <Center py={6}>
      <Box
        minW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            backgroundColor={"white"}
            size={"xl"}
            src={`https://avatars.dicebear.com/api/croodles/${randomSeed}.svg`}
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {name}
            </Heading>
            <Text color={"gray.500"}>Maid</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={12}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{age}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Age
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{location}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Location
              </Text>
            </Stack>
          </Stack>
          <Stack spacing={0} align={"center"} mt={4}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              ₹{salary}
            </Heading>
            <Text color={"gray.500"}>Salary/Month</Text>
          </Stack>

          <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Book
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default function Helpers() {
  return (
    <VStack mt={16}>
      <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
        <Text as={"span"}>Meet our</Text>{" "}
        <Text color={"#0AC05E"} as={"span"}>
          Helpers
        </Text>
      </Heading>
      <Stack direction={["column", "row"]} spacing={"16"}>
        {/* we can map here dummy data */}
        {MaidData.map((data, index) => (
          <SocialProfileWithImage
            key={index}
            name={data.name}
            age={data.age}
            location={data.location}
            salary={data.salary}
          />
        ))}
      </Stack>
    </VStack>
  );
}

const MaidData = [
  {
    name: "Ravi Shah",
    age: 25,
    location: "Mumbai, India",
    salary: 14000,
  },
  {
    name: "Priya Gupta",
    age: 32,
    location: "Delhi, India",
    salary: 23000,
  },
  {
    name: "Amit Patel",
    age: 29,
    location: "Bengaluru, India",
    salary: 20000,
  },
  {
    name: "Anjali Singh",
    age: 35,
    location: "Kolkata, India",
    salary: 30000,
  },
  {
    name: "Sohan Jain",
    age: 20,
    location: "Delhi, India",
    salary: 10000,
  },
  {
    name: "Neha Patel",
    age: 27,
    location: "Ahmedabad, India",
    salary: 17000,
  },
  {
    name: "Rohit Sharma",
    age: 22,
    location: "Chennai, India",
    salary: 12000,
  },
  {
    name: "Anisha Das",
    age: 24,
    location: "Hyderabad, India",
    salary: 15000,
  },
  {
    name: "Vikram Mehta",
    age: 30,
    location: "Pune, India",
    salary: 22000,
  },
  {
    name: "Diya Khan",
    age: 28,
    location: "Delhi, India",
    salary: 18000,
  },
];