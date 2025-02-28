import { Switch, Text, Heading, TextField, Box, TextArea, Flex, Button, Separator } from '@radix-ui/themes';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function DetailedView() {
    
    const { state } = useLocation();
    const [name, setName] = useState(state.name);
    const [review, setReview] = useState(state.review);
    const [toggle, setToggle] = useState(false);

    const saveData = async ()=>{
        
        const endpoint = import.meta.env.VITE_API_ENDPOINT

        const response = await fetch(`${endpoint}/${state.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, review }),
        });

        if (!response.ok) {
            console.error('Failed to update');
            return;
        }
    }

    return (
        <>  
            <Flex direction="row" gap="3" p="1">
                <Text as="label" size="2">
                    <Flex gap="2">
                        <Switch size="3" color="orange" defaultChecked={toggle} onCheckedChange={ (checked)=>{ setToggle(checked) }}/> Edit
                    </Flex>
                </Text>
                {toggle && <Button onClick={ saveData } size="1" color='orange' variant='soft'>Save</Button>}
            </Flex>

            <br/>
            
            {
                toggle 
                ?  
                <>         
                    <Box>
                        <TextField.Root onChange={ (e)=>{ setName(e.target.value) } } value={name} radius="none" style={{  height:'70px', fontSize: '50px' }} />
                    </Box>    
                    <br/> 
                    <Box>
                        <TextArea onChange={ (e)=>{ setReview(e.target.value) } } size="3" value={review} radius="none" resize="both" style={{  fontSize: '30px' }}/>
                    </Box> 
                </>

                : 
                <>
                    <Heading size="9">
                        {name}
                    </Heading>
                    <Separator my="3" size="4" />   
                    <Text as="p" mb="5" size="4">
                        {review}
                    </Text>                    
                </>
            }
        </>
    );
}