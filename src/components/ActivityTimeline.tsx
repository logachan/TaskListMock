import React from 'react';
import { Box, Paper, Typography, MenuItem, Select, FormControl, OutlinedInput } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

// Mock data
const initialActivities = [
  { id: 1, type: 'call', title: 'Informed Product Features', desc: 'You contacted with', name: 'Charles Gomez', date: '13 Nov 2018', time: '05:49 AM' },
  { id: 2, type: 'task', title: 'Send Product Brochure', desc: 'You added a To DO task with', name: 'Arun Var..', date: '10 Nov 2018', time: '06:49 PM' },
  { id: 3, type: 'note', title: 'Send Product Brochure', desc: 'You added a To DO task with', name: 'Arun Var..', date: '10 Nov 2018', time: '06:49 PM' },
  { id: 4, type: 'call', title: 'Informed Product Features', desc: 'You contacted with', name: 'Charles Gomez', date: '13 Nov 2018', time: '05:49 AM' },
];

const ActivityTimeline: React.FC = () => {
    const [filterDate, setFilterDate] = React.useState('all');

    const uniqueDates = [...new Set(initialActivities.map(item => item.date))];

    const filteredActivities = filterDate === 'all' 
        ? initialActivities 
        : initialActivities.filter(act => act.date === filterDate);

  return (
    <Box sx={{ width: '100%' }}>
      {/* Filter Section */}
      <Box sx={{ mb: 2 }}>
          <FormControl fullWidth size="small">
            <Select
                displayEmpty
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                    if (selected === 'all') {
                    return <Typography color="text.secondary">Filter by date</Typography>;
                    }
                    return selected;
                }}
                sx={{ bgcolor: 'white' }}
            >
                <MenuItem value="all">All Dates</MenuItem>
                {uniqueDates.map(date => (
                    <MenuItem key={date} value={date}>{date}</MenuItem>
                ))}
            </Select>
          </FormControl>
      </Box>
      
      <Box sx={{ position: 'relative', pl: 0 }}>
          {/* Dashed Connector Line */}
          <Box sx={{
              position: 'absolute',
              top: 20,
              bottom: 20,
              left: 40, 
              borderLeft: '2px dashed #9eaebb',
              zIndex: 0
          }} />

      {filteredActivities.map((activity) => (
        <Paper 
            key={activity.id} 
            variant="outlined"
            sx={{ 
                p: 2, 
                mb: 2, 
                display: 'flex', 
                alignItems: 'flex-start', 
                position: 'relative', 
                zIndex: 1,
                borderColor: '#e0e7ff',
                borderRadius: 2
            }}
        >
            {/* Icon Container */}
            <Box sx={{ 
                mr: 3,
                minWidth: 40,
                height: 40,
                borderRadius: '50%', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid',
                borderColor: 
                    activity.type === 'call' ? '#4f46e5' : 
                    activity.type === 'task' ? '#22c55e' : '#ef4444',
                bgcolor: 'white',
                zIndex: 2
            }}>
                {activity.type === 'call' && <CallIcon sx={{ color: '#4f46e5', fontSize: 20 }} />}
                {activity.type === 'task' && <CheckCircleOutlineIcon sx={{ color: '#22c55e', fontSize: 20 }} />}
                {activity.type === 'note' && <DescriptionOutlinedIcon sx={{ color: '#ef4444', fontSize: 20 }} />}
            </Box>

            {/* Content */}
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" sx={{ color: '#1f2937' }}>
                    {activity.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {activity.desc} <span style={{ color: '#d97706' }}>{activity.name}</span>
                </Typography>
                <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 0.5 }}>
                    {activity.date}. &nbsp; {activity.time}
                </Typography>
                
                
            </Box>
        </Paper>
      ))}
      </Box>
    </Box>
  );
};

export default ActivityTimeline;
