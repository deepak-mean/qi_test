Deepak Assignment - Custom angular Directive

##Total Development Time - 3 hours 50 minutes

You need to have "http-server" installed to run the code as URL so that relative paths can work.

##Install 'http-server'
## Run following Command

> npm install -g http-server

## Run the server
## From root directory of project , run command

> http-server

Now you can go to url "http://localhost:8080" in browser.



## Data for the directive list

To pass the data to the directive use attribute 'data' with directive :

<drop-down data="{{dropDownData}}"></drop-down>

where "dropDownData" is parent scope data to be passed.

Here I have considered data to be an array of json, where each josn represents data for one driver with following structure :

>
{
   "Driver": {
      "Name": "Driver Name",
      "Mobile": "XXXXXX",
      "Image": "image-url"
   },
   "Vehicle": {
      "Number": "Vehicle Number",
      "Name": "Vehicle Name",
      "Image": "image-url"
   }
 }

For having dummy data, I have created a angular service 'dataService' at path 'js/service.js'
So you can change data there

## Selected Option 

To pass selected option , you can use attribute 'selected' with Directive :

<drop-down data="{{dropDownData}}" selected="{{selected}}"></drop-down>

Here , $scope.selected should be the json data for selected option in list.And it should obviously be the same structure defined above.




