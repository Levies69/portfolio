import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Typography, Box } from '@mui/material';
import { useTheme } from './ThemeContext';
import { useInView } from 'react-intersection-observer';

export default function Lifeline() {
  const { darkMode } = useTheme();

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className={`py-16 ${darkMode ? '' : 'bg-white'} transition-colors duration-300`}>
      <Typography variant="h4" className={`text-center mb-8 ${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}>
        My College Years
      </Typography>
      <Timeline position="alternate">
        <TimelineItem ref={ref1} className={`transition-transform duration-[1000ms] from-bottom ${inView1 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box p={2}>
              <Typography variant="h6" component="span" className={`${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}>
                1st Year
              </Typography>
              <Typography className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                Started college, made new friends and learned a lot at school.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem ref={ref2} className={`transition-transform duration-[1250ms] from-bottom ${inView2 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box p={2}>
              <Typography variant="h6" component="span" className={`${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}>
                2nd Year
              </Typography>
              <Typography className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                got more serious with programming. started my first internship and made a few websites.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem ref={ref3} className={`transition-transform duration-[1500ms] from-bottom ${inView3 ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box p={2}>
              <Typography variant="h6" component="span" className={`${darkMode ? 'text-white' : 'text-black'} transition-colors duration-300`}>
                3rd Year
              </Typography>
              <Typography className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                Last year. went coding in my freetime and madew me a wheater app. also got my Software Developer degree in this year.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        
      </Timeline>
    </div>
  );
}
