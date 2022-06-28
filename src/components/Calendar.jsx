import React, { Component } from 'react';
import {useState} from 'react'
import BpkCalendar from 'bpk-component-calendar';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import format from 'date-fns/format';

const formatDateFull = date => format(date, 'EEEE, dd MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');
const daysOfWeek = [
{
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
    },
    {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: true,
    },
    {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    index: 2,
    isWeekend: false,
    },
    {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
    },
    {
    name: 'Thursday',
    nameAbbr: 'Thu',
    index: 4,
    isWeekend: false,
    },
    {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
    },
    {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
    },
];

const Calendar = () => {
    const [date , setDate] = useState('')

    // this.state = {
    //   selectionConfiguration: {
    //     type: single,
    //     date: null,
    //     }
    // };

  const handleDateSelect = (date) => {
    setDate(formatDateFull(date))
  }

    return (
      <div>
        <BpkInput
          id='dateInput'
          type={INPUT_TYPES.text}
          name='date'
          value={date}
          placeholder='Departure date'
        />
        
        <BpkCalendar
          id='calendar'
          onDateSelect={handleDateSelect}
          formatMonth={formatMonth}
          formatDateFull={formatDateFull}
          daysOfWeek={daysOfWeek}
          weekStartsOn={0}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
        //   selectionConfiguration={this.state.selectionConfiguration}
        />
      </div>
      
    )
  }

export default Calendar;
