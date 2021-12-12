import React, { useState, useEffect } from 'react'

function Companies({ companies }) {
    let createCompaniesList = (allCompanies) => {
        let newList = (<div><ul></ul></div>)
        for (let company of allCompanies) {
            let cutAddress = (address) => {
                let arrFromAddress = address.split(' ');
                return arrFromAddress.slice(1, arrFromAddress.length - 2).join(' ');
            }

            return (
                <>
                    {newList}
                    <li className="listContainer">
                        <img src={company.logo} className="companyLogo"/>
                        <div className="companyMainInfoContainer">
                            <span className="companyName">{company.company}</span>
                            <span className="companyAddress">{cutAddress(company.address)}</span>
                        </div>
                        <div className="companyInfoContainer">
                            <a href={company.website} className="companyLink">Website</a>
                            <span className="companyPhone">{company.phone}</span>
                        </div>
                        <span className="companyPartner">{company.status}</span>
                    </li>
                </>
            )
        }
    }
    return (
        <div className="companiesContainer">
            {companies ? createCompaniesList(companies) : 'loading...'}
        </div>
    );
}

export default Companies;