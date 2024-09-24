const navHistoryBtn =document.getElementById('nav-history-btn');
const navDonationBtn =document.getElementById('nav-donation-btn');

function showSectionById(id){
    document.getElementById('history-container').classList.add('hidden')
    document.getElementById('card-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}



document.getElementById('nav-donation-btn').addEventListener('click', function(){
    showSectionById('card-section');
    navDonationBtn.classList.add('bg-[#B4F461]')
    navDonationBtn.classList.remove('border-2')
    navHistoryBtn.classList.remove('bg-[#B4F461]')
    navHistoryBtn.classList.add('border-2')

})

document.getElementById('nav-history-btn').addEventListener('click', function(){
    showSectionById('history-container');
    navDonationBtn.classList.remove('bg-[#B4F461]')
    navDonationBtn.classList.add('border-2')
    navHistoryBtn.classList.add('bg-[#B4F461]')
    navHistoryBtn.classList.remove('border-2')
})


document.getElementById('donate-btn').addEventListener('click', function(){

const mainBalance =parseFloat(document.getElementById('main-balance').innerText);
const inputValue =parseFloat(document.getElementById('input-value').value);
const cardBalance =parseFloat(document.getElementById('card-balance').innerText);
if(isNaN(inputValue)=== true || inputValue > mainBalance || inputValue <=0){
    return alert('something went wrong, try again later')
}
document.getElementById('main-balance').innerText = mainBalance - inputValue
document.getElementById('card-balance').innerText=cardBalance + inputValue;
document.getElementById('my_modal_4').showModal();
// history section
const date =new Date()
const historyContainer =document.getElementById('history-container')
const div =document.createElement('div') 
div.classList.add('bg-[#ffff]',
    'shadow-lg',
    'p-4',
    'rounded-md',
    'max-w-4xl',
    'mx-auto',
    'border-2'
)
div.innerHTML=`
<p class="font-bold ">${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
<p>${date}</p>
`
historyContainer.appendChild(div)
})

document.getElementById('donate-btn2').addEventListener('click', function(){
    const mainBalance =parseFloat(document.getElementById('main-balance').innerText);
    const inputValue2 =parseFloat(document.getElementById('input-value2').value);
    const cardBalance2 =parseFloat(document.getElementById('card-balance2').innerText);
    if(isNaN(inputValue2)=== true || inputValue2 > mainBalance || inputValue2 <=0){
        return alert('something went wrong, try again later')
    }
    document.getElementById('main-balance').innerText = mainBalance - inputValue2
    document.getElementById('card-balance2').innerText=cardBalance2 + inputValue2;
    document.getElementById('my_modal_4').showModal();
    // history section
    const date =new Date()
const historyContainer =document.getElementById('history-container')
const div =document.createElement('div') 
div.classList.add('bg-[#ffff]',
    'shadow-lg',
    'p-4',
    'rounded-md',
    'max-w-4xl',
    'mx-auto',
    'border-2'
)
div.innerHTML=`
<p class="font-bold ">${inputValue2} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
<p>${date}</p>
`
historyContainer.appendChild(div)
})

document.getElementById('donate-btn3').addEventListener('click', function(){

    const mainBalance =parseFloat(document.getElementById('main-balance').innerText);
    const inputValue3 =parseFloat(document.getElementById('input-value3').value);
    const cardBalance3 =parseFloat(document.getElementById('card-balance3').innerText);
    if(isNaN(inputValue3)=== true || inputValue3 > mainBalance || inputValue3 <=0){
        return alert('something went wrong, try again later')
    }
    document.getElementById('main-balance').innerText = mainBalance - inputValue3
    document.getElementById('card-balance3').innerText=cardBalance3 + inputValue3;
    document.getElementById('my_modal_4').showModal();
    // history section
    const date =new Date()
    const historyContainer =document.getElementById('history-container')
    const div =document.createElement('div') 
    div.classList.add('bg-[#ffff]',
        'shadow-lg',
        'p-4',
        'rounded-md',
        'max-w-4xl',
        'mx-auto',
        'border-2'
    )
    div.innerHTML=`
    <p class="font-bold ">${inputValue3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p>${date}</p>
    `
    historyContainer.appendChild(div)
    })
    

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href='./blog.html'
})

