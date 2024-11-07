window.onload = function() {
    const videoElement = document.getElementById('video');

    // Check if the browser supports mediaDevices API
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Access the webcam
        navigator.mediaDevices.getUserMedia({ video: true })
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
