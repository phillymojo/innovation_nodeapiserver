import React from 'react';

function RegionList(props) {
  const countries = props.countries;
  const optionItems = countries.map((country) =>
  	<div key={country.toString()} className="country-list ncss-brand">
			<button>
			<div>
				<img className="region-image-wrapper"src={'http://localhost:6161/images/' + country + '.png'}></img>
			</div>
		    <span value={country} className={props.className + ' ncss-brand region-styles'} >
		      {country}
		    </span>
			</button>
		</div>
  );
  return (
    <div className="region-section-wrapper ncss-brand" name={props.name}>
      {optionItems}
    </div>
  );
}

const country = ['northAmerica', 'southAmerica', 'europe', 'asiaPacific', 'middleEast', 'africa'];

class Region extends React.Component {
	
  render() {
    return (
      <div>
        <label className="text-color-accent ncss-brand location-select">      
          SELECT YOUR LOCATION
        </label>
          <RegionList countries={country} className="countryOption ncss-base" name="country" />
      </div>
    )
  }
}

export default Region;