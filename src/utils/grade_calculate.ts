// CalculateGrade
const calculateGrade = (score: number): string => {
  if (score >= 91) return "A+";
  else if (score >= 86) return "A";
  else if (score >= 81) return "B+";
  else if (score >= 76) return "B";
  else if (score >= 71) return "C+";
  else if (score >= 66) return "C";
  else if (score >= 61) return "D+";
  else if (score >= 56) return "D";
  else if (score >= 1) return "F";
  else return "I";
};

export default calculateGrade;
