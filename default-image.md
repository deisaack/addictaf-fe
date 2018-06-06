<div data-ng-app="App" data-ng-controller="AppCtrl">
    <h2>Angular Images with ng-src fallback</h2>  
  <hr>
  <p>- IF All image ng-src ok THEN first image displayed</p>
    <img ng-src="{{('https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png') || ('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68939/angular-logo.png')}}" onerror="this.src='https://placehold.it/200?text=on+Error'" />
  <hr>
  <p>- IF First image ng-src 404 THEN onError image displayed. Even though second image is ok, the first 404 image triggers the onError. Angular evaluates image as truth-y, and passes error.</p>
    <img ng-src="{{('404.png') || ('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68939/angular-logo.png')}}" onerror="this.src='https://placehold.it/200?text=on+Error'" />
  <hr>
  <p>- IF First image ng-src blank THEN second Angular image displayed. First Angular ng-src evaluated as false, and login continues to OR parameter for second ng-src.</p>
    <img ng-src="{{('') || ('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68939/angular-logo.png')}}" onerror="this.src='https://placehold.it/200?text=on+Error'" />
  <hr>
  <p>- IF Second image ng-src 404 THEN first image src displayed. Once first ng-src is found truth-y, image is used.</p>
    <img ng-src="{{('https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png') || ('404.png')}}" onerror="this.src='https://placehold.it/200?text=on+Error'" />
  <hr>
  <p>- IF Both images ng-src 404 THEN onError image src displayed</p>
    <img ng-src="{{('404.png') || ('404.png')}}" onerror="this.src='https://placehold.it/200?text=on+Error'" />
  <hr>
  <p>- IF Both images ng-src are blank THEN no image src displayed (images would display below this paragraph). Both ng-src are evaluated as false, and no onError triggered by a 404, so no image displayed at all.</p>
    <img ng-src="{{('') || ('')}}" onerror="this.src='https://placehold.it/200?text=on+Error'" />
 </div>