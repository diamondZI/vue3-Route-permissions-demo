import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const usedataStore = defineStore('data', () => {
  const data =reactive({
    "one":{
      "two":[
        {
          "name":"蚂蚁",
          "title":"人类",
          "address":"Ren"
        },
        {
          "name":"蚂蚁",
          "title":"人类",
          "address":"Ren"
  
        },
        {
          "name":"蚂蚁",
          "title":"人类",
          "address":"Ren"
        }
      ],
      "four":[
        {
          "name":"蚂蚁3",
          "title":"人类",
          "address":"Ren"
        },
        {
          "name":"蚂蚁3",
          "title":"人类",
          "address":"Ren"
        },
        {
          "name":"蚂蚁3",
          "title":"人类",
          "address":"Ren"
        }
      ],
      "Three":[
        {
          "name":"蚂蚁3",
          "title":"人类",
          "address":"Ren"
        },
        {
          "name":"蚂蚁3",
          "title":"人类",
          "address":"Ren"
        },
        {
          "name":"蚂蚁3",
          "title":"人类",
          "address":"Ren"
        }
      ]
    },
    "one1":{
      "two":[
        {
          "name":"蚂蚁11",
          "title":"人类",
          "address":"Ren"
        },
        {
          "name":"蚂蚁",
          "title":"人类",
          "address":"Ren"
        },
        {
          "name":"蚂蚁",
          "title":"人类",
          "address":"Ren"
        }
      ],
      "four":[
        {
          "name":"蚂蚁3",
          "title":"人类",
          "address":"Ren"
        },
        {
          "name":"蚂蚁3",
          "title":"人类",
          "address":"Ren"
        },
        {
          "name":"蚂蚁3",
          "title":"人类",
          "address":"Ren"
        }
      ],
      "Three":[
        {
          "name":"蚂蚁3",
          "title":"人类",
          "address":"Ren"
        },
        {
          "name":"蚂蚁3",
          "title":"人类",
          "address":"Ren"
        },
        {
          "name":"蚂蚁3",
          "title":"人类",
          "address":"Ren"
        }
      ]
    }
  })
 const Delete=(ID:number)=>{
  let max=0;
  console.log("12knhljee");
  
  // for (const key in  data) {
  //   let i=0;
  //   console.log("21iohyuuh");
  //   // for (const Twokey in  data[key]) {
  //   //   i++;
  //   //   max++;
    
      
  //   // if (max===ID) {
  //   //   data[key][Twokey].splice(i,1);
  //   //   console.log(data[key][Twokey][i]);
  //   //   return
  //   // }
  //   // }
  // }

 }
  return {data,Delete}
})
