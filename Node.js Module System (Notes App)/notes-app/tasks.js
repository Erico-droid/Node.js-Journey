const tasks = {
    tasks: [
        {
            text: 'grocery shopping',
            completed: true
        },
        {
            text: 'clean yard',
            completed: false
        },
        {
            text: 'Film course',
            completed: false
        }
    ],
    getTasksToDo(){
        return this.tasks.filter((task) => {
            return task.completed == false
        })
    }
}

console.log(tasks.getTasksToDo())