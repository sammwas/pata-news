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
             $('#newsOutlet').html(`
            <div class="col-md-4">
                <div class="thumbnail">
                    <img src="${news.articles[0].urlToImage}" alt="" class="img-responsive">
                    <div class="caption">
                        <div class="row">
                            <div class="col-md-6">
                                <h4 class="text-primary">${news.articles[0].title}</h4>
                            </div>
                            <div class="col-md-6">
                                <p class="">date posted: ${news.articles[0].publishedAt}</p>
                            </div>
                        </div>
                         <hr>  
                         <p>${news.articles[0].description}</p> <hr>
                         <div class='row'>
                         <div class='col-md-6'>
                         Author: ${news.articles[0].author}
                         Source: ${news.source}
                         </div>
                         <div class='col-md-6'>
                         <a href=" ${news.articles[0].url}" class="btn btn-warning" target='_blank'>Read more</a>
                         </div>
                         </div>
                    </div>
                </div>
            </div>
            `);
        }



    })
})