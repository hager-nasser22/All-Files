var library = {
    books:[
        {
            name : "Math",
            auther : "hager",
        },
        {
            name : "science",
            auther : "hager",
        },
        {
            name : "literature",
            auther : "hager",
        },
        {
            name : "english",
            auther : "hager",
        },
        {
            name : "arabic",
            auther : "hager",
        },
    ]
}
function title(){
    for(var count = 0 ; count < library.books.length ; count++){
        document.write(library.books[count]["name"] + "</br>");
    }
}
var printTitle = title();
