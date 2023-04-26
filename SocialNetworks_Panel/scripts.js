var Social_Discord="";
var Social_YouTube="";
var Social_Phone="tel:+5352716081";
var Social_WhatsApp="https://wa.me/+5352716081?text=!Hello Carlos";
var Social_Telegram="";
var Social_Facebook="https://m.me/carlostiptravel";
var Social_LinkedIn="";
var Social_Twitter="";
var Social_Twitch="";
var Social_Instagram="";
var Social_TikTok="";



function endCleaner()
{ 
    
    var counter=0;
if(Social_Discord!="")
                    {
                        counter=counter+1
                        document.getElementById("Social_Discord").href=Social_Discord;
                    }else
                    {
                        document.getElementById("Social_Discord").remove();
                    }
                    if(Social_YouTube!="")
                    {
                        counter=counter+1
                        document.getElementById("Social_YouTube").href=Social_YouTube;
                    }else
                    {
                        document.getElementById("Social_YouTube").remove();
                    }
                    if(Social_Phone!="")
                    {
                        counter=counter+1
                        document.getElementById("Social_Phone").href=Social_Phone;
                    }else
                    {
                        document.getElementById("Social_Phone").remove();
                    }
                    if(Social_WhatsApp!="")
                    {
                        counter=counter+1
                        document.getElementById("Social_WhatsApp").href=Social_WhatsApp;
                    }else
                    {
                        document.getElementById("Social_WhatsApp").remove();
                    }
                    if(Social_Telegram!="")
                    {
                        counter=counter+1
                        document.getElementById("Social_Telegram").href=Social_Telegram;
                    }else
                    {
                        document.getElementById("Social_Telegram").remove();
                    }
                    if(Social_Facebook!="")
                    {
                        counter=counter+1
                        document.getElementById("Social_Facebook").href=Social_Facebook;
                    }else
                    {
                        document.getElementById("Social_Facebook").remove();
                    }
                    if(Social_LinkedIn!="")
                    {
                        counter=counter+1
                        document.getElementById("Social_LinkedIn").href=Social_LinkedIn;
                    }else
                    {
                        document.getElementById("Social_LinkedIn").remove();
                    }
                    if(Social_Twitter!="")
                    {
                        counter=counter+1
                        document.getElementById("Social_Twitter").href=Social_Twitter;
                    }else
                    {
                        document.getElementById("Social_Twitter").remove();
                    }
                    if(Social_Twitch!="")
                    {
                        counter=counter+1
                        document.getElementById("Social_Twitch").href=Social_Twitch;
                    }else
                    {
                        document.getElementById("Social_Twitch").remove();
                    }
                    if(Social_Instagram!="")
                    {
                        counter=counter+1
                        document.getElementById("Social_Instagram").href=Social_Instagram;
                    }else
                    {
                        document.getElementById("Social_Instagram").remove();
                    }
                    if(Social_TikTok!="")
                    {
                        counter=counter+1
                        document.getElementById("Social_TikTok").href=Social_TikTok;
                    }else
                    {
                        document.getElementById("Social_TikTok").remove();
                    }
 
                    if(counter<2)
                    {
                        document.getElementById("SocialNetworks").remove();
                    }
}
