import { Box, Card, Flex, Text, Avatar } from "@radix-ui/themes";
import { useNavigate  } from "react-router-dom";
import { ROUTES } from '../constants/routes.js'

export default function Moviecard() {
    
    const navigate = useNavigate();
    
    return (
        <>
            <Box mr="6" ml="6">
                <Card size="3" onClick={ ()=>{ navigate(ROUTES.DETAIL) } } mb="2">
                    <Flex gap="3" align="">
                        <Avatar
                            size="7"
                            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                            fallback="T"
                        />
                        <Box>
                            <Text as="div" size="2" weight="bold">
                                Teodros Girmay
                            </Text>
                            <Text as="div" size="2" color="gray">
                                Engineering
                            </Text>
                        </Box>
                    </Flex>
                </Card>
            </Box>

        </>
    );
}