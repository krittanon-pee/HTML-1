const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2/promise');

app.use(bodyParser.json());

const port = 8000;
// สำหรับเก็บ users

let conn = null

const initMySQL = async () => {
  conn=await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'webdb',
    port: 8820
  })
}

 // path = GET /users สำหรับ get users ทั้งหมดที่บันทึกเข้าไปออกมา
app.get('/users', async (req, res) => {
  const results = await conn.query('SELECT * FROM users')
  res.json(results[0]);
})

// path = POST /users สำหรับการสร้าง users ใหม่บันทึกเข้าไป
app.post('/users', async (req, res) => {
  try{
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ? ', user)
    res.json({
      message: 'insert user successfully',
      data: results
    })
  }catch (error) {
    res.status(500).json({
      message: 'something went wrong',
      errormessage: error.message
    })
   }
  })

// path = GET /users/:id สำหรับการดึง users รายคนออกมา
app.get('/users/:id', async (req, res) => {
  try {
    let id = req.params.id
    const results = await conn.query('SELECT * FROM users WHERE id = ?', id)
   
    if(results[0].length == 0){
      throw { statusCode: 404, message: 'user not found'}
    }
    res.json(results[0][0])
  } catch (error) {
    console.log('error message:', error.message)
    let statusCode = error.statusCode || 500
    res.status(statusCode).json({
      message: 'something went wrong',
      errorMessage: error.message
    })
  }
})


//path = PUT /users/:id สำหรับการแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
app.put('/users/:id', async (req, res) => {
  try{
    let id = req.params.id;
    let updateUser = req.body;
    let user = req.body;
    const results = await conn.query('UPDATE users SET ? WHERE id = ?', 
    [updateUser, id]
    )
    res.json({
      message: 'update user successfully',
      data: results[0]
    })
  }catch (error) {
    res.status(500).json({
      message: 'something went wrong',
      errormessage: error.message
    })
   }
})

// path = DELETE /users/:id สำหรับการลบ users รายคน (ตาม id ที่บันทึกเข้าไป)
app.delete('/users/:id', async (req, res) => {
  try{
    let id = req.params.id;
    const results = await conn.query('DELETE FROM users WHERE id = ?', id)
    res.json({
      message: 'delete user successfully',
      data: results[0]
    })
  } catch (error) {
    console.log('errorMessage:', error.message)
    res.status(500).json({
      message: 'something went wrong',
      errormessage: error.message
    })
  }
})



app.listen(port, async (req, res) => {
  await initMySQL()
    console.log('http server running on', + port);
})