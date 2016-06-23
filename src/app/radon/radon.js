import { radiumSelectors } from '../lib/css/settings';

export default function radon (atomics) {

  let radiumObject = {};

  if (atomics.small) {
    atomics.small.forEach(sm => {
      for (let i in sm) {
        radiumObject[i] = sm[i];
      }
    });
  }
  
  const AllSelectors = Object.assign({}, radiumSelectors.breakpoints, radiumSelectors.pseudo);

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