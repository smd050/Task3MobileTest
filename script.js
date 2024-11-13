document.addEventListener('DOMContentLoaded', () => {

  //Camera Access and Settings Section *************************************************************

    // Access the rear camera and show the feed in the video element
    function startVideo() {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
            .then(stream => {
                const video = document.getElementById('video');
                video.srcObject = stream;
            })
            .catch(err => {
                console.error("Error accessing camera: ", err);
                alert("Camera permission is required for the app to function.");
            });
    }

    // Setup canvas and recording
    const canvas = document.createElement('canvas');
    canvas.width = 640;  // Match with video and container dimensions
    canvas.height = 360;
    const ctx = canvas.getContext('2d');

    let mediaRecorder;
    let recordedChunks = [];







    // Toggle the red border on the main container based on the switch state
    document.getElementById('recordSwitch').addEventListener('change', function() {
        const videoContainer = document.getElementById('video-container');
        videoContainer.style.borderColor = this.checked ? 'red' : 'transparent';
    });

    // Start the video stream when the page loads
    startVideo();



    //Speedometer widget function **********************************************************************

    // Function to calculate the current speed based on the stroke-dashoffset
    function calculateSpeed() {
        // Get the element
        let meterBar = document.getElementById("meter-bg-bar");
        // Get the current stroke-dashoffset
        let strokeDashoffset = parseFloat(
        window.getComputedStyle(meterBar).getPropertyValue("stroke-dashoffset")
        );
        // Calculate the current speed based on the stroke-dashoffset
        // The maximum stroke-dashoffset is 615, which corresponds to a speed of 0 km/h
        // The minimum stroke-dashoffset is 0, which corresponds to a speed of 180 km/h
        let speed = ((615 - strokeDashoffset) / 615) * 180;
        // Round the speed to the nearest integer
        speed = Math.round(speed);
        return speed;
    }
    // Function to update the speed display
    function updateSpeedDisplay() {
        // Calculate the current speed
        let speed = calculateSpeed();
        // Get the speed display element
        let speedDisplay = document.getElementById("speed");
        // Update the text content of the speed display element
        speedDisplay.textContent = speed;
        // speedDisplay.textContent = speed + ' km/h';
    }
    // Call the updateSpeedDisplay function every 100 milliseconds
    setInterval(updateSpeedDisplay, 100);




    //Lean Angle Section **********************************************************************************

    // Get the value of the <h5> element
    const angleValue = document.getElementById("leanAngle").textContent;

    // Get the slider element
    const leanSlider = document.getElementById("LeanSlider");

    // Set the slider value to the h5 value
    leanSlider.value = angleValue;
    leanSlider.addEventListener('input', function() {
        angleValue.textContent = this.value; // Update the label text with the current value of the slider
    });


    // Function to update h5 with a random number between 0 and 180
    function updateRandomNumber() {
        const randomNum = Math.floor(Math.random() * 120); // Generates a random number between 0 and 180
        angleValue.textContent = randomNum;
    }

    // Update the h5 text every 500 milliseconds (adjust as needed)
    setInterval(updateRandomNumber, 500);
    
    document.getElementById('speedSwitch').addEventListener('change', function() {
        const overlaySection = document.querySelector('.overlaySection1');
        // Toggle the hidden class based on the checkbox state
        if (this.checked) {
            overlaySection.classList.remove('hidden'); // Show content
        } else {
            overlaySection.classList.add('hidden'); // Hide content
        }
    });

    document.getElementById('LeanSwitch').addEventListener('change', function() {
        const overlaySection = document.querySelector('.overlaySection2');
        // Toggle the hidden class based on the checkbox state
        if (this.checked) {
            overlaySection.classList.remove('hidden'); // Show content
        } else {
            overlaySection.classList.add('hidden'); // Hide content
        }
    });

    document.getElementById('telemetrySwitch').addEventListener('change', function() {
        const overlaySection = document.querySelector('.overlaySection3');
        // Toggle the hidden class based on the checkbox state
        if (this.checked) {
            overlaySection.classList.remove('hidden'); // Show content
        } else {
            overlaySection.classList.add('hidden'); // Hide content
        }
    });

});