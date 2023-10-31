import axios from 'axios';

function getInfo(){
    const imgPos = document.querySelector('#random-fossil-image').innerHTML;
    const namePos = document.querySelector('#random-fossil-name').innerText;
    axios.get('/random-fossil.json').then(res => {
      const img = req.data.img;
      const name = req.data.name;
      imgPos += JSON.parse(img);
      namePos += JSON.parse(name);
        document.querySelector('#get-random-fossil').addEventListener('click')
    })}