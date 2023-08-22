import React, { useState, useEffect } from "react";

function AppointmentComponent() {
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentDuration, setAppointmentDuration] = useState("");
  const [appointmentStatus, setAppointmentStatus] = useState("");

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const handleSetAppointment = async () => {
    try {
      var d = new Date(appointmentTime)
      var formattedAppointmentTime = new Date(d.toUTCString()).toISOString().replace(/\.\d+Z$/, "Z")
      const response = await fetch(
        "http://localhost:8080/api/set-appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            time: formattedAppointmentTime,
            duration: parseInt(appointmentDuration),
          }),
        }
      );

      if (response.status === 201) {
        setAppointmentStatus("Appointment set successfully");
      } else {
        setAppointmentStatus("Failed to set appointment");
      }
    } catch (error) {
      console.error("Error setting appointment:", error);
    }
  };

  const handleCheckAppointment = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/check-appointment"
      );
      const data = await response.text();
      setAppointmentStatus(data);
    } catch (error) {
      console.error("Error checking appointment status:", error);
    }
  };

  return (
    <div>
      <h2>Current Date and Time: {currentTime}</h2>
      <h2>Set Appointment</h2>
      <input
        type="datetime-local"
        value={appointmentTime}
        onChange={(e) => {setAppointmentTime(e.target.value)}}
      />
      <input
        type="number"
        value={appointmentDuration}
        onChange={(e) => setAppointmentDuration(e.target.value)}
        placeholder="Duration (in nanoseconds)"
      />
      <button onClick={handleSetAppointment}>Set Appointment</button>

      <h2>Appointment Status</h2>
      <button onClick={handleCheckAppointment}>Check Status</button>
      <p>{appointmentStatus}</p>
    </div>
  );
}

export default AppointmentComponent;
