function CreateObject(arr) {
    let length_arr=arr.length;
    var person={};
    var i=0;
    while( i< length_arr)
   {
        person[arr[i]]=arr[i+1];
        i=i+2;
   }
    return person;

    // Write your code here
}

module.exports = CreateObject;
