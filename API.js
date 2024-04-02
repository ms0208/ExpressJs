const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA (3).json');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));


app.get('/api/users', (req, resp) => {
    return resp.json(users);
});

app.get('/users', (req, resp) => {
    const html = `
    <li>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </li>
    `;
    resp.send(html);
});

app.get('/users/:id', (req, resp) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
        return resp.status(404).json({ error: 'User not found' });
    }
    return resp.json(user);
});



app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA (3).json', JSON.stringify(users), (err,data)=>{
        return res.json({ status: 'success',id: users.length+1});
    });
    
});

app.patch('/api/users/:id', (req, res) => {

     return res.json({ status: 'pending'});
});

app.delete('/api/users/:id', (req, res) => {

    return res.json({status: "pending"});
});

app.listen(PORT, () => console.log(`Server is Start at PORT:${PORT}`));
