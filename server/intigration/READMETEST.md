# First Steps:

After getting this assignment I tried to understand what websocket is and how diffferent from http communicate protocol:
In this link i understood correctly what websocket is: https://stackoverflow.com/questions/14703627/websockets-protocol-vs-http


# Second Steps:

configured environment and run the app in local. 

Tested manually to understand all the scenarios from UI first and then tested server side only using this addon chrome-extension://omalebghpgejjiaoknljcfmglgbpocdp/index.html. 


# Third Steps:

Did reserch which libraray is available to websocket testing i found thease two (ws and socket.io). but, i like ws becuase easy to understand. 
learn ws library from following location https://www.npmjs.com/package/ws


# Fourth Steps:

Start write automation in mocha framework using ws. 
In order to run the test go to server > and run `npx mocha intigration/web-socket1.js`
you will see test results on terminal. You will get last test case fail becuase server returning 2 response and i'm not able verify 2 response peoperly 




