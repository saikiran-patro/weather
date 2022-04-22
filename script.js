const weather={
    fetchweather:function(query){
        let url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=0231a3c26f62cbe20b2f2097d7fbddab&units=metric"
        fetch(url).then((response)=> response.json()).then((data)=>console.log(data));

    },
    fetchQuery:function(){
       let  query =document.getElementById("searchbox").value;
       this.fetchweather(query);
    }
}

let find=()=>{
   weather.fetchQuery();
}