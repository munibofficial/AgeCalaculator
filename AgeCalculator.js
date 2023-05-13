import React, { useState } from "react";
let years =0;
let months =0;
let days =0;


function AgeCalculator() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateAge();
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    years = today.getFullYear() - birthDate.getFullYear();
    months = today.getMonth() - birthDate.getMonth();
    days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const ageString = `${years} years\n${months} months\n${days} days`;
    setAge(ageString);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
      <div className="form-line">
          <div className="form-group">
            <label htmlFor="day">DAY</label>
            <input
              type="number"
              id="day"
              name="day"
              value={day}
              onChange={(event) => setDay(event.target.value)}
              min="1"
              max={month === '2' ? '28' : ['4', '6', '9', '11'].includes(month) ? '30' : '31'}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="month">MONTH</label>
            <input
              type="number"
              id="month"
              name="month"
              value={month}
              onChange={(event) => setMonth(event.target.value)}
              min="1"
              max="12"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">YEAR</label>
            <input
              type="number"
              id="year"
              name="year"
              value={year}
              onChange={(event) => setYear(event.target.value)}
              min="1900"
              max={new Date().getFullYear()}
              required
            />
        </div>
        </div>
        <div>
        <hr className="divider" />
        <button type="submit" className="my-button">
          <img src="/assets/images/icon-arrow.svg" alt="Submit" />
        </button>
           </div>
      </form>
      {!age && (
        <div>
          <p>
          <span style={{ color: "purple" }}>----- </span>
          <span style={{ fontSize: 32, fontFamily: "Poppins" }}>Years</span>
          </p>
          <p>
             <span style={{ color: "purple" }}>----- </span>
             <span style={{ fontSize: 32, fontFamily: "Poppins" }}>Months</span>
          </p>
          <p>
          <span style={{ color: "purple" }}>----- </span>
          <span style={{ fontSize: 32, fontFamily: "Poppins" }}>Days</span>
          </p>
        </div>
      )}
      {age && (
        <div>
          <p>
          <span style={{ color: "purple" , fontSize: 32,fontFamily: "Poppins" }}>{years}</span>
          <span style={{ fontSize: 32, fontFamily: "Poppins" }}> year</span>
          </p>
          <p>
          <span style={{ color: "purple" , fontSize: 32,fontFamily: "Poppins" }}>{months}</span>
          <span style={{ fontSize: 32, fontFamily: "Poppins" }}> month</span>
          </p>
          <p>
          <span style={{ color: "purple" , fontSize: 32,fontFamily: "Poppins" }}>{days}</span>
          <span style={{ fontSize: 32, fontFamily: "Poppins" }}> day</span>
          </p>

          <p>You Are {age} Old</p>
        </div>
      )}

      <div className="attribution"></div>
    </div>
  );  
}

export default AgeCalculator;
