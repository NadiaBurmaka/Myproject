const btnAddUser = document.getElementById('addnewuser')
console.log(btnAddUser)

const modalWindow = document.getElementById('openmodal')
console.log(modalWindow)

const closeWindow = document.getElementById('close');

btnAddUser.addEventListener('click', function(){
    modalWindow.style.visibility = 'visible';
})

closeWindow.addEventListener('click', function(){
    modalWindow.style.visibility = 'hidden';
})