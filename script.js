let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function logStudent(student) {
  if (student.marks > 50)
  {
    console.log(student)
  }
};

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(logStudent);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(logStudent);
}

function addData() {
  //Write your code here, just console.log
  var studentObj = { id:4, name: "susan", marks: 45 };
  arr.push(studentObj);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  var failedStudents = [];
  for (var i=0; i < arr.length; i++){
    if (arr[i].marks < 50) {
      arr.splice(i,1);
    }
  }
  console.log(arr);
}

function concatenateArray() {
  let arr = [
    { id: 1, name: "Anu", age: "18", marks: 90 },
    { id: 2, name: "Arun", age: "20", marks: 75 },
    { id: 3, name: "Kate", age: "19", marks: 95 },
  ];

  var finalArr = [];

  arr.forEach(function (item) { finalArr.push(item)});
  arr1.forEach(function (item) { 
    finalArr.push(item);
  });

  console.log(finalArr);
   //Write your code here, just console.log

}