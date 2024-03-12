const generateDates = (count) => {
  const currentDate = new Date();
  const dates = [];

  for (let i = 0; i < count; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);
    const formattedDate = nextDate.toISOString().split('T')[0];
    dates.push(formattedDate);
  }

  return dates;
};

export default generateDates;