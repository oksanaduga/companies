import React from 'react'

function Search() {

    return (
    <div className="searchContainer">
        <div>
            <header>Netwrix Partner Locator</header>
            <p>Hundreds of Netwrix partners around the world are standing by to help you.</p>
            <p>With our Partner Locator you can easily find the list of authorized partners in your area.</p>
        </div>
        <div>
            <form className="formContainer">
                <input className="inputContainer" type="text" name="name"/>
                <svg className="searchIcon" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2857 6.71429C10.2857 8.91964 8.49107 10.7143 6.28571 10.7143C4.08036 10.7143 2.28571 8.91964 2.28571 6.71429C2.28571 4.50893 4.08036 2.71428 6.28571 2.71428C8.49107 2.71428 10.2857 4.50893 10.2857 6.71429ZM14.8571 14.1429C14.8571 13.8393 14.7321 13.5446 14.5268 13.3393L11.4643 10.2768C12.1875 9.23214 12.5714 7.98214 12.5714 6.71429C12.5714 3.24107 9.75893 0.428571 6.28571 0.428571C2.8125 0.428571 0 3.24107 0 6.71429C0 10.1875 2.8125 13 6.28571 13C7.55357 13 8.80357 12.6161 9.84822 11.8929L12.9107 14.9464C13.1161 15.1607 13.4107 15.2857 13.7143 15.2857C14.3393 15.2857 14.8571 14.7679 14.8571 14.1429Z" fill="#0068DA"/>
                </svg>
            </form>
        </div>
        <div>
            <select className="selectField">
                <option selected value="type">Type</option>
                <option className="optionField" value="msp partner">MSP Partner</option>
                <option value="preferred partner">Preferred Partner</option>
                <option value="premium partner">Premium Partner</option>
                <option value="elite partner">Elite Partner</option>
                <option value="distributor">Distributor</option>
            </select>
            <select className="selectField">
                <option selected value="country">Country</option>
                <option value="country1">Country1</option>
                <option selected value="country2">Country2</option>
                <option value="country3">Country3</option>
            </select>
            <select className="selectField">
                <option selected value="state">State</option>
                <option value="state1">State1</option>
                <option selected value="state2">State2</option>
                <option value="state3">State3</option>
            </select>
        </div>
    </div>
    );
}

export default Search;