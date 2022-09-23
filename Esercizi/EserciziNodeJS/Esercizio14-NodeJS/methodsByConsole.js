const surprisingFact = "The bumblebee bat is the world's smallest mammal";

const familyTree = [
    {
      name: "Person 1",
      children: [
        {
          name: "Person 2",
          children: [
            {
              name: "Person 3",
              children: [
                {
                  name: "Person 4",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  function importantTask() {
    console.count("Task molto importante");
  }

//Challenge1
console.info("Fact:", surprisingFact)
console.warn("Fact:", surprisingFact)

//Challenge2
console.table(familyTree);
console.dir({familyTree}, {depth: null});

//Challenge3


importantTask();
importantTask();
importantTask();
importantTask();
console.countReset("Task molto importante");
importantTask();
importantTask();

