
import React, { Component, PropTypes } from 'react';

class Icon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: '#ffffff',
      isReady: false 
    };
  }

  componentDidMount() {
    this.setState({ 
      color: '#111111',
      isReady: true 
    });
  }

  renderGraphic() {

    const animatePath = {
      long: this.state.isReady && 'animate-long-path',
      short: this.state.isReady && 'animate-short-path'
    }
    
    switch (this.props.icon) {
      case 'icon-contact':
        return (
          <path d="M22.202,77.023C25.888,75.657,29.832,74.8,34,74.8h401.2c4.168,0,8.112,0.857,11.798,2.224L267.24,246.364c-18.299,17.251-46.975,17.251-65.28,0L22.202,77.023z M464.188,377.944c3.114-5.135,5.012-11.098,5.012-17.544V108.8c0-4.569-0.932-8.915-2.57-12.899L298.411,254.367L464.188,377.944z M283.2,268.464c-13.961,11.961-31.253,18.027-48.6,18.027c-17.347,0-34.64-6.06-48.6-18.027L20.692,391.687c4.094,1.741,8.582,2.714,13.308,2.714h401.2c4.726,0,9.214-0.973,13.308-2.714L283.2,268.464z M2.571,95.9C0.932,99.885,0,104.23,0,108.8V360.4c0,6.446,1.897,12.409,5.012,17.544l165.777-123.577L2.571,95.9z"/>
        );
      case 'icon-twitter':
        return (
          <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"/>
        );
      case 'icon-instagram':
        return (
          <path d="M12.501,0h72.393c6.875,0,12.5,5.09,12.5,12.5v72.395c0,7.41-5.625,12.5-12.5,12.5H12.501C5.624,97.395,0,92.305,0,84.895V12.5C0,5.09,5.624,0,12.501,0L12.501,0z M70.948,10.821c-2.412,0-4.383,1.972-4.383,4.385v10.495c0,2.412,1.971,4.385,4.383,4.385h11.008c2.412,0,4.385-1.973,4.385-4.385V15.206c0-2.413-1.973-4.385-4.385-4.385H70.948L70.948,10.821z M86.387,41.188h-8.572c0.811,2.648,1.25,5.453,1.25,8.355c0,16.2-13.556,29.332-30.275,29.332c-16.718,0-30.272-13.132-30.272-29.332c0-2.904,0.438-5.708,1.25-8.355h-8.945v41.141c0,2.129,1.742,3.872,3.872,3.872h67.822c2.13,0,3.872-1.742,3.872-3.872V41.188H86.387z M48.789,29.533c-10.802,0-19.56,8.485-19.56,18.953c0,10.468,8.758,18.953,19.56,18.953c10.803,0,19.562-8.485,19.562-18.953C68.351,38.018,59.593,29.533,48.789,29.533z"/>
        );
      case 'icon-soundcloud':
        return (
          <path d="M426.686,0H85.344C38.407,0,0.001,38.403,0.001,85.34v234.658L8,288h16l8,32l-8,32H8l-8-31.998v106.652C0.001,473.623,38.407,512,85.344,512h341.341C473.625,512,512,473.623,512,426.654V320.553C512,355.592,482.459,384,446.008,384c-1.178,0-182.777-0.088-182.945-0.105c-3.94-0.381-7.062-3.615-7.062-7.498V175.04c0-3.697,1.31-5.606,6.289-7.458c12.817-4.767,27.269-7.582,42.159-7.582c60.854,0,110.746,44.851,115.998,102.029c7.857-3.168,16.488-4.928,25.531-4.928c36.453,0,66.021,28.411,66.021,63.449V85.341C512,38.403,473.621,0,426.686,0z M88,384H72l-8-64l8-64h16l8,64L88,384z M152,384h-16l-8-81.375L136,224h16l8,80L152,384z M216,384h-16l-8-112.109L200,160h16l8,111.891L216,384z"/>
        );
      case 'icon-linkedin':
        return (
          <path id="LinkedIn__x28_alt_x29_" d="M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0zM130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315zM364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"/>
        );
      case 'icon-location':
        return (
          <g transform="translate(-995, -881)">
            <g transform="translate(963, 497)">
              <path d="M37.1 384.1 C37.1 384.1 37.1 384.1 37 384.1 C37 384.1 37 384.1 37 384.1 C34.3 384.1 32.2 386.3 32.2 388.9 C32.2 391.5 37.1 401.7 37.1 401.7 C37.1 401.7 41.9 391.5 41.9 388.9 C41.9 386.3 39.8 384.1 37.1 384.1 L37.1 384.1 ZM37 390.7 C35.8 390.7 34.8 389.7 34.8 388.5 C34.8 387.3 35.8 386.3 37 386.3 C38.2 386.3 39.2 387.3 39.2 388.5 C39.2 389.7 38.2 390.7 37 390.7 L37 390.7 Z"/>
            </g>
          </g>
        );
      case 'icon-contact':
        return (
          <g>
            <path d="M30,92c-8,0-13,0.667-15,2s-2.333,2.833-1,4.5s4.667,4.5,10,8.5c2.667,2,4.667,3.667,6,5l226,172l226-171l5-5c5.333-4,8.833-6.833,10.5-8.5s1.5-3.333-0.5-5s-7-2.5-15-2.5H241H30z"/>
            <path d="M0,132v254c0,7.333,3,14.833,9,22.5S21,420,27,420h458c6,0,12-3.833,18-11.5s9-15.167,9-22.5V132L256,328L0,132z"/>
          </g>
        );
      case 'icon-peace':
        return (
          <g transform="translate(15, 14)" stroke={this.state.color} fill="white">
            <path className={animatePath.long} d="M249,592.425781 C249,592.425781 220.871094,557.820312 220.871094,531.429687 C220.871094,505.039062 217.050781,501.574219 229.941406,466.53125 C242.832031,431.488281 303.035156,396.675781 303.035156,396.675781 L325.931651,384.369141 C325.931651,384.369141 276.355471,387.738281 208.621094,363.292969 C140.886716,338.847656 175.753906,270.351562 175.753906,270.351562 C175.753906,270.351562 185.050779,258.460937 237.75,264.40625 C290.449221,270.351562 330.527344,276.042969 330.527344,276.042969 C330.527344,276.042969 390.648443,289.324218 402.675781,299.269531 C414.70312,309.214844 428.328115,317.937499 434.109375,337.21875 C439.890635,356.500001 437.195302,397.853835 437.195313,412.71875 C437.195323,427.583665 424.652334,493.562515 413.664063,514.871094 C402.675791,536.179673 384.531248,583.855483 313.507813,622.277344 C242.484377,660.699204 177.667969,646.195312 177.667969,646.195312 C177.667969,646.195312 119.757818,651.726577 62.2226563,591.578125 C4.6874948,531.429673 6.8125,501.316406 6.8125,501.316406 C6.8125,501.316406 -16.457032,439.734374 26.5234375,408.632812 C69.503907,377.531251 89.8671875,406.8125 89.8671875,406.8125 C89.8671875,406.8125 125.679693,444.636718 141.570312,472.976562 C157.460932,501.316407 158.585927,516.347671 158.585938,526.027344 C158.585948,535.707017 144.35156,549.59764 127.375,549.597656 C110.39844,549.597672 89.8945326,543.484374 76.0585938,524.511719 C62.2226549,505.539063 62.2226549,501.316407 62.2226549,501.316407 C62.2226549,501.316407 66.6816431,506.398438 89.86719,536.179673" strokeWidth="31" stroke-linecap="round"/>
            <path className={animatePath.short} d="M163.039059,298.089831 C163.039059,298.089831 116.085938,156.937502 106.79297,121.578127 C97.5000008,86.2187525 93.2500001,87.2402369 89.8242187,43.9765612 C89.4375512,39.0933953 95.0373239,21.2051798 95.3398436,19.9570318 C99.8781299,1.23278268 124.316407,0.85742185 124.316407,0.85742185 C124.316407,0.85742185 154.029297,-5.17773318 168.621093,30.5722648 C183.212888,66.3222627 183.181641,63.8632813 193.556639,99.2910186 C203.931638,134.718756 249.511723,265.015612 249.511723,265.015612 C249.511723,265.015612 186.79492,253.724594 181.097653,260.761706 C175.400386,267.798818 163.039059,298.089831 163.039059,298.089831 Z" strokeWidth="28"/>
            <path className={animatePath.short} d="M270.695312,260.066403 C270.695312,260.066403 337.935547,68.0019533 349.896484,47.5332033 C361.857422,27.0644533 362.048828,28.1640622 378.830078,17.314453 C395.611328,6.4648438 417.453125,27.3925783 417.453125,27.3925783 C417.453125,27.3925783 434.183594,44.1582069 423.072266,79.8847663 C411.960938,115.611326 399.978516,157.347653 399.978516,157.347653 L357.236328,279.984372 L270.695312,260.066403 Z" strokeWidth="28"/>
            <path className={animatePath.short} d="M65.0585933,316.121094 C81.1386711,296.935547 91.9238264,290.248047 96.3339832,290.248047 C100.74414,290.248047 124.402346,284.464841 142.439456,303.259765 C160.476565,322.054689 182.445315,356.267576 182.445315,356.267576 C182.445315,356.267576 211.138663,411.999996 217.041011,433.773434 C222.943359,455.546871 219.306636,472.763668 204.587886,485.828121 C189.869136,498.892574 177.972662,493.447262 157.525393,481.744137 C137.078124,470.041012 114.130858,436.904293 114.130858,436.904293 L89.7734382,405.281254 L74.3203122,380.625004 C74.3203122,380.625004 48.9785155,335.306641 65.0585933,316.121094 Z" strokeWidth="28"/>
          </g>
        
        );
    }
  }

  render() {
    return (
      <svg viewBox={this.props.viewbox} 
           width={this.props.width} 
           height={this.props.height} 
           className={this.props.classes}
           xmlns="http://www.w3.org/2000/svg">
        {this.renderGraphic()}
      </svg>
    );
  }
}

export default Icon

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number,
  viewbox: React.PropTypes.string.isRequired,
}