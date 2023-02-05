let accelerometer = null;
try {
  accelerometer = new Accelerometer({ referenceFrame: "device" });
  accelerometer.addEventListener("error", (event) => {
    // Handle runtime errors.
    if (event.error.name === "NotAllowedError") {
      // Branch to code for requesting permission.
    } else if (event.error.name === "NotReadableError") {
      document.write("Cannot connect to the sensor.");
    }
  });
  accelerometer.addEventListener("reading", () => reloadOnShake(accelerometer));
  accelerometer.start();
} catch (error) {
  // Handle construction errors.
  if (error.name === "SecurityError") {
    // See the note above about feature policy.
    document.write("Sensor construction was blocked by a feature policy.");
  } else if (error.name === "ReferenceError") {
    document.write("Sensor is not supported by the User Agent.");
  } else {
    throw error;
  }
}
