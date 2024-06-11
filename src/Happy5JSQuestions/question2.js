const matchList = [
    ["mu", "city"],
    ["munchen", "mu"],
    ["city", "munchen"],
  ];
  
  const resultMatch = [1, 0, 1];
  
  const generateWinner = () => {
    const scores = {};
  
    for (let i = 0; i < matchList.length; i++) {
      const homeTeam = matchList[i][0];
      const awayTeam = matchList[i][1];
      const result = resultMatch[i];
  
      let winningTeam;
      if (result === 0) {
        winningTeam = homeTeam;
      } else {
        winningTeam = awayTeam;
      }
  
      if (scores[winningTeam]) {
        scores[winningTeam] += 3;
      } else {
        scores[winningTeam] = 3;
      }
    }
  
    let maxScore = 0;
    let winners = [];
    for (const team in scores) {
      if (scores[team] > maxScore) {
        maxScore = scores[team];
        winners = [team];
      } else if (scores[team] === maxScore) {
        winners.push(team);
      }
    }
  
    return winners;
  };
  
  const winner = generateWinner();
  console.log(winner);
  