import { Box, Center, Text, Stack, FormControl, FormLabel, Input, Textarea, IconButton, Button, Image, Checkbox, Alert, AlertIcon, Spinner, SimpleGrid, Link } from "@chakra-ui/react";

import { useForm } from "react-hook-form";



export function RegisterArtist() {

    const mySubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }


    const { handleSubmit, register, reset } = useForm();
    return (
        <Box bg="gray.50" w="550px" h="500px" rounded="md" pos="relative" zIndex="1" margin="auto" paddingLeft="46px" paddingTop="44px">
            <Stack w="90%"  >
                <form onSubmit={mySubmit} >
                    <FormControl id="name" h="75px">
                        <FormLabel fontSize="l">Name</FormLabel>
                        <Input {...register("name", { required: true })} placeholder="John Doe" />
                    </FormControl>
                    <FormControl id="story" h="100px">
                        <FormLabel fontSize="l">Your Story</FormLabel>
                        <Textarea {...register("story")} rows={2} fontSize="sm" placeholder="I always felt like I viewed the world differently from others..." />
                    </FormControl>
                    <FormControl id="documentslinks" h="75px">
                        <FormLabel fontSize="l">Link to a drive with all documents proving your autism</FormLabel>
                        <Input {...register("tags")} placeholder="drive.google.com/drive/..." />
                    </FormControl>
                    <FormControl id="DOB" h="75px">
                        <FormLabel fontSize="l">Date of Birth</FormLabel>
                        <Input {...register("DOB")} type="date" />
                    </FormControl>
                    {/* Bottom bar */}
                    <Stack direction="row" align="center">
                        <Button type="submit" >
                            Submit
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Box>
    );
}
