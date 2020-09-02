var request = new XMLHttpRequest();
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  request.open('GET', proxyurl+'https://fortniteapi.io/v1/loot/list?lang=en');
  request.setRequestHeader('Authorization', '5b80a973-bbf3638c-2d35fc67-768cb542');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
        var data = JSON.parse(this.responseText);

        const weapons = Object.keys(data.weapons);
        var weaponList = document.querySelector('.weapon_list')

        //Print weapons
        for (let i = 0; i < weapons.length; i++) {

            //create div for a weapon 
            var weapons_div = document.createElement("div");
            
            //create img for Weapon image
            var weapons_img = document.createElement("img");

            //create p for Weapon Name
            var weapon_p = document.createElement("p");

            //add div to weaponList
            weaponList.appendChild(weapons_div);
            weapons_div.className = "weapons";
            weapons_div.id = data.weapons[i].id;

            //add img to div
            weapons_div.appendChild(weapons_img);
            if (data.weapons[i].images.background !== null){
                weapons_img.src = data.weapons[i].images.background;
            } else {
                weapons_img.src = 'no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
            }
            //add p to div
            weapons_div.appendChild(weapon_p);
            weapon_p.textContent = data.weapons[i].name;

        }

        //Open Weapons Detail
        var weaponsImgBtns = document.querySelectorAll(".weapons");
        var weapondetail = document.querySelector(".weapon_detail");
        var weapon_detail_rarity = document.querySelector(".weapon_detail_rarity");
        var weapon_detail_type = document.querySelector(".weapon_detail_type");
        var weapon_detail_DmgPB = document.querySelector(".weapon_detail_DmgPB");
        var weapon_detail_FiringRate = document.querySelector(".weapon_detail_FiringRate");
        var weapon_detail_ClipSize = document.querySelector(".weapon_detail_ClipSize");
        var weapon_detail_ReloadTime = document.querySelector(".weapon_detail_ReloadTime");
        var weapon_detail_BulletsPerCartridge = document.querySelector(".weapon_detail_BulletsPerCartridge");
        var weapon_detail_Spread = document.querySelector(".weapon_detail_Spread");
        var weapon_detail_SpreadDownsights = document.querySelector(".weapon_detail_SpreadDownsights");
        var weapon_detail_DamageZone_Critical = document.querySelector(".weapon_detail_DamageZone_Critical");
        var weapon_detail_Description = document.querySelector(".weapon_detail_Description");
        var weapon_detail_img = document.querySelector(".weapon_detail_img");
        var weapon_detail_name = document.querySelector(".weapon_detail_name");


        weaponsImgBtns.forEach(weaponsImgBtn => {
            weaponsImgBtn.addEventListener('click', () => {

                for (var i = 0; i < weapons.length; i++){
                    if (data.weapons[i].id === weaponsImgBtn.id){
                        weapon_detail_name.textContent = data.weapons[i].name;
                        weapon_detail_rarity.textContent = "Rarity: " + data.weapons[i].rarity;
                        weapon_detail_type.textContent = "Type: " + data.weapons[i].type;
                        weapon_detail_DmgPB.textContent = "DmgPB: " + data.weapons[i].mainStats.DmgPB;
                        weapon_detail_FiringRate.textContent = "Firing Rate: " + data.weapons[i].mainStats.FiringRate;
                        weapon_detail_ClipSize.textContent = "Clip Size: " + data.weapons[i].mainStats.ClipSize;
                        weapon_detail_ReloadTime.textContent = "Reload Time: " + data.weapons[i].mainStats.ReloadTime;
                        weapon_detail_BulletsPerCartridge.textContent = "Bullets Per Cartridge: " + data.weapons[i].mainStats.BulletsPerCartridge;
                        weapon_detail_Spread.textContent = "Spread: " + data.weapons[i].mainStats.Spread;
                        weapon_detail_SpreadDownsights.textContent = "Spread Downsights: " + data.weapons[i].mainStats.SpreadDownsights;
                        weapon_detail_DamageZone_Critical.textContent = "Damage Zone Critical: " + data.weapons[i].mainStats.DamageZone_Critical;
                        weapon_detail_Description.textContent = "Description: " + data.weapons[i].description;
                        if (data.weapons[i].images.background !== null){
                            weapon_detail_img.src = data.weapons[i].images.background;
                        } else {
                            weapon_detail_img.src = 'no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
                        }

                    }
                }
                weaponList.style.display = "none";
                weapondetail.style.display = "block";
                
            });
        });
    }
}
request.send();



//menu button control
var homeBtn = document.querySelector(".home_btn");
var weaponBtn = document.querySelector(".weapon_btn");
var homePage = document.querySelector(".home_page");
var weaponList = document.querySelector(".weapon_list");



weaponBtn.addEventListener('click', () => {
    homePage.style.display = "none";
    weaponList.style.display = "flex";
});

homeBtn.addEventListener('click', () => {
    weaponList.style.display = "none";
    homePage.style.display = "block";
    
});


//Close Weapons Detail
var weaponsDetailBackBtn = document.querySelector(".weapon_detail_arrow");
var weapondetail = document.querySelector(".weapon_detail");

weaponsDetailBackBtn.addEventListener('click', () => {
    weapondetail.style.display = "none";
    weaponList.style.display = "flex";
});


