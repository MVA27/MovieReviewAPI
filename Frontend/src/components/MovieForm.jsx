import { InfoCircledIcon } from "@radix-ui/react-icons";
import { TextField, TextArea, Button, Container, Box, Callout } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export default function MovieForm() {

    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [status, setStatus] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setStatus(false), 3000); // Hide after 3 seconds
        return () => clearTimeout(timer);
      }, [status]);

    const handleSubmit = async (e)=>{

        e.preventDefault();

        const endpoint = import.meta.env.VITE_API_ENDPOINT

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, review }),
        });

        if (response.ok) {
            setStatus(true);
        }

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
                    {
                        status && 
                        (
                            <Callout.Root color='orange' mt='4'>
                            <Callout.Icon>
                                <InfoCircledIcon />
                            </Callout.Icon>
                            <Callout.Text>
                                Movie Added
                            </Callout.Text>
                            </Callout.Root>            
                        )
                    }                    
                </Container>
            </Box>
        </>
    );
}