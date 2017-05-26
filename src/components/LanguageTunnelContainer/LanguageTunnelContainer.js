import React from 'react';
import Region from '../Region';

class LanguageTunnelContainer extends React.Component {
  render() {
    return (
    	<div>
				<link rel="stylesheet" href="//assets.commerce.nikecloud.com/ncss/0.16/dotcom/desktop/css/ncss.en-us.min.css"/>
	    	<span className="country-select-label ncss-brand">Select Country:
	    		<Region />
	    	</span>
    	</div>
    )
  }
}

export default LanguageTunnelContainer;