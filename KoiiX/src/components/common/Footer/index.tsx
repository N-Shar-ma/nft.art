// ui
import { Box, Flex, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

export function Footer() {
  return (
    <Box color="white" bg="teal.500">
      <Flex mx="auto" maxW="container.lg" justify="space-between" align="center" py="2" px="4">
        <p>© NAAPH</p>
        <Button as={Link} isExternal href="https://github.com/N-Shar-ma/nft.art">
          Source Code ↗
        </Button>
      </Flex>
    </Box>
  );
}
