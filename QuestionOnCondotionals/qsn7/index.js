const movie={
title: 'ViKings',
director:'Michal',
rating: 4.5,
releaseYear:2018
};
showProperties(movie);
function showProperties(obj){
for(let key in obj)
if(typeof obj[key] ==='string')
console.log(key,obj[key]);
}