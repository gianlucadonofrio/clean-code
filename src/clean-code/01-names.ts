(() => {
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  const arhivos = filesToEvaluate.map((file) => file.flagged);

  //Malo
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  const today = new Date();

  const elapsedTimeInDays: number = 12;

  const numberOfFiles = 12;

  const name = "Gianluca";

  const lastName = "Donofrio";

  const daysSinceModification = 12;

  const maxClassesPerStudent = 12;
})();
