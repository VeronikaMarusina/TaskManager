function removeError(element){
    element.classList.remove('error');
}

const submit = document.getElementById('submit');
const tasks = [];
const now = new Date();

submit.addEventListener('click', function(){
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    if(title.value !== '' && description.value !== ''){
        const task = {
            title: title.value,
            description: description.value,
            date: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        }
        tasks.push(task);
        title.value = '';
        description.value = '';
    } else {
        if(title.value === ''){
            title.classList.add('error');
        }
        if(description.value === ''){
            description.classList.add('error');
        }
    }

    // setData(tasks);
    console.log('click', tasks);
    
})

function setData(array){
    if(array.length > 0){
        let temp = '';
        for(let i = 0; i < array.length; i++){
            temp += renderItem(array[i]);
        }
    }
}