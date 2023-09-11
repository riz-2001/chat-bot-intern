import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import Slide from '../Slide/Slide';

function Slot(props) {
  const moring = ['08:00 AM', '9:00 AM', '10:00 AM', '11:00 PM'];
  const afternoon = ['02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];
  const evening = ['06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'];
  let backRef = useRef(2);
  let frontRef = useRef(2);
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

  const handleDateClick = (id) => {
    let idx = dates.findIndex((x) => x.id === id);
    let arr = dates.slice(idx);
    console.log(arr);
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

  return (
    <div>
      <Slide
        data={dates}
        handleDateClick={handleDateClick}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
      />
      <div></div>
    </div>
  );
}

export default Slot;
