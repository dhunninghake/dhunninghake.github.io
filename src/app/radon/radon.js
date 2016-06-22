const BREAKPOINTS = {
  medium: '@media (min-width: 768px)',
  large: '@media (min-width: 1040px)',
};

const PSEUDO = {
  hover: ':hover',
  active: ':active',
  focus: ':focus'
};

export default function radon (atomics) {

  let radiumObject = {};

  if (atomics.small) {
    atomics.small.forEach(sm => {
      for (let i in sm) {
        radiumObject[i] = sm[i];
      }
    });
  }
  
  const AllSelectors = Object.assign({}, BREAKPOINTS, PSEUDO);

  Object.keys(atomics).filter(size => {
    return size !== 'small';
  }).forEach(size => {
    if (!AllSelectors[size]) {
      throw new Error(size + ' has not been defined');
    } else {
      let mediaQueryObject = {};
      atomics[size].forEach(atomic => {
        for (let i in atomic) {
          mediaQueryObject[i] = atomic[i];
        }
      });
      radiumObject[AllSelectors[size]] = mediaQueryObject;
    }
  });

  return radiumObject;

}