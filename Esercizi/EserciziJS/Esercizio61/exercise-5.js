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

function fetchPersonById(personId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (persons.some((index) => index.id === personId)) {
        resolve(persons.filter((index) => index.id === personId))
      } else {
        reject(new Error('There isnt any person with that index'))
      }
    }, 1000);
  })
}

function fetchJobById(jobId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jobs.some((index) => index.id === jobId)) {
        resolve(jobs.filter((index) => index.id === jobId))
      } else {
        reject(new Error('There isnt any job with that index'))
      }
    }, 500);
  })
}

Promise.all([fetchPersonById(1), fetchJobById(1)])
.then(index => console.log(index));

Promise.race([fetchPersonById(1), fetchJobById(1)])
.then(index => console.log(index));

//Non ho ben capito cosa voglia da me l'esercizio
//Comunque nel primo caso otterremmo l'esecuzione
//delle promise in ordine da sinistra a destra
// Quindi verrà eseguita prima quella con 1000 ms
//nel secondo caso, verrà eseguita solo
//quella più rapida delle due, quindi in questo
//caso la seconda con 500ms