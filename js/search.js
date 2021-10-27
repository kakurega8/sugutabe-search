document.querySelector(".search-button").addEventListener("click", getPosition);

// 位置情報取得
function getPosition(event) {
  const status = document.querySelector(".status");
  const p = document.querySelector(".page");
  const range = ranges.value;
  const keyword = document.forms.searchForm.keyword.value;
  const name = document.forms.searchForm.name.value;
  const start = event.target.value;
  const page = event.target.dataset.page;

  if (!navigator.geolocation) {
    status.textContent = "現在地情報を取得することができませんでした";
  } else {
    status.textContent = "検索中です…";
    navigator.geolocation.getCurrentPosition(successFunc, errorFunc);
  }


  async function successFunc(position) {
    status.textContent = "";
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    p.textContent = `${page}ページ目を表示していています。`;

    const postData = new FormData();
    postData.set("latitude", latitude);
    postData.set("longitude", longitude);
    postData.set("range", range);
    postData.set("start", start);
    postData.set("keyword", keyword);
    postData.set("name", name);

    const data = {
      method: "POST",
      body: postData,
    };
    // FetchApi
    const res = await fetch("Hotpepper.php", data);
    const d = await res.json();
    const json = await JSON.parse(d);

    renderJson(json);
  }

  function errorFunc(positionError) {
    switch (positionError.code) {
      case 0:
        status.textContent = "原因不明のエラーが発生しました。";
        break;
        
      case 1:
        status.textContent = "	位置情報の取得が許可されませんでした。";
        break;

      case 2:
        status.textContent = "位置情報が取得できませんでした。電波状況が悪い可能性があります。";
        break;

      case 3:
        status.textContent =
          "位置情報の取得がタイムアウトしました。";
        break;
    }
  }
}

function renderJson(json) {
  document.querySelector(".contents").innerHTML = "";
  document.querySelector("span").innerHTML = "";
  document.querySelector(
    "h4"
  ).textContent = `${json.results.results_available}件の検索結果を表示しています。`;
  const fragment = document.createDocumentFragment();
  const template = document.getElementById("template");
  const window_w = window.innerWidth;
  for (let i = 0; i < json.results.shop.length; i++) {
    const clone = template.content.cloneNode(true);

    if (window_w < 500) {
      clone.querySelector(
        ".image a"
      ).innerHTML = `<img src="${json.results.shop[i].photo.mobile.l}" alt="店舗イメージ" height="80%">`;
      clone.querySelector(".image a").href = json.results.shop[i].urls.pc;
      clone.querySelector(
        ".name a"
      ).textContent = `${json.results.shop[i].name}`;
      clone.querySelector(".name a").href = json.results.shop[i].urls.pc;
      clone.querySelector(
        ".access"
      ).textContent = `${json.results.shop[i].mobile_access}`;
      clone.querySelector(
        ".average"
      ).textContent = `予算：${json.results.shop[i].budget.average}`;
      clone.querySelector(
        ".address"
      ).textContent = `住所：${json.results.shop[i].address}`;
      clone.querySelector(
        ".wifi"
      ).textContent = `Wifi：${json.results.shop[i].wifi}`;
      clone.querySelector(
        ".catch"
      ).textContent = `${json.results.shop[i].catch}`;
    } else {
      clone.querySelector(
        ".image a"
      ).innerHTML = `<img src="${json.results.shop[i].photo.pc.m}" alt="店舗イメージ" min-width="168px" height="80%">`;
      clone.querySelector(".image a").href = json.results.shop[i].urls.pc;
      clone.querySelector(
        ".name a"
      ).textContent = `${json.results.shop[i].name}`;
      clone.querySelector(".name a").href = json.results.shop[i].urls.pc;
      clone.querySelector(
        ".access"
      ).textContent = `アクセス：${json.results.shop[i].access}`;
      clone.querySelector(
        ".average"
      ).textContent = `予算：${json.results.shop[i].budget.average}`;
      clone.querySelector(
        ".open"
      ).textContent = `営業時間：${json.results.shop[i].open}`;
      clone.querySelector(
        ".close"
      ).textContent = `定休日：${json.results.shop[i].close}`;
      clone.querySelector(
        ".address"
      ).textContent = `住所：${json.results.shop[i].address}`;
      clone.querySelector(
        ".wifi"
      ).textContent = `Wifi：${json.results.shop[i].wifi}`;
      clone.querySelector(
        ".capacity"
      ).textContent = `定員：${json.results.shop[i].capacity}`;
      clone.querySelector(
        ".catch"
      ).textContent = `${json.results.shop[i].catch}`;
    }
    fragment.appendChild(clone);
    }
  document.querySelector(".contents").appendChild(fragment);

  
  //ページネーション
  if (json.results.results_available > 10) {
    const i = Math.floor(json.results.results_available / 10) + 1;
    for (let j = 0; j < i; j++) {
      const span = document.createElement("a");
      span.textContent = j + 1;
      span.dataset.page = j + 1;
      span.value = 10 * j + 1;
      span.addEventListener("click", getPosition);
      fragment.appendChild(span);
    }
    document.querySelector("span").appendChild(fragment);
  }
}
