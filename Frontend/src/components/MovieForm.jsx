import { TextField, TextArea, Button, Container, Box } from "@radix-ui/themes";
import { useState } from "react";

export default function MovieForm() {

    const [name, setName] = useState("");
    const [review, setReview] = useState("");

    function handleSubmit(e) {

        const endpoint = import.meta.env.VITE_API_ENDPOINT

        fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, review }),
          });

        e.preventDefault();
    }

    return (
        <>
            <Box mt="4">
                <Container size="1">
                    <form onSubmit={ handleSubmit }>
                        <TextField.Root 
                            value={name} 
                            onChange={ (e)=>{ setName(e.target.value) } } 
                            color="orange" 
                            size="2" 
                            placeholder="Enter the movie name..." 
                            m="1" 
                        />
                        <TextArea 
                            value={review} 
                            onChange={ (e)=>{ setReview(e.target.value) } } 
                            color="orange" 
                            placeholder="Enter movie review..." 
                            m="1"
                        />
                        <Button color="orange" variant="solid" type="submit" m="1">Enter</Button>
                    </form>                    
                </Container>
            </Box>
        </>
    );
}