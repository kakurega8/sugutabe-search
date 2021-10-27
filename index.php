<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="「スグ食べサーチ」は今すぐお店に入りたい時、現在地付近の店舗を手軽に検索することができます。いきたいお店が見つかったらその場でホットペッパーグルメから予約することも可能です。">
    <meta property="og:site_name" content="スグ食べサーチ">
    <title>”スグ食べサーチ”かんたん店舗検索Webアプリ</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/sm_style.css" media="screen and (max-width:375px)">
    <link rel="stylesheet" href="css/ph_style.css" media="screen and (max-width:500px)">
    <link rel="stylesheet" href="css/tb_style.css" media="screen and (max-width:800px)">
    <link rel="stylesheet" href="css/pc_style.css" media="screen and (max-width:1080px)">
    <link rel="stylesheet" href="css/bg_style.css" media="screen and (min-width:1240px)">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
<body>
    <header>
        <div id="logo"><a href="https://www.web-semi.sakura.ne.jp/2021/2web/07/app/index.php"><img src="images/logo.png" alt="スグ食べサーチTOP"></a></div>
        <div id="header-image"></div>
    </header>
    <div id="wrapper" class="clearfix">
    <div id="heading">
    <h3><i class="fas fa-utensils 2x"></i>現在地周辺のお店を探す。</h3>
    </div>
    <div id="search--area">
        <form name="searchForm">
            <div class="form--group">
                <label for="name">店名（一部でも可） ></label>
                <input id="name" name="name" type="text" value="">
            </div>
            <div class="form--group">
                <label for="keyword">キーワード ></label>
                <input id="keyword" name="keyword" type="text" value="">
            </div>
            <div class="form--group">
                <label for="ranges">現在地からの範囲 ></label>
                <select id="ranges">
                    <option value="1">300m</option>
                    <option value="2">500m</option>
                    <option value="3" selected>1000m </option>
                    <option value="4">2000m </option>
                    <option value="5">3000m </option>
                </select>
            </div>
        </form>
        <button  class="search-button" value="1" data-page="1"><i class="fas fa-search 2x"></i>探す</button>
    </div>
    <div id="result--area">
    <p class="status"></p>
    <a class="tg" target="_blank" rel="noopener"></a>
    <h4></h4>
    <p class="page"></p>
    <span></span>
    <div class="next"></div>
    <div class="contents"></div>
    <template id="template">
        <ul class="shop-button">
            <div class="image"><a class="image"></a></div>
            <div class="shop--info">
            <li class="name"><a class="shop"></a></li>
            <li class="access"></li>
            <li class="average"></li>
            <li class="open clearfix"></li>
            </div>
            <div class="more"><a><i class="fas fa-chevron-right 3x"></i></a></div>
        </ul>
        <ul class="shop-more">
            <div class="image"><a class="image"></a></div>
            <div class="shop--info">
                <li class="name"><a class="shop"></a></li>
                <li class="address"></li>
                <li class="capacity"></li>
                <li class="close"></li>
                <li class="wifi"></li>
                <li class="catch clearfix"></li>
            </div>
        </ul>
    </template>
    </div>
    </div>
    <footer>
        <div id="provide"><p>Powered by <a href="http://webservice.recruit.co.jp/">ホットペッパー Webサービス</a></p></div>
    </footer>
    <script language="javascript" src="js/search.js"></script>
    <script language="javascript" src="js/jquery.3.5.1.min.js"></script>
</body>
</html>
