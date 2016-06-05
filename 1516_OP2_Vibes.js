function main() 
{
    var logo = document.getElementById("logo");
    var logos = ["images/logo-happy.png", "images/logo-love.png", "images/logo-zen.png", "images/logo-energetic.png"]
    var contact = document.getElementById("imgcontact");
    var imgs = ["images/route happy.png", "images/route inlove.png", "images/route zen.png", "images/route energetic.png"];
    var os = document.getElementById("ourstory");
    var pr = document.getElementById("products");
    var su = document.getElementById("subscribe");
    var mf = document.getElementById("moodfestival");
    var co = document.getElementById("contact");
    var sc = document.getElementById("submitcontact");
    var bu = document.getElementById("button");
    var colors = ["happy","love","zen","energetic"];
    var gradients = ["een","twee","drie","vier"]
    var teller = 1;
    var timer;
    
    setInterval(function()
        {
            os.setAttribute("class", gradients[teller]);
            pr.setAttribute("class", gradients[teller]);
            su.setAttribute("class", gradients[teller]);
            mf.setAttribute("class", colors[teller]);
            co.setAttribute("class", colors[teller]);
            sc.setAttribute("class", colors[teller]);
            bu.setAttribute("class", colors[teller]);
            logo.setAttribute("src", logos[teller]);
            contact.setAttribute("src", imgs[teller]);
            teller++;
            if(teller >= 4)
                {
                    teller=0;
                }
        }
        , 20000);
}

window.onload = function() {
       main();
}
