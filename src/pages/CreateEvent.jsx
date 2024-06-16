import { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';
import { useAddEvent } from '../integrations/supabase/index.js';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const addEvent = useAddEvent();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEvent.mutateAsync({
      name: eventName,
      date,
      venue,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <Box as="form" w="100%" onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="event-name" isRequired>
            <FormLabel>Event name</FormLabel>
            <Input value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Add a name" />
          </FormControl>
          <FormControl id="date">
            <FormLabel>Date</FormLabel>
            <Input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
          </FormControl>
          <FormControl id="venue">
            <FormLabel>Venue</FormLabel>
            <Select value={venue} onChange={(e) => setVenue(e.target.value)} placeholder="Select a venue">
              <option value="venue1">Venue 1</option>
              <option value="venue2">Venue 2</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue" w="100%">
            Create event
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default CreateEvent;