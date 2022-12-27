function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

const student1 = new Student("Игорь", "муж", 25);
const student2 = new Student("Петр", "муж", 45);
const student3 = new Student("Алиса", "жен", 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks !== undefined){
        this.marks.push(...marks);
    }else{
        this.marks === undefined;
        return [marks];
    }
}

Student.prototype.getAverage = function () {
  if(this.marks === undefined || this.marks.length === 0){
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
      }  
      return sum / this.marks.length;
    }


Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;

    this.excluded = reason;
}
