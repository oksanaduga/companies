import React, { useState, useEffect } from 'react'
import './App.css';
import Logo from "./Logo";
import Search from "./Search";
import Companies from "./Companies";

function App() {
    const [companies, setCompanies] = useState(null);

    useEffect(() => {
        // fetch('/api')
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log('response', response);
        //         setCompanies(response.message)
        //     })
        setCompanies([
            {
                company: 'Napole IT',
                status: 'Preferred Partner',
                logo: 'https://img.netwrix.com/partner_logos/standard-logo-reseller-preferred.png',
                address: '8223 Molson Way, Liverpool, New York, United States, 13090',
                website: 'https://example1.com',
                phone: '+777(315) 727-0303',
                countries_covered: '["US"]',
                states_covered: '["NY"]'
            }
        ])
    }, [])

  return (
    <div>
      <Logo/>
      <Search/>
      <Companies companies={companies}/>
    </div>
  );
}

export default App;
