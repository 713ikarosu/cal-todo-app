import React, { useState } from "react";
import { Calendar as OriginCalendar } from "react-native-calendars";

const Calendar = () => {
  const [selected, setSelected] = useState("");

  return (
    <OriginCalendar
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: "red",
        },
      }}
    />
  );
};

export default Calendar;
