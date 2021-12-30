// Extensions
let myLeads=[]

const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")

const loadLeads=JSON.parse(localStorage.getItem("myLeads"))

if(loadLeads){
    myLeads=loadLeads
    renderLeads(myLeads)
}



tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    }) 

})

function renderLeads(leads){
    let listitems=""
    for(let i in leads){
        listitems+= `
        <li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML=listitems
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads=[]
    renderLeads(myLeads)
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)  
})

// for(let i in myLeads){
//     //ulEl.innerHTML+= "<li>"+myLeads[i] + "</li>"
//     const li=document.createElement("li")
//     li.textContent=myLeads[i]
//     ulEl.append(li)

// }

