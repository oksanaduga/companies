const express = require('express');
const db = require('./db');
const { PrismaClient } = require('@prisma/client')

const PORT = process.env.PORT || 3001

const app = express()

const getCompanies = async (searchData = '') => {
    let searchStr;
    if (searchData) {
        const state =`
      SELECT * FROM partner_locator WHERE status ILIKE '${searchData}%' ORDER BY id
    `;
        searchStr = await db.query(state);
    } else {
        searchStr = await db.query('SELECT * FROM partner_locator ORDER BY id');
    }
    return searchStr;
};

app.get('/api', async (req, res, next) => {
    let data = await getCompanies();
    if (Object.keys(req.query).length === 0) {
        data = await getCompanies();
    } else {
        const searchParams = req.query.name;
        data = await getCompanies(searchParams);
    }
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`server start on on PORT ${PORT}...`);
})

