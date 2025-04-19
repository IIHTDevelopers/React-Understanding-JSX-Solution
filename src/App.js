import React from 'react';

const App = () => {
  // Static greeting message
  const greetingMessage = "Welcome to My React App";

  // Static user status (could be Online or Offline)
  const isOnline = true;

  // Simulating time of day (morning or evening)
  const timeOfDay = "morning";  // Change this to "evening" to test the other message

  // Conditional user status message
  const userStatus = isOnline ? "User is Online" : "User is Offline";

  // Conditional greeting message based on time of day
  let timeGreeting;
  if (timeOfDay === "morning") {
    timeGreeting = "Good Morning!";
  } else if (timeOfDay === "evening") {
    timeGreeting = "Good Evening!";
  }

  return (
    <div>
      {/* Task 1: Static greeting */}
      <h1>{greetingMessage}</h1>

      {/* Task 2: Display User Status */}
      <p>{userStatus}</p>

      {/* Task 3: Conditional time of day greeting */}
      <p>{timeGreeting}</p>
    </div>
  );
};

export default App;
