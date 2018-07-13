let year =2008;

if(year%4===0)
{
    if(year%100 === 0 && year%400 !== 0)
    {
        console.log("leep year")
    }
    else
    {
        console.log("not leep year")
    }
}
else
{
    console.log("not leep year")
}