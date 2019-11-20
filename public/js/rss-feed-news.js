console.log('hello');

// fetch rss data - output in news section
rssUrl = '../backend/rss-feed-news.php';

async function getRss() {
  let json;
  try {
    const response = await fetch(rssUrl);
    json = await response.json();
  } catch (e) {
    console.log(e);
  }

  console.log(json);
  //return JSON.stringify(json);

  let html = '';

  for (let index = 0; index < json.length; index++) {
    const element = json[index];
    //console.log(json[index].title);
    tempHtml = `<div class="latest-news-container">
      <div class="latest-news-date"><p>${json[index].pubDate}</p></div>
      <div class="latest-news-preview">
        <h3><a href="${json[index].link}">${json[index].title}<a/></h3>
      </div>
    </div>`;

    html += tempHtml;
  }
  
  //console.log('html',html);

  // Set a timeout to show the loading spinner working (for demo purposes only)
  setTimeout(function(){ 
    document.querySelector('#news-loader').style.display = "none";
    document.querySelector('#latest-news').innerHTML = html;
  }, 100);
}

getRss();