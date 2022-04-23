import config from "config";
import { Link } from "react-router-dom";
// context
import { useFinnie } from "components/finnie";
// ui
import { Button, Box, Flex, Heading, Stack, Menu, MenuButton, MenuList, MenuItem, Text, IconButton, Tooltip, Image } from "@chakra-ui/react";
// icons
import { IoRemoveCircle } from "react-icons/io5";
import { ArweaveIcon, KoiiIcon } from "components/icons";
import { RiUser4Line } from "react-icons/ri";
// assets
import Logo from "assets/logo.png";
export function Nav() {
  const {
    state: { connectFinnie, disconnectFinnie, isLoading, isFinnieConnected, walletBalance, walletAddress }
  } = useFinnie();
  return (
    <Box bg="teal.500" px="4" color="white">
      <Flex mx="auto" maxW="container.lg" justify="space-between" align="center" py="3">
        <Stack as={Link} to="/" direction="row" align="center">
          <Image width={{ base: 30, lg: "40px" }} src={Logo} />
          <Heading size="md">{config?.companyName}</Heading>
        </Stack>
        <Button as={Link} to="/register-artist">
          Register Artist
        </Button>
        {/* Connect to finnie button */}
        {isFinnieConnected ? (
          <Stack direction="row" align="center" spacing="1">
            <Menu>
              <MenuButton>
                <Stack align="center" direction="row" spacing="4" cursor="pointer" bg="teal.400" px="2" py="1" rounded="sm" fontSize="sm" fontWeight="600">
                  {/* Koii balance */}
                  <Stack direction="row" align="center">
                    <KoiiIcon boxSize="25px" />
                    <Text lineHeight="1">{walletBalance?.koii?.toFixed?.(2)}</Text>
                  </Stack>
                  {/* Arweave balance */}
                  <Stack direction="row" align="center">
                    <ArweaveIcon boxSize="22px" />
                    <Text lineHeight="1">{walletBalance?.ar?.toFixed?.(3)}</Text>
                  </Stack>
                </Stack>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={disconnectFinnie} color="red" icon={<IoRemoveCircle size="20px" />}>
                  Disconnect finnie
                </MenuItem>
              </MenuList>
            </Menu>
            <Tooltip bg="teal.500" color="white" hasArrow placement="bottom" label="My content">
              <IconButton as={Link} to={`/artist/${walletAddress}`} icon={<RiUser4Line size="20px" />} aria-label="go-to-my-page" bg="teal.400" rounded="sm" h="33px" />
            </Tooltip>
          </Stack>
        ) : (
          <Button isLoading={isLoading} onClick={connectFinnie}>
            {isLoading ? "Connecting..." : "Connect finnie"}
          </Button>
        )}
      </Flex>
    </Box>
  );
}
