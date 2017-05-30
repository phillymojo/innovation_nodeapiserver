import React from 'react';
import Region from '../Region';
import CountrySelect from '../CountrySelect';

class LanguageTunnelContainer extends React.Component {
  render() {
    return (
    	<div className="alignment-wrapper">
		    <link rel="stylesheet" href="//assets.commerce.nikecloud.com/ncss/0.16/dotcom/desktop/css/ncss.en-us.min.css"/>		
        <link rel="stylesheet" href="http://localhost:6161/styles.css"/>
        <span className="language-tunnel-wrapper ncss-brand">
          <div>
            <img src="http://localhost:6161/images/swoosh.png" className=
        "the-logo" />        
          </div>
	    		<Region />
          <CountrySelect />

	    	</span>
    	</div>
    )
  }
}

export default LanguageTunnelContainer;