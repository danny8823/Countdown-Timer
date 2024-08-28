// ! -- DOM
document.addEventListener('DOMContentLoaded',()=>{
    // ! -- SELECT ELEMENTS --
    const startButton = document.getElementById('start-countdown')
    const pauseButton = document.getElementById('pause-countdown')
    const cancelButton = document.getElementById('cancel-countdown')
    const resumeButton = document.getElementById('resume-countdown')

    // * INITIAL VALUES
    let countdownTimer;
    let endTime;

    // ! -- FUNCTION TO UPDATE THE DISPLAY -- 
    function updateDisplay(time){
        // ? get days
        const days = Math.floor(time/(1000 * 60 * 60 * 24))
        // ? get hours
        const hours = Math.floor((time % (1000 * 60 * 60 * 24))/(1000 * 60))
        // ? get minutes
        const minutes = Math.floor((time % (1000 * 60 * 60))/(1000 * 60))
        // ? get seconds
        const seconds = Math.floor((time % (1000 * 60))/(1000 * 60))
        document.getElementById('days').textContent = days
            .toString()
            .padStart(2,"0")
        
        document.getElementById('hours').textContent = hours
            .toString()
            .padStart(2,"0")

        document.getElementById('minutes').textContent = minutes
            .toString()
            .padStart(2,"0")

        document.getElementById('seconds').textContent = seconds
            .toString()
            .padStart(2,"0")
    } 

    // ! -- FUNCTION TO RESET UPDATE THE DISPLAY --
    function resetDisplayAndButtons() {
        document.getElementById('target-date').value=''
        document.getElementById('days').value = '00'
        document.getElementById('hours').value = '00'
        document.getElementById('minutes').value = '00'
        document.getElementById('seconds').value = '00'
        startButton.disabled = false;
        pauseButton.disables = true;
        resumeButton.disabled = true;
        cancelButton.disabled = true;
    }
    // ! -- FUNCTION TO START THE COUNTDOWN --
    function startCountDown(duration, isResuming=false){
        if(!isResuming){
            endTime = Date.now() + duration
        }
        countdownTimer = setInterval(()=>{
            const now = Date.now();
            const timeLeft = endTime - now;
        },1000)
    } 
    // ! -- FUNCTION TO DISPLAY THE MESSAGE --  
    // ! -- FUNCTION TO ADD EVENT LISTENERS TO THE BUTTONS -- 
    // * START BUTTON
    // * PAUSE BUTTON
    // * RESUME BUTTON
    // * CANCEL BUTTON
    // ! -- FUNCTION TO LOAD AND AUTO-START THE COUNTDOWN IF A SAVED TARGET EXISTS --

})