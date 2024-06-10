import React from 'react';
import './QuarterlyCard.css';

const QuarterlyCard = ({ quarter, months, tasks }) => {
  return (
    <div className="quarterly-card">
      <h2>{quarter}</h2>
      <h3>{months}</h3>
      {tasks.length === 0 ? (
        <p>No Task Available</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="task">
            <p>{task.description}</p>
            <div className="progress">
              <span>{task.progress}%</span>
            </div>
          </div>
        ))
      )}
      <button className="add-task-btn">+ Create new task</button>
    </div>
  );
};

export default QuarterlyCard;
