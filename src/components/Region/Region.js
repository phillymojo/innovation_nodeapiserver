import React from 'react';
// import './region.css';
import CountrySelect from '../CountrySelect';

function RegionList(props) {
  const countries = props.countries;
  const optionItems = countries.map((country) =>
  	<div>
			<button>
			<div>
				<span>{country} IMAGE</span>
			</div>
		    <span key={country.toString()}value={country}className="{props.className} ncss-brand region-styles">
		      {country}
		    </span>  		
			</button>
			<CountrySelect />
		</div>
  );
  return (
    <div className="{props.className} ncss-brand" name="{props.name}">
      {optionItems}
    </div>
  );
}

const country = ['NORTH AMERICA', 'SOUTH AMERICA', 'EUROPE', 'ASIA PACIFIC', 'MIDDLE EAST', 'AFRICA'];

class Region extends React.Component {
  render() {
    return (
      <div className="input-container region-select-container">
        <label className="country-select-label text-color-accent ncss-brand">
          SELECT YOUR LOCATION
        </label>
        <div className="country-select-input">
          <div className="country-list ncss-brand">
            <RegionList countries={country} className="countryOption ncss-base" name="country" />
          </div>
        </div>
      </div>
    )
  }
}

export default Region;