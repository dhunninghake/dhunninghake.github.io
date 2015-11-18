
import React, { Component, PropTypes } from 'react';

class Icon extends React.Component {

  renderGraphic() {
    switch (this.props.icon) {
      case 'icon-contact':
        return (
          <g><path d="M22.202,77.023C25.888,75.657,29.832,74.8,34,74.8h401.2c4.168,0,8.112,0.857,11.798,2.224L267.24,246.364c-18.299,17.251-46.975,17.251-65.28,0L22.202,77.023z M464.188,377.944c3.114-5.135,5.012-11.098,5.012-17.544V108.8c0-4.569-0.932-8.915-2.57-12.899L298.411,254.367L464.188,377.944z M283.2,268.464c-13.961,11.961-31.253,18.027-48.6,18.027c-17.347,0-34.64-6.06-48.6-18.027L20.692,391.687c4.094,1.741,8.582,2.714,13.308,2.714h401.2c4.726,0,9.214-0.973,13.308-2.714L283.2,268.464z M2.571,95.9C0.932,99.885,0,104.23,0,108.8V360.4c0,6.446,1.897,12.409,5.012,17.544l165.777-123.577L2.571,95.9z"/></g>
        );
      case 'icon-twitter':
        return (
          <g><path d="m 1999.9999,192.4 c -73.58,32.64 -152.67,54.69 -235.66,64.61 84.7,-50.78 149.77,-131.19 180.41,-227.01 -79.29,47.03 -167.1,81.17 -260.57,99.57 C 1609.3399,49.82 1502.6999,0 1384.6799,0 c -226.6,0 -410.328,183.71 -410.328,410.31 0,32.16 3.628,63.48 10.625,93.51 -341.016,-17.11 -643.368,-180.47 -845.739,-428.72 -35.324,60.6 -55.5583,131.09 -55.5583,206.29 0,142.36 72.4373,267.95 182.5433,341.53 -67.262,-2.13 -130.535,-20.59 -185.8519,-51.32 -0.039,1.71 -0.039,3.42 -0.039,5.16 0,198.803 141.441,364.635 329.145,402.342 -34.426,9.375 -70.676,14.395 -108.098,14.395 -26.441,0 -52.145,-2.578 -77.203,-7.364 52.215,163.008 203.75,281.649 383.304,284.946 -140.429,110.062 -317.351,175.66 -509.5972,175.66 -33.1211,0 -65.7851,-1.949 -97.8828,-5.738 181.586,116.4176 397.27,184.359 628.988,184.359 754.732,0 1167.462,-625.238 1167.462,-1167.47 0,-17.79 -0.41,-35.48 -1.2,-53.08 80.1799,-57.86 149.7399,-130.12 204.7499,-212.41"/></g>
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

