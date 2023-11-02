export let tramosDict = {
  12400: 0.19,
  20200: 0.24,
  35200: 0.3,
  60000: 0.37,
  300000: 0.45,
  1000000: 0.47
};

export let tramos = [
  { tramo: 12400, porcentaje: 0.19 },
  { tramo: 20200, porcentaje: 0.24 },
  { tramo: 35200, porcentaje: 0.3 },
  { tramo: 60000, porcentaje: 0.37 },
  { tramo: 300000, porcentaje: 0.45 },
  { tramo: 400000, porcentaje: 0.47 }
];

export function calculatePercentajeValue(salary) {
  let cumulativeSalary = salary;
  let valuePorTramo = [];

  Object.keys(tramosDict).forEach((e) => {
    cumulativeSalary -= e;

    if (cumulativeSalary < 0) {
      return;
    }
    valuePorTramo.push(cumulativeSalary * tramosDict[e]);
  });
  console.log(valuePorTramo);
}
