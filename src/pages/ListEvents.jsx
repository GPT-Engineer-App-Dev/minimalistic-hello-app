import { Box, Container, Input, Table, Tbody, Td, Th, Thead, Tr, Button } from '@chakra-ui/react';
import { useEvents } from '../integrations/supabase/index.js';
import { Link } from 'react-router-dom';

const ListEvents = () => {
  const { data: events, isLoading } = useEvents();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxW="container.lg" py={8}>
      <Box mb={4}>
        <Input placeholder="Search events" />
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Created at</Th>
            <Th>Name</Th>
            <Th>Date</Th>
            <Th>Venue</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {events.map((event) => (
            <Tr key={event.id}>
              <Td>#{event.id}</Td>
              <Td>{new Date(event.created_at).toLocaleDateString()}</Td>
              <Td>{event.name}</Td>
              <Td>{new Date(event.date).toLocaleDateString()}</Td>
              <Td>{event.venue}</Td>
              <Td>
                <Button as={Link} to={`/edit-event/${event.id}`} colorScheme="blue" size="sm">
                  Edit
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ListEvents;