# starbusker-frontend-v2
## Introduction
This project is a buskers app, named StarBusker,we propose an innovative interactive model by creating a real-time anonymous interactive board through the Web to provide buskers and viewers with a different interactive model, 
bringing down the invisible wall between buskers and viewers in the past.
The following is the introduction video of StarBusker

[youtube](https://www.youtube.com/watch?v=5EMPqfQ8q2A&ab_channel=%E7%BE%85%E5%A3%AB%E6%AC%BD)

The following is the web structure

[figma](https://www.figma.com/file/TDudYVUIilbU4okxY589dJ/%E8%A1%97%E9%A0%AD%E8%97%9D%E4%BA%BA?node-id=18%3A55)

The following is the back-end of source code

[github]()
## Tech Stack

**Front-end:** TypeScript, React, Websocket , Session, Chart.js , Jest

**API:** 
[Google login](https://console.cloud.google.com/apis/dashboard?hl=zh-tw&project=disco-song-312608)
[Geocoder api](https://developers.google.com/maps/documentation/geocoding/overview)
[Facebook login](https://developers.facebook.com/docs/facebook-login/web/)
[Line login](https://developers.line.biz/zh-hant/)
[Line pay](https://developers.line.biz/zh-hant/)
[Information for busker](https://opendata.culture.tw/frontsite/openData/detail?datasetId=539)
[Busker exhibition space information](https://opendata.culture.tw/frontsite/openData/detail?datasetId=540)


## Running App
If you wish to run the server, the first step is installing [Node.js](https://nodejs.org/en/)
### Download frontend need packages
```
yarn install
```

### Setup environment

create .env file In the project root directory, and modify following parameter
```
REACT_APP_GOOGLE_KEY=your goolge map key
```

### Start App

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
```
yarn start
```


## Account structure

The service will divide account into two types:
### Member

Only the member account can use the chatroom to interactive with the busker. But it can not use any about busker function. If want to use the busker function that can apply to become the busker account.

### Busker

Busker can use our service to register where and when they want to perform and create the chatroom to interact with the live audience in real-time.

And collect the interactive data of the audience during the performance as a reference for the buskers to improve after the performance.

## User Interface
* /index: 首頁中顯示了表演者的表演時間、表演項目及表演地點。即便是非會員也可以訪問首頁，提供人們獲取街頭藝人的表演相關資訊。

![](https://i.imgur.com/xuBOotX.png)

### Account_Member
* /chatroom：會員可以從首頁中透過點選表演者，進入到該表演者的聊天室，透過此聊天室與街頭藝人進行互動，若支持此表演者，也可給予打賞。在點選打賞後，會進入line pay的捐款頁面。

![](https://i.imgur.com/Kdauxox.png)

* /comment-record：聊天室中的所有聊天內容將會被記錄，在表演結束後提供會員進行瀏覽與回味。

![](https://i.imgur.com/Vrq7UJf.png)

* /busker_apply：街頭藝人需先有會員帳號後，透過此頁進行表演者的帳號申請，需選擇表演項目及填寫個人介紹。

![](https://i.imgur.com/NxzQMSG.png)


### Account_Busker
* /busker：表演者可以透過此頁面得知觀看表演人數、留言人數、表演者登記的表演時間及地點、以及獲得的打賞收益資訊。

![](https://i.imgur.com/8gGMEBs.png)


* /busker_data：表演者可透過此頁面來觀察近期演出的互動程度，包含觀看人數及留言人數，藉此分析表演的互動成果。

![](https://i.imgur.com/Sxo8Dl0.png)


* /busker_apply_performance： 表演者透過此頁面進行演出的申請，填寫資訊包含演出時間、演出項目、演出地點及演出介紹，以提供欲觀看表演的人更詳細的資訊。

![](https://i.imgur.com/th3kbVQ.png)


* /busker_comment_board：在表演者結束每場演出之後，觀眾的留言將保存紀錄，提供表演者進行瀏覽與分析。

![](https://i.imgur.com/aT2wMtf.png)
---
## Contributors 
[shuan86(backend+frontend)](https://github.com/shuan86)
[s490607(frontend)](https://github.com/s490607)
[yaya75315(frontend)](https://github.com/yaya75315)
[HsiuHsu(designer)](https://github.com/HsiuHsu)
## Awards
2020資料創新應用競賽-AWS 協辦  銅獎
[IThome news](https://www.ithome.com.tw/pr/137868)
![image](https://github.com/shuan86/starbusker-frontend-v2/blob/develop/award/StarBusker_新聞截圖.png)
![image](https://github.com/shuan86/starbusker-frontend-v2/blob/develop/award/StarBusker_銅獎合照.jpg)

## License
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
