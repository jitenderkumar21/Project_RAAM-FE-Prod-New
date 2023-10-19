import React from 'react'
import './Timeslot.css'

const Timeslot = ({ timeslot, classid, isSelected, onSelect }) => {
    return (
       
          <label className='container'>
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onSelect(timeslot.slotid, classid)}
            />
            {timeslot.value}
            <span class="checkmark"></span>
          </label>
       
      );
}

export default Timeslot