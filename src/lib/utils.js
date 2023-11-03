export let tramosDict = {
  12400: 0.19,
  20200: 0.24,
  35200: 0.3,
  60000: 0.37,
  300000: 0.45,
  301000: 0.47,
  100000000: 0.47
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
  let valuePorTramo = [];
  let finishedTramos = false;

  Object.keys(tramosDict).forEach((e, i) => {
    if (finishedTramos) {
      return;
    }

    if (salary > e) {
      if (i == 0) valuePorTramo.push(e * tramosDict[e]);
      else {
        let diff = e - Object.keys(tramosDict)[i - 1];
        valuePorTramo.push(tramosDict[e] * diff);
      }
    } else {
      if (i == 0) {
        valuePorTramo.push(salary * tramosDict[e]);
      } else {
        let diffWRTPrevious = salary - Object.keys(tramosDict)[i - 1];
        valuePorTramo.push(diffWRTPrevious * tramosDict[e]);
      }
      finishedTramos = true;
    }
  });

  return valuePorTramo;
}
