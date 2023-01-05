var student1= {
    Name: 'chandan',
    Course: 'BE',
    Marks: [
      {subject:'Maths', score:75},
      {subject:'English', score:85},
      {subject:'Design', score:95},
      {subject:'Mechatronics',score:76}
    ]
  }
  var student2= {
    Name: 'chethan',
    Course: 'BE',
    Marks: [
      {subject:'Maths', score:55},
      {subject:'English', score:65},
      {subject:'Design', score:75},
      {subject:'Mechatronics',score:88}
    ]
  }
  var totalMarksActual= 400
  var percentage
  var totalMarksOfS1 = 0 // total score of student 1
  var s1marksList= student1.Marks
  //console.log(s1marksList[0].score)
  for(let i=0;i<s1marksList.length;i++){
    totalMarksOfS1 = totalMarksOfS1+ s1marksList[i].score
    //return totalMarksOfS1
  }
  console.log('Total score of Student : '+student1.Name+'-' +totalMarksOfS1)
  
  var totalMarksOfS2 = 0 // total score of student 2
  var s2marksList= student2.Marks
  for(let j=0;j<s1marksList.length;j++){
    totalMarksOfS2 = totalMarksOfS2+ s2marksList[j].score
   // return totalMarksOfS2
  }
  console.log('Total score of Student : '+student2.Name+'-' +totalMarksOfS2)

  if(totalMarksOfS1>totalMarksOfS2){
        percentage = ((totalMarksOfS1 / totalMarksActual)*100);
         console.log('Percentage of Student : '+student1.Name+'-' +percentage+ '%')
    }
     else{
    percentage = ((totalMarksOfS2 / totalMarksActual)*100);
    console.log('Percentage of Student : '+student2.Name+'-' +percentage+ '%')
    }
  
    