

$('#light-def').hide();
$('#act-def').hide();
$('#script-def').hide();
$('#sound-def').hide();

// $('.dir-crew').hide();

// Crew Definitions
    const crewPara = $('.crew-div p')
    const crewImg = $('.crew-div img')

    const dir_def = "Video directors are the creative force behind the making a movie, commercial or other video production. They work with a staff of producers, writers, editors, lighting technicians, sound engineers, and production assistants to produce videos for all sorts of different purposes."

// Director
$('.crew1').on('click', ()=>{
    crewPara.text(dir_def)
    crewPara.attr('src', 'http://t1.gstatic.com/images?q=tbn:ANd9GcSjoU2lZ2eJX3aCMfiFDt39uRNcDu9W7pTKcyZymE2iKa7IOVaI')
});