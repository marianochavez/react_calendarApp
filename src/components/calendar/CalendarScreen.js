import React from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');
const localizer = momentLocalizer(moment) // or globalizeLocalizer
const eventsList = [
  {
    title: 'All Day Event very long title',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgColor: '#f56954',
  }
]

export const CalendarScreen = () => {

  const eventStyleGetter = ( event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#f56954',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white',
    }
    return {
      style
    }
  };

  return (
      <div className='calendar-screen'>
        <Navbar/>
        <Calendar
          localizer={localizer}
          events={eventsList}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          eventPropGetter= {eventStyleGetter}
        />
      </div>
  )
}
