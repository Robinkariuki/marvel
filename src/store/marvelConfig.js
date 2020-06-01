import md5 from'md5';

const Base_url ='https://gateway.marvel.com/v1/public/characters'
const api_key ='7d54d08070c06a25a4832fba1919fcab'
const private_key ='05cfac0fe51f6e4d9c2747e04ce6dbf0150cd8ff'
const ts='123'
const hash=md5('12305cfac0fe51f6e4d9c2747e04ce6dbf0150cd8ff7d54d08070c06a25a4832fba1919fcab');
const image_size = 'portrait_xlarge.jpg'


 export{
     Base_url,
     api_key,
     ts,
     hash,
     image_size
 }
