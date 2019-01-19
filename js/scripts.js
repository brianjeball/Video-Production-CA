

$('#light-def').hide();
$('#act-def').hide();
$('#script-def').hide();
$('#sound-def').hide();

// $('.dir-crew').hide();

// Crew Definitions
    const crewPara = $('.crew-div p')
    const crewImg = $('.crew-div img')

    const dir_def = "Video directors are the creative force behind the making a movie, commercial or other video production. They work with a staff of producers, writers, editors, lighting technicians, sound engineers, and production assistants to produce videos for all sorts of different purposes."
    const prod_def = "As a television, film or video producer, you'll oversee all elements of a production from conception through to completion, and may also be involved in the marketing and distribution process.";
    const edit_def = "Video Editors are generally responsible for editing and assembling recorded raw material into a suitable, finished product ready for broadcasting. The material may include camera footage, dialogue, sound effects, graphics and special effects.";
    const act_def = "Actors depict characters in stories using their voices, appearances, bodies and gestures. They can work in movies, television, commercials, theater, theme parks and clubs.";
    const cam_op_def = "Working with directors to determine all aspects of shots. Providing practical and creative input to scene planning. Selecting, assembling and positioning equipment (cameras, stands, software etc.)";
    const audio_def = "Setting up and testing sound equipment before events, broadcasts or recordings. Recording, editing and mixing audio tracks (instruments, vocals etc.)";
    const light_tech_def = "Lighting technicians work closely with lighting designers, sound technicians, the director and the stage manager to combine their skills and help create the live theatre experience. Interpreting a lighting designer's plan. Rigging, focusing and operating necessary lighting equipment.";

// Director
$('.crew1').on('click', ()=>{
    crewPara.text(dir_def)
    crewPara.attr('src', 'http://t1.gstatic.com/images?q=tbn:ANd9GcSjoU2lZ2eJX3aCMfiFDt39uRNcDu9W7pTKcyZymE2iKa7IOVaI')
});

// Producer
$('.crew2').on('click', ()=>{
    crewPara.text(prod_def)
    crewPara.attr('src', 'http://t1.gstatic.com/images?q=tbn:ANd9GcSjoU2lZ2eJX3aCMfiFDt39uRNcDu9W7pTKcyZymE2iKa7IOVaI')
});

