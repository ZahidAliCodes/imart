// --- JAVASCRIPT FOR THE TIMER ---

        // Set the date we're counting down to.
        // For "Deals of the Day", this is typically the end of the current day.
        const countDownDate = new Date();
        // For demonstration, let's set it to expire 2 hours from now.
        // You can change this to whatever you need.
        // For example, to set it to midnight:
        // countDownDate.setHours(24, 0, 0, 0); 
        countDownDate.setHours(countDownDate.getHours() + 2);

        // Get the HTML elements
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");
        const timerContainer = document.querySelector(".countdown-timer");


        // Update the count down every 1 second
        const countdownInterval = setInterval(function() {

            // Get today's date and time (in milliseconds)
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Function to add a leading zero if the number is less than 10
            const formatTime = (time) => time < 10 ? `0${time}` : time;

            // Display the result in the elements
            daysEl.innerHTML = formatTime(days);
            hoursEl.innerHTML = formatTime(hours);
            minutesEl.innerHTML = formatTime(minutes);
            secondsEl.innerHTML = formatTime(seconds);

            // If the count down is finished, show a message and stop the timer
            if (distance < 0) {
                clearInterval(countdownInterval);
                timerContainer.innerHTML = "<h3 style='margin:0;'>DEALS EXPIRED</h3>";
            }
        }, 1000);