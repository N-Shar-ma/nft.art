// ui
import { Box, Flex, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

/**
 * Generate and return a footer with credits and source code link
 * @constructor Construct a website footer.
 */
export function Footer() {
  return (
    <Box color="white" bg="teal.500">
      <Flex mx="auto" maxW="container.lg" justify="space-between" align="center" py="2" px="4">
        <p>© NAAP</p>
        <Button as={Link} isExternal href="https://github.com/N-Shar-ma/nft.art">
          Source Code ↗
        </Button>
      </Flex>
    </Box>
  );
}
