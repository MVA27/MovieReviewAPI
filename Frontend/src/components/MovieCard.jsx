import { Box, Card, Flex, Text, Avatar, IconButton } from "@radix-ui/themes";
import {  MagnifyingGlassIcon, TrashIcon } from "@radix-ui/react-icons"
import { useNavigate  } from "react-router-dom";
import { ROUTES } from '../constants/routes.js'

export default function Moviecard({id, name, review, removeData}) {
    
    const navigate = useNavigate();
    
    return (
        <>
            <Box mr="6" ml="6">
                <Card size="3" mb="2">
                    <Flex gap="3" align="">
                        <Avatar
                            size="7"
                            color="orange"
                            fallback={name[0]}
                        />
                        <Box>
                            <Text as="div" size="7" weight="bold" onClick={ ()=>{ navigate(ROUTES.DETAIL, { state: { id, name, review} }) } }>
                                {name}
                            </Text>
                            <Text as="div" size="2" color="gray">
                                {review}
                            </Text>
                        </Box>
                        <IconButton onClick={ ()=>{ removeData(id)} } color="crimson" variant="soft" ml="auto">
                            <TrashIcon width="18" height="18" />
                        </IconButton>
                    </Flex>
                </Card>
            </Box>

        </>
    );
}