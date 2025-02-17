function submitData() {
    var name= document.getElementById('name').value
    var dob= document.getElementById('dob').value
    console.log(name+" "+dob)
    
    var output=document.getElementById('output');
    output.innerText(name+" "+dob)
}