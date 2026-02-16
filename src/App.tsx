import React from 'react';
import { Box, Container, Grid, Tabs, Tab, ThemeProvider, CssBaseline, Paper } from '@mui/material';
import theme from './theme';
import StatusStepper from './components/StatusStepper';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ActivityTimeline from './components/ActivityTimeline';

function App() {
  const [value, setValue] = React.useState(0);
  
  // Define the Task interface locally or import it if we move it to a types file later
  interface Task {
    id: number;
    subject: string;
    type: string;
    assignedTo: string;
    dueDate: string;
    status: string;
  }

  const [tasks, setTasks] = React.useState<Task[]>([
    { id: 1, subject: 'Sample', type: 'To Do', assignedTo: 'Ravi Kumar', dueDate: '13 Nov 2018', status: 'Not Started' },
    { id: 2, subject: 'Sample', type: 'To Do', assignedTo: 'Anand Pai', dueDate: '16 Nov 2018', status: 'Not Started' },
    { id: 3, subject: 'Sample', type: 'To Do', assignedTo: 'Jayaram Ramesh', dueDate: '12 Dec 2018', status: 'Not Started' },
    { id: 4, subject: 'Sample', type: 'To Do', assignedTo: 'Allan Gomez', dueDate: '20 Dec 2018', status: 'Not Started' },
  ]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleAddTask = (newTask: Omit<Task, 'id' | 'status'>) => {
      const task: Task = {
          ...newTask,
          id: tasks.length + 1,
          status: 'Not Started'
      };
      setTasks([...tasks, task]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', p: 3 }}>
        <Container maxWidth="xl">
          <StatusStepper />
          
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs value={value} onChange={handleChange} aria-label="main tabs">
              <Tab label="ACTIVITY" />
              <Tab label="INFORMATION" />
            </Tabs>
          </Box>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 8 }}>
               <Paper sx={{ p: 3 }}>
                   {/* Inner Tabs for Log Calls, Tasks, Event, etc. */}
                   <Box sx={{ mb: 2, borderBottom: 1, borderColor: 'divider' }}>
                       <Tabs value={1} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="auto">
                           <Tab label="Log Calls" />
                           <Tab label="Tasks" />
                           <Tab label="Event" />
                           <Tab label="Make Note" />
                           <Tab label="Add Attachment" />
                           <Tab label="Activity Set" />
                           <Tab label="Custom Field" />
                       </Tabs>
                   </Box>

                   <TaskForm onAddTask={handleAddTask} />
                   <TaskList tasks={tasks} />
               </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <Paper sx={{ p: 3 }}>
                    <ActivityTimeline />
                </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
