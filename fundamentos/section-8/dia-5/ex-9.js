const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  // yearSeasons: estações do ano.

  const yearMonths = () => {
    const { spring, summer, autumn, winter } = yearSeasons;
    const months = [ ...spring, ...summer, ...autumn, ...winter];
    return months;
  }

  console.log(yearMonths());