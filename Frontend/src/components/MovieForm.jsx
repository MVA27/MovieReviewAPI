import { TextField, TextArea, Button, Container, Box } from "@radix-ui/themes";

export default function MovieForm() {

    function handleSubmit(e) {

        alert("TBD");

        e.preventDefault();
    }

    return (
        <>
            <Box style={{ background: "", borderRadius: "var(--radius-3)" }} mt="4">
                <Container size="1">
                    <form onSubmit={ handleSubmit }>
                        <TextField.Root color="red" size="2" placeholder="Enter the movie name..." m="1" />
                        <TextArea color="red" placeholder="Enter movie review..." m="1"/>
                        <Button color="red" variant="solid" type="submit" m="1">Enter</Button>
                    </form>                    
                </Container>
            </Box>
        </>
    );
}