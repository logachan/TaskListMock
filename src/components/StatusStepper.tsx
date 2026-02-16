import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const steps = ['Status 1', 'New', 'Working', 'Nurturing', 'Converted'];

const StatusStepper: React.FC = () => {
    return (
        <Paper elevation={0} sx={{ p: 2, mb: 3, display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'transparent' }}>
            {steps.map((label, index) => {
                const isFirst = index === 0;
                // const isLast = index === steps.length - 1;
                const isActive = index === 0; // Just for mock visualization
                const isPending = index === 1; // New

                let bgcolor = 'white';
                let color = 'text.primary';
                let iconColor = 'action.disabled';

                if (isActive) {
                    bgcolor = 'secondary.main'; // Green
                    color = 'white';
                    iconColor = 'inherit';
                } else if (isPending) {
                    bgcolor = '#fff3e0'; // Light Orange/Yellow
                    color = 'text.primary';
                    iconColor = 'warning.main';
                }

                return (
                    <Box
                        key={label}
                        sx={{
                            flex: 1,
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            px: 3,
                            bgcolor: bgcolor,
                            color: color,
                            position: 'relative',
                            // Chevron shape logic
                            clipPath: isFirst 
                                ? 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)' 
                                : 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)',
                            ml: isFirst ? 0 : -2, // Overlap slightly
                            zIndex: steps.length - index, // Stack correctly
                            filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.1))', // Note: drop-shadow applies to clip-path, box-shadow does not
                        }}
                    >
                        <Typography variant="body2" fontWeight="bold">{label}</Typography>
                         {isActive ? (
                             <CheckCircleIcon fontSize="small" color="inherit" />
                         ) : (
                             <RadioButtonUncheckedIcon fontSize="small" sx={{ color: iconColor }} />
                         )}
                    </Box>
                );
            })}
        </Paper>
    );
};

export default StatusStepper;
