let peoples=[

{
    name:"Enes",
    surname:"Çadırlı",
    age:22,
},

{
    name:"Eren",
    surname:"Çadırlı",
    age:16,
},

{
    name:"Ege",
    surname:"Kutlubaş",
    age:23,
},

{
    name:"Baran",
    surname:"Bilge",
    age:22
},

{
    name:"Ömer",
    surname:"Kurşunlu",
    age:23,
},

{
   name:"Emir Mirza",
   surname:"Tuna",
   age:12,
}
            ];

function findAdults(peoples){

 return peoples.filter(person => person.age > 18); 

}

const adults=findAdults(peoples)

 console.log(adults);
 
            