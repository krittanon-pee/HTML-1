const BASE_URL = 'http://localhost:8000'

let mode = 'CREATE' // Default mode id CREATE
let seletedId = ''

window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    console.log('id',id)
    if (id) {
        mode = 'EDIT'
        seletedId = id

        try {
            //1.เราจะดึงข้อมูล user เอาออกมาดูก่อน
            const response = await axios.get(`${BASE_URL}/users/${id}`)
            const user =response.data;

            let firstNameDOM = document.querySelector('input[name=firstname]')
            let lastNameDOM = document.querySelector('input[name=lastname]')
            let ageDOM = document.querySelector('input[name=age]')
            let descriptionDOM = document.querySelector('textarea[name=description]')

            let genderDOM = document.querySelector('input[name=gender]:checked') || {}
            let interestDOMs = document.querySelectorAll('input[name=interest]:checked') || {}

            firstNameDOM.value = user.firstname
            lastNameDOM.value = user.lastname
            ageDOM.value = user.age
            descriptionDOM.value = user.description
            
            for (let i=0;i < genderDOM.length;i++){
                if (genderDOM[i].value == user) {
                    genderDOM[i].checked = true
                }
            }

            for (let i=0;i < interestDOMs.length;i++){
                if (user.interests.includes(interestDOMs).value) {
                    interestDOMs[i].checked = true
                }
            }

        } catch (error) {
            console.log('error',error)
        }
    }
}

const validateData = (userData) => {
    let errors =[]
    if(!userData.firstname ){
        errors.push('กรุณากรอกชื่อ')
    }
    if(!userData.lastname ){
        errors.push('กรุณากรอกนามสกุล')
    }
    if(!userData.age ){
        errors.push('กรุณากรอกอายุ')
    }
    if(!userData.gender ){
        errors.push('กรุณากรอกเพศ')
    }
    if(!userData.description ){
        errors.push('กรุณากรอกคำอธิบาย')
    }
    return errors;
    
    


}


const submitData = async () => {
    
    let firstNameDOM = document.querySelector('input[name=firstname]')
    let lastNameDOM = document.querySelector('input[name=lastname]')
    let ageDOM = document.querySelector('input[name=age]')

    let genderDOM = document.querySelector('input[name=gender]:checked') || {}
    let interestDOMs = document.querySelectorAll('input[name=interest]:checked') || {}
    let descriptionDOM = document.querySelector('textarea[name=description]') 

    let messageDOM = document.getElementById('message')

    console.log('test')
    try {
    let interest = ''
    for (let i = 0; i < interestDOMs.length; i++) {
    interest += interestDOMs[i].value 
    if (i != interestDOMs.length - 1) {
        interest += ','
        }
    }

    let userData = {
        firstname: firstNameDOM.value,
        lastname: lastNameDOM.value,
        age : ageDOM.value,
        gender : genderDOM.value,
        description : descriptionDOM.value,
        interests : interest,
        
    }
    console.log('submit Data', userData);
    
        const errors = validateData(userData);
        if(errors.length > 0){
            //มี error เกิดขึ้น
            throw {
                message:'กรุณากรอกข้อมูลให้ครบถ้วน',
                errors: errors
            }
        }
        
        const response = await axios.post('http://localhost:8000/users', userData);
        console.log('response', response.data);

        messageDOM.innerText='บันทึกข้อมูลเรียบร้อยแล้ว';
        messageDOM.className='message success';
    } catch(error) {
        console.log('error', error.message);
        console.log('error',error.errors)//เช็คว่ามี error หรือไม่

        if(error.response){
            console.log( error.response.data.message);
            error.message = error.response.data.message
            error.errors = error.response.data.errors
        }
        //แสดง error ที่เกิดขึ้นจากหลังบ้าน
       let htmlData ='<div>'
       htmlData += `<div>${error.message}</div>`
       htmlData += '<ul>'
       for (let i = 0; i < error.errors.length; i++) {
        htmlData += `<li>${error.errors[i]}</li>`
       }
        htmlData += '</ul>'
        htmlData += '</div>'
        messageDOM.innerHTML = htmlData
        messageDOM.className='message danger';

    }
}


