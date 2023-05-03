import React, { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let hour = date.getHours();
  let amPm = hour < 12 ? "AM" : "PM";
  const minute = date.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
  const formattedTime = `${hour}:${minute} ${amPm}`;

  return (
    <div style={{display: "flex", gap: "0.5em", justifyContent:"center", alignItems:"center"}}>
      <div>{formattedDate},</div>
      <div>{formattedTime}</div>
    </div>
  );
}

export default Clock;
