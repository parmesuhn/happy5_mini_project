import React from 'react';
import Sidebar from './Sidebar.js';
import QuarterlyCard from './QuarterlyCard.js';
import './App.css';

function App(){
  const quarters = [
    {
      quarter: 'Q1 2019',
      months: 'January - March',
      tasks: [
        {
          description: 'Re-designed the zero-g doggie bags. No more spills!',
          progress: 64,
        },
        {
          description: 'Travel & Relocation Support',
          progress: 12,
        },
      ],
    },
    {
      quarter: 'Q2 2019',
      months: 'April - June',
      tasks: [],
    },
    {
      quarter: 'Q3 2019',
      months: 'July - September',
      tasks: [
        {
          description: 'Bundle interplanetary analytics for improved transmission',
          progress: 90,
        },
      ],
    },
    {
      quarter: 'Q4 2019',
      months: 'October - December',
      tasks: [
        {
          description: 'Data Migration: Performance & Culture End Game',
          progress: 63,
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <h1>Product Roadmap</h1>
        <div className="quarterly-cards">
          {quarters.map((quarter, index) => (
            <QuarterlyCard
            key={index}
            quarter={quarter.quarter}
            months={quarter.months}
            tasks={quarter.tasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

