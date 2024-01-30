//functions that take care of backend implementations

//Write the following functions:
//1. loadTask - GET
//2. saveTask - POST
//3. updateTask - PATCH
//4. deleteTask - DELETE

const URL = 'https://63daa94619fffcd620ceff8c.mockapi.io/api/todos';
//Function:loadTasks


//Steps:
//1.
//2.
function loadTasks() {
    // console.log('GET');
    // return fetch(URL).then(response.json()).then((tasks) => tasks)

    return axios.get(URL).then(response => response.data);
}

//Function saveTask
function saveTask(task){
    // const option = {
    //     method: 'POST',
    //     body: JSON.stringify(task),
    return axios.post(URL, task);   
};
    return fetch

//Function updateTask
function updateTask(id, status) {
    console.log(`PUT: \n\tid:${id} \n\tstatus:${status}`);
    //output to the console will be:
    //PUT
    //id:1
    //status: true
    const option = {
        // method: 'PUT',
        // body: JSON.stringify({ isdone: status }),
        // headers: {
        //     'Content-Type': 'application.json',
        
        // }
        return axios.put(`${URL}/{id}` { isDone: status });
    }
}

//Function deleteTask
function deleteTask(id){
    console.log(`DELETE id:${id}`);

    //Fetch approcach
    //const options = {
    //   method:"DELETE"
    }
}