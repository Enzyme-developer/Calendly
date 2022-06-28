import React from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import { Component } from 'react';
import {useState} from 'react'
import BpkCalendar from 'bpk-component-calendar';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import format from 'date-fns/format';

import STYLES from './App.scss';
import Calendar from './components/Calendar'

const c = className => STYLES[className] || 'UNKNOWN';


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







const App = () => {
  const [date , setDate] = useState('')

  const handleDateSelect = (date) => {
    setDate(formatDateFull(date))
  }

  return (
    <div className={c('App')}>

    <header className={c('App__header')}>
      <div className={c('App__header-inner')}>
        <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Flight Schedule</BpkText>
      </div>
    </header>

    <main className={c('App__main')}>

      {/* <BpkText tagName="p" className={c('App__text')}>
        To get started, edit <BpkCode>src/App.jsx</BpkCode> and save to reload.
      </BpkText> */}

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

      <BpkButton className='button' onClick={() => alert('It works!')}>Continue</BpkButton>

    </main>
  </div>
  )
  
};

export default App;