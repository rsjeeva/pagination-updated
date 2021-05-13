/*---Table creation ----*/
var table=document.createElement('table');
table.setAttribute('class','table');
table.classList.add('table-bordered');

/*---THEAD creation----*/
var thead = document.createElement('thead');
var thead_row = document.createElement('tr');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
var th3 = document.createElement('th');
th1.innerHTML='ID';
th2.innerHTML='Name';
th3.innerHTML='Email';

/*---appending thead and table----*/

thead_row.append(th1,th2,th3);
thead.append(thead_row);
table.append(thead);
document.body.append(table);

var data=[];
var current_btn=0;

/*----API Call----*/
var req =  new XMLHttpRequest();
req.open('get','https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json',true);
req.send();
req.onload=function(){
    data=JSON.parse(this.response); 
    // console.log(data); 

/*----BUTTON CREATION-----*/

/*----1.CONTAINER CREATION----*/

var container = document.createElement('div');
var c_row = document.createElement('div');
var c_col = document.createElement('div');

container.setAttribute('class','container');
c_row.setAttribute('class','row');
c_col.setAttribute('class','col-12');

container.style.textAlign='center';



/*-----2.button element creation-----*/
var btn=[];
var i=0;    
for(i=1;i<=10;i++)
{
    btn[i]=document.createElement('button');
    btn[i].setAttribute('id',i);
    btn[i].setAttribute('value',i);
    btn[i].innerHTML=i;
    btn[i].setAttribute('onclick',`passvalue(${i})`);
    
    /*-----APPENDING BUTTON INSIDE CONTAINER----*/
    c_col.append(btn[i]);

    /*---button style---- */
    btn[i].style.color='black';
    btn[i].style.fontSize='20px';
    btn[i].style.border='1px solid black';
}

/* ---creating First, Last and Prev button---- */

var first = document.createElement('button');
var last = document.createElement('button');
var prev = document.createElement('button');
first.innerHTML='First';
last.innerHTML='Last';
prev.innerHTML='Prev';
first.setAttribute('id','first');
first.setAttribute('onclick',`passvalue(${1})`);
last.setAttribute('id','last');
last.setAttribute('onclick',`passvalue(${10})`);
prev.setAttribute('id','prev');
prev.setAttribute('onclick',`passvalue(${11})`);


/*---styling first, last, prev buttton---- */

first.style.color='black';
first.style.backgroundColor='#23A8F2';
first.style.fontSize='20px';

last.style.color='black';
last.style.backgroundColor='#23A8F2';
last.style.fontSize='20px';

prev.style.color='black';
prev.style.backgroundColor='#23A8F2';
prev.style.fontSize='20px';

/*-----APPENDING BUTTON INSIDE CONTAINER----*/

c_col.append(first,prev,last);

/*-----appending container element in document----*/

c_row.append(c_col);
container.append(c_row);
document.body.append(container);
}

function passvalue(x)
{
    if(x<11){
    current_btn=x;
    console.log(current_btn);
    var m1=x*10;
    var m2=m1-10;
    datafetch(m2,m1,data);
    }
    else{
        if(current_btn>1)
        passvalue(current_btn-1);
        else
        passvalue(1);

    }    
}

function datafetch(start=0, end=0,data)
{
    var i=0;
    while(start<end)
    {
        tablebodyvalues(data[start].id, data[start].name, data[start].email,i);
        i++;
        start++;
    }
}

var tbody = document.createElement('tbody');

var tbody_row=[];

var td1=[], td2=[], td3=[];

for(i=0;i<10;i++)
{
    tbody_row[i]=document.createElement('tr');
    tbody_row[i].setAttribute('id','trow');
    td1[i]=document.createElement('td');
    td2[i]=document.createElement('td');
    td3[i]=document.createElement('td');
}

/* ----table body values----- */
function tablebodyvalues(id, name, email,index)
{    
    td1[index].innerHTML=id;
    td2[index].innerHTML=name;
    td3[index].innerHTML=email;

    /* ---appending tbody--- */
    tbody_row[index].append(td1[index], td2[index],td3[index]);
    tbody.append(tbody_row[index]);
    table.append(tbody);    
}



