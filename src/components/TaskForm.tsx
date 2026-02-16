import React from 'react';
import { Box, TextField, Typography, Grid, Button, MenuItem, Snackbar, Alert } from '@mui/material';

const TaskForm: React.FC<{ onAddTask: (task: any) => void }> = ({ onAddTask }) => {
  const [open, setOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [severity, setSeverity] = React.useState<'success' | 'error'>('success');
  
  const [formData, setFormData] = React.useState({
    type: 'todo',
    subject: '',
    assignedTo: 'user1',
    dueDate: '2018-11-13',
    status: 'Not Started'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleApply = () => {
    if (!formData.subject) {
        setSnackbarMessage('Subject is required');
        setSeverity('error');
        setOpen(true);
        return;
    }
    // Map form data to task structure
    onAddTask({
        subject: formData.subject,
        type: formData.type === 'todo' ? 'To Do' : 'Call',
        assignedTo: formData.assignedTo === 'user1' ? 'Ravi Kumar' : 'Other User',
        dueDate: formData.dueDate,
        status: 'Not Started'
    });
    setSnackbarMessage('Task added successfully');
    setSeverity('success');
    setOpen(true);
    // Reset subject only or other fields as needed
    setFormData(prev => ({ ...prev, subject: '' }));
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        New Task
      </Typography>
      <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
              <TextField 
                required 
                select
                fullWidth 
                label="Task Type" 
                name="type"
                value={formData.type}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              >
                 <MenuItem value="todo">To Do</MenuItem>
                 <MenuItem value="call">Call</MenuItem>
              </TextField>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
              <TextField 
                fullWidth 
                required
                label="Subject" 
                name="subject"
                value={formData.subject}
                error={!formData.subject && open && severity === 'error'}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
              <TextField 
                required 
                select
                fullWidth 
                label="Assigned to" 
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              >
                  <MenuItem value="user1">Ravi Kumar</MenuItem>
              </TextField>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
             <Box sx={{ display: 'flex', gap: 2 }}>
                 <TextField
                    fullWidth
                    type="date"
                    label="Start Date"
                    defaultValue="2018-11-13"
                    InputLabelProps={{ shrink: true }}
                 />
                 <TextField
                    fullWidth
                    type="date"
                    label="End Date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                 />
             </Box>
          </Grid>
           <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                type="date"
                label="Remind On"
                defaultValue="2018-11-13"
                InputLabelProps={{ shrink: true }}
             />
          </Grid>
          <Grid size={{ xs: 12, sm: 12 }}>
               <TextField 
                fullWidth 
                label="Details" 
                multiline
                rows={6}
                InputLabelProps={{ shrink: true }}
              />
          </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
          <Button variant="outlined" color="inherit">Cancel</Button>
          <Button variant="contained" color="primary" sx={{ color: 'white' }} onClick={handleApply}>Apply</Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default TaskForm;
