
        var timerInterval;

        function startTimer() {

            timerInterval = setInterval(updateTimer, 1000);
        }

        function updateTimer() {
            var minutesElement = document.querySelector('.minutes');
            var secondsElement = document.querySelector('.seconds');

            var minutes = parseInt(minutesElement.textContent);
            var seconds = parseInt(secondsElement.textContent);

            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            }

            minutesElement.textContent = padZero(minutes);
            secondsElement.textContent = padZero(seconds);
            if (minutes === 0 && seconds === 0) {
                clearInterval(timerInterval);
            }
        }

        function padZero(num) {
            return (num < 10 ? '0' : '') + num;
        }
        document.getElementById("btn-start").addEventListener("click", updateTimer);