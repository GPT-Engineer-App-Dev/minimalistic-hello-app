import { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';
import { useAddEvent } from '../integrations/supabase/index.js';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [timezone, setTimezone] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const addEvent = useAddEvent();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEvent.mutateAsync({
      name: eventName,
      description,
      location,
      address,
      timezone,
      start_date: startDate,
      end_date: endDate,
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
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add a description" />
          </FormControl>
          <FormControl id="location">
            <FormLabel>Location</FormLabel>
            <Select value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Select a location">
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </Select>
          </FormControl>
          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Add an address" />
          </FormControl>
          <FormControl id="timezone">
            <FormLabel>Timezone</FormLabel>
            <Select value={timezone} onChange={(e) => setTimezone(e.target.value)} placeholder="Select a timezone">
              <option value="timezone1">Timezone 1</option>
              <option value="timezone2">Timezone 2</option>
            </Select>
          </FormControl>
          <FormControl id="start-date">
            <FormLabel>Starts</FormLabel>
            <Input type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </FormControl>
          <FormControl id="end-date">
            <FormLabel>Ends</FormLabel>
            <Input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
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