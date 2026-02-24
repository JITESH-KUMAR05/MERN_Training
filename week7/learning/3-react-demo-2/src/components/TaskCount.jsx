import React from 'react'

const TaskCount = ({tasks}) => {
  return (
    <div>
      <h1>Task count</h1>
      <p>{tasks.length}</p>
    </div>
  )
}

export default TaskCount
