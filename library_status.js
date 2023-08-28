var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];
    for(var i=0;i<library.length;i++){
        var sum=" "+library[i].title +" "+library[i].auther+ " .";
        if(library[i].readingStatus){
            console.log("The book Is already read" +sum);
        }else{
            console.log("the book isnt read yet"+ sum);
        }
       
        
    }