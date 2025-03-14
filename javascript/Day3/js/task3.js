
var student = {
    name : prompt("Enter your name"),
    age : prompt("Enter your age "),
    grades : {
        math:prompt("Enter your grade math "),
        science:prompt("Enter your grade science "),
        literature:prompt("Enter your grade literature "),
    },
    contactInfo : {
        email:prompt("Enter your email "),
        phone : prompt("Enter your phone "),
    }
}
document.write("your name is " + student.name + "</br>");
document.write("your age is " + student.age + "</br>");
document.write("your grades in math " + student.grades.math + "</br>");
document.write("your grades in science " + student.grades.science + "</br>");
document.write("your grades in literature " + student.grades.literature + "</br>");
document.write("your phone is " + student.contactInfo.phone + "</br>");
document.write("your email is " + student.contactInfo.email + "</br>");
