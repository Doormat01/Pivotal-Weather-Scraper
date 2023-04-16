function call(){
    const urls = [
            { url: "https://x-hv1.pivotalweather.com/maps/warnings/nwshaz.conus.png", filename: "Hazards.png" }, //1
            { url: "https://x-hv1.pivotalweather.com/maps/cpc/latest/610temp.conus.png", filename: "Temperature_6-10day.png" }, //2
            { url: "https://x-hv1.pivotalweather.com/maps/spc/spcoverview.conus.png", filename: "SPC_Day_1_Cat"}, //3
            { url: "https://x-hv1.pivotalweather.com/maps/spc/spcd1wind.conus.png", filename: "Wind_1day.png" }, //4
            { url: "https://x-hv1.pivotalweather.com/maps/spc/spcd1hail.conus.png", filename: "Hail_1day.png" }, //5
            { url: "https://x-hv1.pivotalweather.com/maps/spc/spcd1tor.conus.png", filename: "Tornado_1day.png" }, //6
            { url: "https://x-hv1.pivotalweather.com/maps/spc/spcd2wind.conus.png", filename: "Wind_2day.png" }, //7
            { url: "https://x-hv1.pivotalweather.com/maps/spc/spcd2hail.conus.png", filename: "Hail_2day.png" }, //8
            { url: "https://x-hv1.pivotalweather.com/maps/spc/spcd2tor.conus.png", filename: "Tornado_2day.png" }, //9
            { url: "https://x-hv1.pivotalweather.com/maps/ndfd/latest/ndfd_6hgust.conus.png", filename: "MaxWindGust_6Hour.png" }, //10 
            { url: "https://x-hv1.pivotalweather.com/maps/mrms/latest/mrms_qpe_006h_p.conus.png", filename: "Precipitation_6Hour.png" }, //11
            { url: "https://x-hv1.pivotalweather.com/maps/ndfd/latest/ndfd_sfctmax.conus.png", filename: "Temperature_HIGH_1day.png" }, //12
            { url: "https://x-hv1.pivotalweather.com/maps/ndfd/latest/ndfd_sfctmin.conus.png", filename: "Temperature_LOW_1day.png" }, //13
            { url: "https://m2o.pivotalweather.com/maps/models/ecmwf/2023032212/000/850tw.conus.png", filename: "Current_Temp_Wind.png"}, //14
            { url: "https://x-hv1.pivotalweather.com/maps/rtma_ru/latest/series_001/sfcgust-imp.conus.png", filename: "Current_WindGust.png"}, //15
            { url: "https://m2o.pivotalweather.com/maps/models/ecmwf/2023032212/000/sfcmslp.conus.png", filename: "Current_MSLP.png"}, //16
            { url: "https://x-hv1.pivotalweather.com/maps/ndfd/latest/ndfd_sfctmax3.conus.png", filename: "Temperature_HIGH_3day.png"}, //17
            { url: "https://x-hv1.pivotalweather.com/maps/ndfd/latest/ndfd_sfctmax4.conus.png", filename: "Temperature_HIGH_4day.png"}, //18
            { url: "https://m2o.pivotalweather.com/maps/models/ecmwf/2023032212/000/500h_anom.conus.png", filename: "Current_Anomaly_Height.png"}, //19
            { url: "https://x-hv1.pivotalweather.com/maps/ndfd/latest/ndfd_sfctmin3.conus.png", filename: "Temperature_LOW_3day.png"}, //20
            { url: "https://x-hv1.pivotalweather.com/maps/ndfd/latest/ndfd_sfctmin4.conus.png", filename: "Temperature_LOW_4day.png"}, //21
            { url: "https://m2o.pivotalweather.com/maps/models/ecmwf/2023032212/000/850t_anom.conus.png", filename: "Current_Anomaly_Temp.png"}, //22
            { url: "https://m2o.pivotalweather.com/maps/models/ecmwf/2023032212/000/500h_mslp.conus.png", filename: "Current_MSLP_Height.png"}, //23
            { url: "https://m2o.pivotalweather.com/maps/models/hrrr/2023032614/000/refcmp.conus.png", filename: "Current_Composite_Reflectivity.png"}, //24
            { url: "https://m2o.pivotalweather.com/maps/models/hrrr/2023032614/000/cape03.conus.png", filename: "Current_AGL_Cape.png"}, //25
            { url: "https://m2o.pivotalweather.com/maps/models/hrrr/2023032614/000/stp.conus.png", filename: "Current_Significant_Tornado_Parameter.png"}, //26
            { url: "https://m2o.pivotalweather.com/maps/models/hrrr/2023032614/000/sim_ir.conus.png", filename: "Current_IR_Satellite.png"}, //27
            { url: "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/1250x750.jpg", filename: "Current_CONUS_Visible_Image"} // 28
    ]

        async function download(url, filename) {
          return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.responseType = 'blob';
            xhr.onload = function() {
              if (xhr.status === 200) {
                var a = document.createElement('a');
                var date = new Date().toLocaleDateString().replace(/\//g, "-");
                var folderName = 'PivotalWeatherParser' + date;
                a.href = window.URL.createObjectURL(xhr.response);
                a.download = folderName + '__' + filename;
                document.body.appendChild(a);
                a.click();
                resolve();
              } else {
                reject(xhr.statusText);
              }
            };
        
            xhr.onerror = function() {
              reject(xhr.statusText);
            };
        
            xhr.send();
          });
        }
        
        async function downloadAll(urls) {
          for (const {url, filename} of urls) {
            await download(url, filename);
          }
        
        }
      downloadAll(urls)
  }

// make a page where you can select what you want downloaded, using the submit button and overhaul the ui

/* get this to work
function closeCred(){
  var credits = document.getElementById("cred");
  credits.style.opacity = "0";
  } */ 
  
/*     selection logic
 const checkboxes = document.querySelectorAll('input[type=checkbox]');
      const checkedBoxes = [];

      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          checkedBoxes.push(checkbox.name);
        }
      });

      console.log(checkedBoxes);*/ 

  function openCred(){
  var cred = document.getElementById("credHelp")
  cred.innerHTML = "Credits to Dlan for the original code Discord id: 729510141195452466"
  }

  function openHelp(){
    var help = document.getElementById("credHelp")
    help.innerHTML = "For comments and questions please contact 891072704990568483 (Discord ID)"
  }

function openSelector(){
  alert("This has not yet been implimented")
//window.open("selector.html")
}

//onclick logic
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('button');
  link.addEventListener('click', function() {
    call();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('credits'); // for the credits button
  // onClick's logic below:
  link.addEventListener('click', function() {
      openCred();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('select'); // for the selection button
  // onClick's logic below:
  link.addEventListener('click', function() {
      openSelector();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('help'); // for the selection button
  // onClick's logic below:
  link.addEventListener('click', function() {
      openHelp();
  });
});



