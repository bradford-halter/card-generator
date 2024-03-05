import React from 'react';
import '@radix-ui/themes/styles.css';
import {Box, Button, Flex, Heading, TextField, Theme} from '@radix-ui/themes';


const CardGenerator = () => {
    const generateCard = () => {
        console.log('hihi')
    }

    return (
        <div>
            <Theme>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    height: '100vh'
                }}>
                    <Heading as="h1" style={{marginTop: '80px', marginBottom: '40px'}}>
                        Super Cool AI Card Generator
                    </Heading>
                    <Flex direction="column" gap="3" style={{width: 600}}>
                        <TextField.Input size="3" placeholder="Start your card with a prompt..."/>
                    </Flex>
                    <Button color="blue" size="3"
                            style={{marginTop: '40px', paddingLeft: '30px', paddingRight: '30px', cursor: 'pointer'}}
                            onClick={generateCard}>
                        Generate
                    </Button>
                </Box>
            </Theme>
        </div>
    );
}

export default CardGenerator;
