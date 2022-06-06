const persons = [
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Rossi',
      age: 25
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Verdi',
      age: 32
    },
    {
      id: 3,
      firstName: 'Giovanni',
      lastName: 'Rossi',
      age: 35
    }
  ];
  
  const jobs = [
    {
      id: 1,
      jobTitle: 'CEO'
    },
    {
      id: 2,
      jobTitle: 'Project Manager'
    },
    {
      id: 3,
      jobTitle: 'Developer'
    }
  ];
  
  
  function fetchPersonById(personid){
    return new Promise((resolve,reject) =>{
      setTimeout(() => {
        resolve(persons.find(item => item.id === personid))
      }, 2000);
    })
  }
  
  function fetchJobById(jobid){
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve(jobs.find(item => item.id === jobid))
      }, 2000);
    })
  }
  
  Promise.all([fetchPersonById(1), fetchJobById(1)]).then(item => console.log(item))