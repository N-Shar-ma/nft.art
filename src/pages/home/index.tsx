// ui
import { Box } from "@chakra-ui/react";
import { DragAndDropUploader, Leaderboard } from "components/widgets";

/**
 * Generate and return the home page. The home page is where the main content is displayed. It contains the DragAndDropUploader and the Leaderboard.
 * @constructor Construct the home page template.
 */
export function Home() {
  return (
    <Box py="4" px="4" color="blue.500" bg="white">
      {/* Container */}
      <Box maxW="container.lg" mx="auto" pb="8">
        {/* Drag and drop uploader to Koi.rocks */}
        <DragAndDropUploader />
        {/* Leaderboard */}
        <Leaderboard />
      </Box>
    </Box>
  );
}
