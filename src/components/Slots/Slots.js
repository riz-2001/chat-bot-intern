import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Slide from '../Slide/Slide';
import TimeSlot from './TimeSlot';

function Slot(props) {
  const moring = ['08:00 am', '09:00 am', '10:00 am', '11:00 pm'];
  const afternoon = ['02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm'];
  const evening = ['06:00 pm', '07:00 pm', '08:00 pm', '09:00 pm'];
  const [selectedDate, setSelectedDate] = useState(
    moment().format('DD/MM/YYYY')
  );
  const [dates, setDates] = useState([
    {
      date: moment().subtract(1, 'day'),
      id: Date.now() - 3,
    },
    {
      date: moment(),
      id: Date.now() - 2,
    },
    {
      date: moment().add(1, 'day'),
      id: Date.now() - 1,
    },
  ]);

  const handleDateClick = (date) => {
    let d = moment(date).format('DD/MM/YYYY');
    setSelectedDate(d);
  };

  const handleScrollLeft = () => {
    let yesterday = moment().subtract(2, 'day');
    let d = moment(dates[0].date).subtract(1, 'day');
    let lastDay = d.isSame(yesterday, 'day');
    if (lastDay) return;
    let obj = {
      date: d,
      id: Date.now(),
    };
    let date = [...dates];
    date.pop();
    setDates([obj, ...date]);
  };

  const handleScrollRight = () => {
    let d = moment(dates[dates.length - 1].date).add(1, 'day');
    let obj = {
      date: d,
      id: Date.now(),
    };
    let date = [...dates];
    date.shift();
    setDates([...date, obj]);
  };

  const handleClickOnTime = (d) => {
    let dateTime = selectedDate;
    dateTime += ' ' + d;
    setSelectedDate(dateTime);
  };

  return (
    <div>
      <Slide
        data={dates}
        handleDateClick={handleDateClick}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
      />
      <div className='text-xs'>
        <p className='m-1 mt-2 text-slate-500'>Morning</p>
        <TimeSlot handleClickOnTime={handleClickOnTime} time={moring} />
        <p className='m-1 mt-2 text-slate-500'>Afternoon</p>
        <TimeSlot handleClickOnTime={handleClickOnTime} time={afternoon} />
        <p className='m-1 mt-2 text-slate-500'>Evening</p>
        <TimeSlot handleClickOnTime={handleClickOnTime} time={evening} />
      </div>
    </div>
  );
}

export default Slot;
