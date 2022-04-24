import { Box, Center, Text, Stack, FormControl, FormLabel, Input, Textarea, IconButton, Button, Image, Checkbox, Alert, AlertIcon, Spinner, SimpleGrid, Link } from "@chakra-ui/react";

import { useForm } from "react-hook-form";

export function RegisterArtist() {
    const { handleSubmit, register } = useForm();
    const onSubmit = async ({
        name,
        story,
        documentslink,
        DOB
    }) => {
        const data = {
            name,
            story,
            documentslink,
            DOB
        }
        try {
            const res = await fetch("https://nft-art-backend.onrender.com", {
                method: "POST",
                body: JSON.stringify(data)
            })
        } catch {
            console.log()
        }
    }
    return (
        <Box as="form" bg="gray.50" w="550px" h="500px" rounded="md" pos="relative" zIndex="1" margin="auto" paddingLeft="46px" paddingTop="44px" onSubmit={handleSubmit(onSubmit)}>
            <Stack w="90%"  >
                <FormControl id="name" h="75px">
                    <FormLabel fontSize="l">Name</FormLabel>
                    <Input {...register("name", { required: true })} placeholder="John Doe" />
                </FormControl>
                <FormControl id="story" h="100px">
                    <FormLabel fontSize="l">Your Story</FormLabel>
                    <Textarea {...register("story")} rows={2} fontSize="sm" placeholder="I always felt like I viewed the world differently from others..." />
                </FormControl>
                <FormControl id="documentslink" h="75px">
                    <FormLabel fontSize="l">Link to a drive with all documents proving your autism</FormLabel>
                    <Input {...register("documentslink")} placeholder="drive.google.com/drive/..." />
                </FormControl>
                <FormControl id="DOB" h="75px">
                    <FormLabel fontSize="l">Date of Birth</FormLabel>
                    <Input {...register("DOB")} type="date" />
                </FormControl>
                {/* Bottom bar */}
                <Stack direction="row" align="center">
                    <Button type="submit" flex="1">
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}
