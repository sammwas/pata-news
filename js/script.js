$(document).ready(function (){
    $.ajax({
        url: 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=4e8acb59908c4382b657f635887fb46d'
    }).done(function (news){
        //console.log(news.articles);


        $.ajax({
            url: 'https://newsapi.org/v1/sources'
        }).done(function (sourcesPlace){
        //    console.log(sourcesPlace);
            for(var i = 0; i<sourcesPlace.sources.length;i++){
           //news sources
        }
        });
        console.log(news.articles[0]);
        for(var i = 0; i<news.articles.length;i++){
             $('#newsOutlet').append(`
            <div class="col-md-4">
                <div class="thumbnail">
                    <img src="${news.articles[i].urlToImage}" alt="" class="img-responsive">
                    <div class="caption">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="text-primary">${news.articles[i].title}</h4>
                            </div>
                        </div>
                         <hr>  
                         <div class="small">
                                <p class="">date posted: ${news.articles[i].publishedAt}</p>
                            </div>
                         <p>${news.articles[i].description}</p> <hr>
                         <div class='row'>
                         <div class='col-md-6'>
                         Author: ${news.articles[i].author}
                         Source: ${news.source}
                         </div>
                         <div class='col-md-6'>
                         <a href=" ${news.articles[i].url}" class="btn btn-warning" target='_blank'>Read more</a>
                         </div>
                         </div>
                    </div>
                </div>
            </div>
            `);
        }



    })
})