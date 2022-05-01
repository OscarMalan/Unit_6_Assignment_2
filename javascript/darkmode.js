// This js file is for dark mode, it needs to be imported into every page.
let Dark_Mode = false;
let Dark_Mode_Cookie = document.cookie;
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
function DarkMode() {
    if (Dark_Mode == false)
    {
        document.getElementById("Mode").href = "../style/dark_mode.css";
        Dark_Mode = true;
        console.log("dark mode selected");
        document.cookie = "Dark_Mode?=dark";
        console.log(document.cookie);
    }
    else if (Dark_Mode == true)
    {
        document.getElementById("Mode").href = "../style/light_mode.css";
        Dark_Mode = false;
        console.log("light mode selected");
        document.cookie = "Dark_Mode?=light";
        console.log(document.cookie)
    }
    else
    {
        document.getElementById("Mode").href = "../style/dark_mode.css";
    }
  }