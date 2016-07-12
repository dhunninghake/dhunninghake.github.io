const pseudos = [':hover', ':active', ':focus'];

const breakpoints = {
  medium: '@media (min-width: 768px)',
  large: '@media (min-width: 1040px)',
};

export default function v (styles) {

  if (Array.isArray(styles)) {
    let result = {};
    styles.forEach(s => {
      Object.assign(result, s);
    });
    return result;
  }

  let selector = 'v-' + Date.now();
  let styleSheet = document.getElementById('otherside') || null;

  if (!styleSheet) {
    let style = document.createElement('style');
    style.setAttribute('id', 'otherside');
    style.appendChild(document.createTextNode(''));
    document.head.appendChild(style);
    styleSheet = style;
  }

  let camelCaseToHyphens = (c) => {
    return c.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };

  let checkIfPseudo = (val) => {
    return pseudos.indexOf(val) > -1 ? val : '';
  };

  Object.keys(styles).forEach(s => {
    styles[s].forEach(d => {
      let jsProperty  = Object.keys(d);
      let cssProperty = camelCaseToHyphens(jsProperty.join());
      let declaration = cssProperty + ':' + d[jsProperty] + ';';
      let pseudo      = checkIfPseudo(s);
      let rule        = '.' + selector + pseudo + '{' + declaration + '}\n'

      styleSheet.sheet.insertRule(rule, styleSheet.sheet.cssRules.length);
    });
  });

  console.log(styleSheet.sheet);

  return selector;

}