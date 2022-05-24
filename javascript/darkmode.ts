// This js file is for dark mode, it needs to be imported into every page.
// Makes a variable stating whether dark mode is on or off
let Dark_Mode: boolean;
Dark_Mode = false;
// Pulls in the cookie for darkmode
let Dark_Mode_Cookie = document.cookie;
// Does a test to see if the dark mode cookie exists, or if they have got a cookie what cookie it is
// also changes the Dark_Mode so that it is correct.
if (Dark_Mode_Cookie == "Dark_Mode?=light")
{
    document.getElementById("Mode").href = "../style/light_mode.css";
    Dark_Mode = false;
}
else if (Dark_Mode_Cookie == "Dark_Mode?=dark")
{
    document.getElementById("Mode").href = "../style/dark_mode.css";
    Dark_Mode = true;
}
else
{
    document.getElementById("Mode").href = "../style/light_mode.css";
}
// Function that the button uses to change dark mode, whilst also updating the cookie
function DarkMode() {
    if (Dark_Mode == false)
    {
        document.getElementById("Mode").href = "../style/dark_mode.css";
        Dark_Mode = true;
        document.cookie = "Dark_Mode?=dark";
    }
    else if (Dark_Mode == true)
    {
        document.getElementById("Mode").href = "../style/light_mode.css";
        Dark_Mode = false;
        document.cookie = "Dark_Mode?=light";
    }
    else
    {
        document.getElementById("Mode").href = "../style/dark_mode.css";
    }
  }