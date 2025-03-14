function courseInformation (courseName , courseDuration , courseOwner){
    var defualt= {
        courseName:"Default Name",
        courseDuration:"Default Duration",
        courseOwner:"Default Owner",
    }
    Object.assign(defualt,{courseName,courseDuration,courseOwner});
    console.log(defualt);
}
var course = {
    courseName:"css",
    courseDuration:"20s",
    courseOwner:"Hager",
};
courseInformation(course.courseName,course.courseDuration,course.courseOwner);