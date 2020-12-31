
const fs = require('fs');
const v8 = require('v8');

const name = ['Entire Residence · 4 beds', 'Private Guesthouse · 2 beds', 'Royal Bungalow', 'Entire Mansion 5 beds', 'Guest Bedroom · 1 bed', 'Entire House · 6 beds', 'Entire Guest Suite · 3 beds'];

const description = ['Getaway in Paradise', 'One of a kind experience', 'Once in a lifetime adventure', 'Cliff Town Retreat', 'Villa by the Sea'];

const avgRating = [4.53, 3.75, 4.78, 3.25, 4.93, 4.23, 4.11, 4.42];

const numratings = [51, 130, 255, 42, 85, 352];

const image = [
'https://ddpgithubprojects.s3-us-west-2.amazonaws.com/airbnbs/airbnb1.jpg',
'https://ddpgithubprojects.s3-us-west-2.amazonaws.com/airbnbs/airbnb2.jpg',
'https://ddpgithubprojects.s3-us-west-2.amazonaws.com/airbnbs/airbnb3.jpg',
'https://ddpgithubprojects.s3-us-west-2.amazonaws.com/airbnbs/airbnb4.jpg',
'https://ddpgithubprojects.s3-us-west-2.amazonaws.com/airbnbs/airbnb5.jpg',
'https://ddpgithubprojects.s3-us-west-2.amazonaws.com/airbnbs/airbnb6.jpg',
'https://ddpgithubprojects.s3-us-west-2.amazonaws.com/airbnbs/airbnb7.jpg',
'https://ddpgithubprojects.s3-us-west-2.amazonaws.com/airbnbs/airbnb8.jpg',
'https://ddpgithubprojects.s3-us-west-2.amazonaws.com/airbnbs/airbnb9.jpg',
'https://ddpgithubprojects.s3-us-west-2.amazonaws.com/airbnbs/airbnb10.jpg',
'https://ddpgithubprojects.s3-us-west-2.amazonaws.com/airbnbs/airbnb11.jpg',
'https://ddpgithubprojects.s3-us-west-2.amazonaws.com/airbnbs/airbnb12.jpg'];

const rate = [425, 623, 89, 123, 342, 122, 456, 324, 144, 126];

const postedDate = ['08/13/2020', '07/22/2020', '05/16/2020', '01/34/2020'];


const wasLiked = [true, false];

const longitude = [-161.75583, -111.73583, -91.75243,-74.78293, -131.71143, -77.73343,-68.01197];

const latitude = [19.50139, 21.81694, 43.82294, 53.23648, 39.87797, 64.85694];

const category = ['"Tree House"', '"House"', '"Duplex"', '"Mansion"', '"Boat"', '"Castle"', '"Tiny House"'];

const superHost = [true, false];

const writeLine = () => {
  return `Line!, Line!, Line!, Line!\n`
}

const checkMemoryNative = () => {
  console.log("Memory Usage: ", process.memoryUsage())
}

const printHeapStats = () => {
  console.log('Heap Status', v8.getHeapSpaceStatistics())
}

writeNTimes = (writer, min, max, callback) => {

  var relatedPlaceID1 = Math.ceil(Math.random()*max);
  var relatedPlaceID2 = Math.ceil(Math.random()*max);
  var relatedPlaceID3 = Math.ceil(Math.random()*max);
  var relatedPlaceID4 = Math.ceil(Math.random()*max);
  var relatedPlaceID5 = Math.ceil(Math.random()*max);
  var relatedPlaceID6 = Math.ceil(Math.random()*max);
  var relatedPlaceID7 = Math.ceil(Math.random()*max);
  var relatedPlaceID8 = Math.ceil(Math.random()*max);
  var relatedPlaceID9 = Math.ceil(Math.random()*max);
  var relatedPlaceID10 = Math.ceil(Math.random()*max);
  var relatedPlaceID11 = Math.ceil(Math.random()*max);
  var relatedPlaceID12 = Math.ceil(Math.random()*max);

  const writeFile = () => {
    let ok = true;

    const line1 = 'id,name,description,avgRating,numratings,image,rate,wasLiked,postedDate,longitude,latitude,category,superHost,relatedPlaces\n';

    do {

        var dataString = `{`;
        dataString +=  `"id":${min},`;
        dataString += `"name":"${name[min % 6]}",`;
        dataString += `"description":"${description[min % 5]}",`;
        dataString += `"avgRating":${avgRating[min % 8]},`;
        dataString += `"numratings":${numratings[min % 6]},`;
        dataString += `"image":"${image[min % 12]}",`;
        dataString += `"rate":${rate[min % 10]},`;
        dataString += `"wasLiked":${wasLiked[min % 2]},`;
        dataString += `"postedDate":"${postedDate[min % 4]}",`;
        dataString += `"longitude":${longitude[min % 7]},`;
        dataString += `"latitude":${latitude[min % 6]},`;
        dataString += `"category":${category[min % 7]},`;
        dataString += `"superHost":${superHost[min % 2]},`;
        dataString += `"relatedPlaces":[${relatedPlaceID1},${relatedPlaceID2},${relatedPlaceID3},${relatedPlaceID4},${relatedPlaceID5},${relatedPlaceID6},${relatedPlaceID7},${relatedPlaceID8},${relatedPlaceID9},${relatedPlaceID10},${relatedPlaceID11},${relatedPlaceID12}]`;
        dataString += `}\n`;

      if (min % max === 0) {

        writer.write(dataString, 'utf-8', callback);
      } else {
        ok = writer.write(dataString, 'utf-8')
      }
      min++;
    } while (min <= max && ok);
    if (min <= max) {
      writer.once('drain', writeFile)
    }
  }
  writeFile();
}


const writeStream = fs.createWriteStream('./db/mongoseeddata.json')

// const line1 = 'id,name,description,avgRating,numratings,image,rate,wasLiked,postedDate,longitude,latitude,category,superHost,relatedPlaces\n';
// writeStream.write(line1);
writeNTimes(writeStream, 1, 20, ()=>{
  console.log('written!')
})