import React from 'react';

function CountryList(props) {
  const countries = props.countries;
  const optionItems = countries.map((country) =>
  	<li key={country.toString()}>  
      <img className={country + '-flag country-image-wrapper'} src={'http://localhost:6161/images/' + country + 'Flag.png'}></img>
	    <span value={country} className={props.className + ' ncss-brand bg-white country-item'} >
	      {country}
	    </span>
  	</li>
  );
  return (
    <span className={props.className + ' ncss-brand'} name={props.name}>
      {optionItems}
    </span>
  );
}

const country = ['US', 'CA', 'JP', 'Česká Republika'];

class CountrySelect extends React.Component {
  render() {
    return (
      <div className="input-container country-select-container">
        <label className="country-select-label text-color-accent ncss-brand">
          Country
        </label>
        <CountryList countries={country} className="countryOption ncss-base" name="country" />
      </div>
    )
  }
}

export default CountrySelect;
