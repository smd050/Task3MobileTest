window.onload = function() {
    const videoElement = document.getElementById('video');

    // Check if the browser supports mediaDevices API
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Constraints to access the rear camera
        const constraints = {
            video: {
                facingMode: "environment"  // Use the rear camera
            }
        };

        // Access the rear camera
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function(stream) {
                videoElement.srcObject = stream;
            })
            .catch(function(error) {
                console.error("Error accessing the camera: ", error);
                alert("Camera access is required to use this feature.");
            });
    } else {
        alert("Your browser does not support camera access.");
    }
};