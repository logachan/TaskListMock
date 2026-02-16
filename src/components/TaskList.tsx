import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link } from '@mui/material';

interface Task {
  id: number;
  subject: string;
  type: string;
  assignedTo: string;
  dueDate: string;
  status: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography variant="h6" sx={{ p: 2 }}>Task List</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'background.default' }}>
              <TableCell>#</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Assigned to</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id} hover>
                <TableCell>{task.id}</TableCell>
                <TableCell><Link href="#" underline="hover">{task.subject}</Link></TableCell>
                <TableCell>{task.type}</TableCell>
                <TableCell>{task.assignedTo}</TableCell>
                <TableCell>{task.dueDate}</TableCell>
                <TableCell>{task.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       <Typography align="right" sx={{ p: 2, cursor: 'pointer', color: 'primary.main' }}>View More</Typography>
    </Box>
  );
};

export default TaskList;
