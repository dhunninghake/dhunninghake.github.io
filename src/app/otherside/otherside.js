const BREAKPOINTS = {
  medium: '@media (min-width: 768px)',
  large: '@media (min-width: 1040px)',
};

export default function otherside (atomics) {
  
  if (!atomics.small) { throw new Error('Hey, you need a small!'); }

  let radiumObject = {};

  atomics.small.forEach(sm => {
    for (let i in sm) {
      radiumObject[i] = sm[i];
    }
  });
  
  Object.keys(atomics).filter(size => {
    return size !== 'small';
  }).forEach(size => {
    if (!BREAKPOINTS[size]) {
      throw new Error(size + ' has not been defined');
    } else {
      let mediaQueryObject = {};
      atomics[size].forEach(atomic => {
        for (let i in atomic) {
          mediaQueryObject[i] = atomic[i];
        }
      });
      radiumObject[BREAKPOINTS[size]] = mediaQueryObject;
    }
  });

  return radiumObject;

}