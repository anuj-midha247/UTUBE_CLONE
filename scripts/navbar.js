// import nav from "../components/nav.js";
var timerid;
    const debounce= ()=>{
        if(timerid){
            clearTimeout(timerid);
        }
        timerid = setTimeout(()=>{
            fetchkeyword();
        },500)
    }
    function fetchkeyword(){
        let keyword=document.getElementById("search").value;
        //console.log(keyword);
        let key='AIzaSyA6bb-YrLGHVAtA74KnX2rKs1MdM4xtycg';
        let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=14&q=${keyword}&key=${key}`;
        fetch(url).then((respone)=>{
            return respone.json();
        }).then((respone)=>{
            console.log(respone);
            showSuggestionOfKeyword(respone.items);
        }).catch((err)=>{
            console.log(err);
        });
    }
    function showSuggestionOfKeyword(data){
        //console.log(data);
        document.querySelector("#searchsugg").innerHTML = "";
        data.map((el)=>{
            let div=document.createElement("div");
            div.setAttribute("class","suggestionBySearch");
            let h3=document.createElement("p");
            h3.innerHTML = `&nbsp;<i class="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;`+ el.snippet.title;
            h3.addEventListener("click",()=>{
                searchConBySugg(el.snippet.title);
            });
            h3.setAttribute("class","suggpointereffect")
            div.append(h3);
            document.querySelector("#searchsugg").append(div);
        })

    }
    const enterfuncSearch= (event)=>{
        if(event.key === "Enter"){
            let keyword=document.getElementById("search").value;
            localStorage.setItem("keyword",keyword);
            location.href= './Search.html';
            // let key='AIzaSyA6bb-YrLGHVAtA74KnX2rKs1MdM4xtycgs';
            // //console.log(keyword)
            // let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${keyword}&key=${key}`;
            // fetch(url).then((respone)=>{
            //     return respone.json();
            // }).then((respone)=>{
            //     console.log(respone);
            // }).catch((err)=>{
            //     console.log(err);
            // });

        }
    }
    const searchConBySugg= (keyword)=>{
        document.getElementById("search").value = keyword;
        localStorage.setItem("keyword",keyword);
        location.href= './Search.html';
        /*let key='AIzaSyA6bb-YrLGHVAtA74KnX2rKs1MdM4xtycgs';
            //console.log(keyword)
            let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${keyword}&key=${key}`;
            //console.log(keyword);
            fetch(url).then((respone)=>{
                return respone.json();
            }).then((respone)=>{
                console.log(respone);
            }).catch((err)=>{
                console.log(err);
            });*/
    }
    const searchbtnfunc = ()=>{
        let keyword=document.getElementById("search").value;
        localStorage.setItem("keyword",keyword);
        location.href= './Search.html';
    }

    //add line no.58 to main repo of before and after navbar
