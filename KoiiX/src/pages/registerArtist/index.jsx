import { Box, Center, Text, Stack, FormControl, FormLabel, Input, Textarea, IconButton, Button, Image, Checkbox, Alert, AlertIcon, Spinner, SimpleGrid, Link } from "@chakra-ui/react";

import { useForm } from "react-hook-form";



export function RegisterArtist() {
    const { handleSubmit, register, reset } = useForm();
    return (
    <Box bg="gray.50" p="2" rounded="md" pos="relative" zIndex="1">
            <Stack w="100%">
            <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input {...register("name", { required: true })} placeholder="John Doe" />
            </FormControl>
            <FormControl id="story" size="sm">
                <FormLabel>Your Story</FormLabel>
                <Textarea {...register("story")} rows={2} fontSize="sm" placeholder="I always felt like I viewed the world differently from others..." />
            </FormControl>
            <FormControl id="documentslinks">
                <FormLabel>Link to a drive with all documents proving your autism</FormLabel>
                <Input {...register("tags")} placeholder="drive.google.com/drive/..." />
            </FormControl>
            <FormControl id="DOB">
                <FormLabel>Date of Birth</FormLabel>
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
