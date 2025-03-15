const workouts = [
    "Push-ups",
    "Sit-ups",
    "Squats",
    "Lunges",
    "Plank",
    "Jumping Jaks",
    "Burpees",
    "Mountain Climbers"
]; 

function getRandomWorkout() {
    const randomIndex = Math.floor(Math.random() * workouts.length());
    return workouts[randomIndex]; 
}

// Displays the workout in the containers
function displayWorkout() {
    const workout = getRandomWorkout(); 
    const workoutContainers = document.querySelectorAll('.workoutContainer');

    // Randomly select a container
    const randomContainerIndex = Math.floor(Math.random() * workoutContainers.length);
    workoutContainers[randomContainerIndex].textContent = workout;
}
 
// Event listeners for buttons 
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', displayWorkout);
}); 