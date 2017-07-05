$(document).ready(function (){
    $.ajax({
        url: 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=4e8acb59908c4382b657f635887fb46d'
    }).done(function (news){
        //console.log(news.articles);


        $.ajax({
            url: 'https://newsapi.org/v1/sources'
        }).done(function (sourcesPlace){
            console.log(sourcesPlace);
            for(var i = 0; i<sourcesPlace.sources.length;i++){
            console.log(sourcesPlace.sources[i].category);
        }
        });
        console.log(news.articles.length);
        for(var i = 0; i<news.articles.length;i++){
            console.log(news.articles[i].author);
            console.log(news.articles[i].title);
            console.log(news.articles[i].description);
            console.log(news.articles[i].url);
            console.log(news.articles[i].urlToImage);
            console.log(news.articles[i].publishedAt);
        }



    })
})