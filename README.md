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

**API:** [Line login](https://developers.line.biz/zh-hant/)
, [Line pay](https://developers.line.biz/zh-hant/), [Information for busker](https://opendata.culture.tw/frontsite/openData/detail?datasetId=539)
, [Busker exhibition space information](https://opendata.culture.tw/frontsite/openData/detail?datasetId=540)


## Running App
If you wish to run the server, the first step is installing [Node.js](https://nodejs.org/en/)
### Download server need packages
```
npm install
```
### Start App

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
```
yarn start
```
### Start Test

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
```
yarn test
```

## Account structure

The service will divide account into two types:
### Member

Only the member account can use the chatroom to interactive with the busker. But it can not use any about busker function. If want to use the busker function that can apply to become the busker account.

### Busker

Busker can use our service to register where and when they want to perform and create the chatroom to interact with the live audience in real-time.

And collect the interactive data of the audience during the performance as a reference for the buskers to improve after the performance.

## User Interface
### Account_Non
-  **/index:** This page can be visited even you are not our member that includes the performance time and location.

![Screenshot_/index](https://user-images.githubusercontent.com/58504170/132121021-509bfcc9-8343-42a5-a924-e809369b4fb7.png)

### Account_Member
-  **/chatroom:** The member can use the chatroom to interactive with the busker.

![Screenshot_/chatroom](https://user-images.githubusercontent.com/58504170/132121090-40767ded-6b3d-4e70-9f34-18cbf4904bde.png)

-  **/comment-record:** Every message member sends will be saved here.

![Screenshot_/comment-record](https://user-images.githubusercontent.com/58504170/132121092-61d43b74-b5c0-4ea6-bb72-69a0b34f46c7.png)

### Account_Busker
-  **/busker:** This page includes comments on past performances and the number of viewers.

![Screenshot_/busker](https://user-images.githubusercontent.com/58504170/132121126-3373f316-8581-49cd-85a8-8ed3a2a02f8e.png)

-  **/busker_data:** Busker can use this page to observe the degree of interaction of recent performances.

![Screenshot_/busker_data](https://user-images.githubusercontent.com/58504170/132121123-e4e3c2f5-87ae-4d6d-b44c-7e1e0baa0398.png)

-  **/busker_apply_performance:** Busker use this page  to apply for performance location, time and introduction.

![Screenshot_/busker_apply_performance](https://user-images.githubusercontent.com/58504170/132121172-d219e787-758a-4ecc-9417-2fae0389ae06.png)

-  **/busker_comment_board:** After each performance, the audience's message will be saved on this page.

![Screenshot_/busker_comment_board](https://user-images.githubusercontent.com/58504170/132121121-c9c8cd48-868c-4868-a8cf-33fb75d3ce2c.png)


## License
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
