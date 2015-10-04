/**
 * Created by Anicet on 8/5/2015.
 */
var myDate = new Date();
function RetrieveDate()
{
    var myHour = myDate.getHours();
    var myMinute = myDate.getMinutes();
    var mySecond = myDate.getSeconds();
    if (myHour > 12)
    {
      if (myMinute < 10)
          {
          if (mySecond < 10)
          {
            document.getElementById("currentTime").value = (myHour - 12)+ ":0" + myMinute+ ":0"+ mySecond + " PM";
          }

          else
          {
              document.getElementById("currentTime").value = (myHour - 12)+ ":0" + myMinute+ ":"+ mySecond + " PM";
          }
      }
        else
      {
          if (mySecond < 10)
          {
              document.getElementById("currentTime").value = (myHour - 12) + ":" + myMinute+ ":0"+ mySecond + " PM";
          }

          else
          {
              document.getElementById("currentTime").value = (myHour -  12) + ":" + myMinute+ ":"+ mySecond + " PM";
          }
      }
    }
    else
    {
        if (myMinute < 10)
        {
            if (mySecond < 10)
            {
                document.getElementById("currentTime").value = myHour+ ":0" + myMinute+ ":0"+ mySecond + " AM";
            }

            else
            {
                document.getElementById("currentTime").value = myHour + ":0" + myMinute+ ":"+ mySecond + " AM";
            }
        }
        else
        {
            if (mySecond < 10)
            {
                document.getElementById("currentTime").value = myHour + ":" + myMinute+ ":0"+ mySecond + " AM";
            }

            else
            {
                document.getElementById("currentTime").value = myHour + ":" + myMinute+ ":"+ mySecond + " AM";
            }
        }

    }

}
