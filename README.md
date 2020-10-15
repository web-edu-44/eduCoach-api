# eduCoach - APIs
This is the REST api that serves the frontend of the eduCoach platform. <br>
It support POST, GET, PUT, DELETE <br>

The homepage of is: https://educoach.herokuapp.com/ <br>
There two APIs: <br>
-1 https://educoach.herokuapp.com/api/students <br>
-2 https://educoach.herokuapp.com/api/coach <br>

# https://educoach.herokuapp.com/api/students
this have the following end-points:

    // Create a new Student
    POST: https://educoach.herokuapp.com/api/students
  
    // Retrieve all Students
    GET: https://educoach.herokuapp.com/api/students
  
    // Retrieve all specific Student by username
    GET: https://educoach.herokuapp.com/api/students/s/:username
  
    // Retrieve a single Student with id
    GET: https://educoach.herokuapp.com/api/students/:id
  
    // Update a Student with id
    PUT: https://educoach.herokuapp.com/api/students/:id
  
    // Delete a Student with id
    DELETE: https://educoach.herokuapp.com/api/students/:id
  
    // Delete all Student
    DELETE https://educoach.herokuapp.com/api/students/
  
  
  # https://educoach.herokuapp.com/api/coach
  
  The end-points for the coach api is similar to that of the student

    // Create a new Coach
    POST: https://educoach.herokuapp.com/api/coach
  
    // Retrieve all Coaches
    GET: https://educoach.herokuapp.com/api/coach
  
    // Retrieve all specific Coach by username
    GET: https://educoach.herokuapp.com/api/coach/s/:username
  
    // Retrieve a single Coach with id
    GET: https://educoach.herokuapp.com/api/coach/:id
  
    // Update a Coach with id
    PUT: https://educoach.herokuapp.com/api/coach/:id
  
    // Delete a Coach with id
    DELETE: https://educoach.herokuapp.com/api/coach/:id
  
    // Delete all Coach
    DELETE https://educoach.herokuapp.com/api/coach/
  
