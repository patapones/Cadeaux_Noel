//Calculer le coût total des cadeaux pour noël de la famille Smith pour l'année 2022, 2021 et 2020, puis faire la moyenne des totaux.

const year2020 = [100, 97, 3, 25, 89, 349, 18, 62, 44, 48, 30];
const year2021 = [3, 99, 29, 56, 161, 93, 46, 22, 19, 11];
const year2022 = [999, 292, 100, 1, 3, 88, 66, 28, 99, 17, 64, 81];

// Résultat attendu
//Le cout de l'année 2022 est de 1838, et la moyenne des coûts est de 1081 (chiffre arrondis au supérieur)

// Faire la somme pour chaque année
function sumOneYear(years) {
  const initialValue = 0;
  const year = years.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return year;
}

const resultSumEachYear = console.log(
  `Le coût de l'année 2020 est de ${sumOneYear(
    year2020
  )}, celui de 2021 de ${sumOneYear(
    year2021
  )}, et celui de 2022 de ${sumOneYear(year2022)}`
);

resultSumEachYear;

const AverageCostGifts =
  (sumOneYear(year2020) + sumOneYear(year2021) + sumOneYear(year2022)) / 3;

const resultCostGifts = console.log(
  `La moyenne des coûts est de ${Math.round(AverageCostGifts)}`
);

resultCostGifts;

/*
const averageSum =
  sumOneYear(year2020) / (year2020.length * 1) +
  sumOneYear(year2021) / (year2021.length * 1) +
  sumOneYear(year2022) / (year2022.length * 1);

const totalAverage = console.log(
  `La moyenne du coût d'un cadeau est de ${Math.round(averageSum)}`
);

totalAverage;
*/
