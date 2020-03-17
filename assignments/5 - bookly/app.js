let addbook=document.querySelector(".addbook");
let addbtn=document.querySelector(".addbtn");
let ul=document.querySelector("ul");
let form=document.querySelector("#add-book");
let hideall=document.querySelector("#hide")
sst=[];
id=11;
addbtn.addEventListener("click",add);
function add(e){
    e.preventDefault();
    const obj={
        name:addbook.value,
        id:id++
    }
    sst.push(obj);
    console.log(sst)
    createUI(sst);
    addbook.value="";
}
function deletebook(e){
    let id=e.target.parentElement.id;
    let remove=sst.findIndex(item=>item.id== id)
    sst.splice(remove,1);
    console.log(sst);
    createUI(sst);
}
function createUI(e=[]){
    ul.textContent="";
    e.forEach( todo=>{
        var li= document.createElement("li");
        li.setAttribute('id',todo.id)
        var bookname=document.createElement("span");
        bookname.textContent=todo.name;
        var delbtn=document.createElement("button");
        delbtn.className="delete"
        delbtn.textContent="Delete";
        delbtn.addEventListener("click",deletebook)
        li.append(bookname,delbtn);
        ul.append(li);
    })
}
hideall.addEventListener("change",function(e){
    if(hideall.checked){
        ul.style.display="none";
    }else{
        ul.style.display="initial";
    }
})
let searchbar =document.forms['search-books'].querySelector('input')
function search(e){
    e.preventDefault();
    var term =e.target.value.toLowerCase();
    var search=sst.filter(book=>{
        return book.name.toLowerCase().includes(term);
    })
    createUI(search)
}
searchbar.addEventListener("keyup",search)
