  const studentAverages = students.map(student => {
    const sum = student.scores.reduce((a, s) => a + s);

    ret