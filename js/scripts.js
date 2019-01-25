

$('#light-def').hide();
$('#act-def').hide();
$('#script-def').hide();
$('#sound-def').hide();

// $('.dir-crew').hide();

// Crew Definitions ================
    const crewPara = $('.crew-def p')
    const crewImg = $('.crew-def-img img')
    const crewMem = $('.crew-def-img h4');

    const dir_def = "Video directors are the creative force behind the making a movie, commercial or other video production. They work with a staff of producers, writers, editors, lighting technicians, sound engineers, and production assistants to produce videos for all sorts of different purposes."
    const prod_def = "As a television, film or video producer, you'll oversee all elements of a production from conception through to completion, and may also be involved in the marketing and distribution process.";
    const edit_def = "Video Editors are generally responsible for editing and assembling recorded raw material into a suitable, finished product ready for broadcasting. The material may include camera footage, dialogue, sound effects, graphics and special effects.";
    const act_def = "Actors depict characters in stories using their voices, appearances, bodies and gestures. They can work in movies, television, commercials, theater, theme parks and clubs.";
    const cam_op_def = "Working with directors to determine all aspects of shots. Providing practical and creative input to scene planning. Selecting, assembling and positioning equipment (cameras, stands, software etc.)";
    const audio_def = "Setting up and testing sound equipment before events, broadcasts or recordings. Recording, editing and mixing audio tracks (instruments, vocals etc.)";
    const light_tech_def = "Lighting technicians work closely with lighting designers, sound technicians, the director and the stage manager to combine their skills and help create the live theatre experience. Interpreting a lighting designer's plan. Rigging, focusing and operating necessary lighting equipment.";

    const dir_mem = "Ryan Coogler";
    const prod_mem = "Kevin Feige";
    const edit_mem = "Michael P. Shawver";
    const act_mem = "Chadwick Boseman";
    const cam_op_mem = "Rachel Morrison";
    const audio_mem = "Ludwig Göransson";
    const light_tech_mem = "";


// Director
$('.crew1').on('click', ()=>{
    crewPara.text(dir_def)
    crewImg.attr('src', './images/crew/ryan_coogler.jpg')
    crewMem.text(dir_mem)
});

// Producer
$('.crew2').on('click', ()=>{
    crewPara.text(prod_def)
    crewImg.attr('src', './images/crew/kevin_feige.jpg')
    crewMem.text(prod_mem)
});

// Editor
$('.crew3').on('click', ()=>{
    crewPara.text(edit_def)
    crewImg.attr('src', './images/crew/Michael_Shawver.jpg')
    crewMem.text(edit_mem)
});

// Actor
$('.crew4').on('click', ()=>{
    crewPara.text(act_def)
    crewImg.attr('src', './images/crew/chadwick_boseman.jpg')
    crewMem.text(act_mem)
});

// Camera Operator
$('.crew5').on('click', ()=>{
    crewPara.text(cam_op_def)
    crewImg.attr('src', './images/crew/rachel_morrison.jpg')
    crewMem.text(cam_op_mem)
});

// Audio Operator
$('.crew6').on('click', ()=>{
    crewPara.text(audio_def)
    crewImg.attr('src', './images/crew/Ludwig_goransson.png')
    crewMem.text(audio_mem)
});

// Lighting Technician
$('.crew7').on('click', ()=>{
    crewPara.text(light_tech_def)
    crewImg.attr('src', '')
    crewMem.text(light_tech_mem)
});

// END OF CREW DEFS

// CLASS actions
$('.def').hide();

$('.composition').on('click', ()=>{
    $('#comp-def').show();
    $('#light-def').hide();
    $('#act-def').hide();
    $('#script-def').hide();
    $('#sound-def').hide();
    $('')
})

$('.lighting').on('click', ()=>{
    $('#light-def').show();
    $('#comp-def').hide();
    $('#act-def').hide();
    $('#script-def').hide();
    $('#sound-def').hide();
})

$('.acting').on('click', ()=>{
    $('#act-def').show();
    $('#comp-def').hide();
    $('#light-def').hide();
    $('#script-def').hide();
    $('#sound-def').hide();
})

$('.script').on('click', ()=>{
    $('#script-def').show();
    $('#comp-def').hide();
    $('#light-def').hide();
    $('#act-def').hide();
    $('#sound-def').hide();
})

$('.sound').on('click', ()=>{
    $('#sound-def').show();
    $('#comp-def').hide();
    $('#light-def').hide();
    $('#script-def').hide();
    $('#act-def').hide();
})

// -------------------------------

// Types of Videos Definitions ================
const vidPara = $('#typeofvid-def p')
const vidVideo = $('#typeofvid-def iframe')

const ad = "this kind of videography are mainly seen as TV ads where companies advertise their products creatively to lure potential clients";
const ani = "";
const corp = "Corporate videos normally include shots of the company, the company buildings, the staff, the environment and others which are usually accompanied with background music as well as a narration.";
const doc = "This is a type of video where a subject is documented and is typically good for research or studies. Documentary videos are the documents of a subject. It is meant to document a subject.";
const edu = "These are videos taken for educational purposes. Educational videos are excellent examples of teaching and learning concepts";
const feat = "If a video film has more than 40 minutes in duration, it is a part of a feature film. Basically, a Feature film needs a minimum of 40 minutes duration or more than that.";
const music = "Music videos are normally videotaped performances of a song done by recording artists. These videos normally have a theme, dancing performances as well as visualizations.";
const short = "A short film is basically any film that is too short to be considered a feature film. There are no set boundaries on this, although the Academy of Motion Picture Arts and Sciences defines a short film as 'an original motion picture that has a running time of 40 minutes or less, including all credits'.";
const vlog = "A video blog or video log, usually shortened to vlog, is a form of blog for which the medium is video, and is a form of web television. Vlog entries often combine embedded video with supporting text, images, and other metadata.";

const ad_vid = "https://www.youtube.com/embed/Q2c2mPpvcpw";
const ani_vid = "https://www.youtube.com/embed/3ez10ADR_gM";
const corp_vid = "https://www.youtube.com/embed/wbnaHgSttVo";
const doc_vid = "https://www.youtube.com/embed/Z3dm-Qb7daI";
const edu_vid = "https://www.youtube.com/embed/wi-7hic3Uac";
const feat_vid = "https://www.youtube.com/embed/yZ7wGEU4h4w";
const music_vid = "https://www.youtube.com/embed/nntGTK2Fhb0";
const short_vid = "https://www.youtube.com/embed/m26R-nNYCcI";
const vlog_vid = "https://www.youtube.com/embed/aA9M2JNwsIM";

// ADs
$('.ad').on('click', ()=>{
    vidPara.text(ad)
    vidVideo.attr('src', ad_vid)
});

// Animation
$('.ani').on('click', ()=>{
    vidPara.text(ani)
    vidVideo.attr('src', ani_vid)
});

// Corporate
$('.corp').on('click', ()=>{
    vidPara.text(corp)
    vidVideo.attr('src', corp_vid)
});

// Documentary
$('.doc').on('click', ()=>{
    vidPara.text(doc)
    vidVideo.attr('src', doc_vid)
});

// Educational
$('.edu').on('click', ()=>{
    vidPara.text(edu)
    vidVideo.attr('src', edu_vid)
});

// Feature Film
$('.feat').on('click', ()=>{
    vidPara.text(feat)
    vidVideo.attr('src', feat_vid)
});

// Music
$('.music').on('click', ()=>{
    vidPara.text(music)
    vidVideo.attr('src', music_vid)
});

// Short Films
$('.short').on('click', ()=>{
    vidPara.text(short)
    vidVideo.attr('src', short_vid)
});

// Vlogs
$('.vlog').on('click', ()=>{
    vidPara.text(vlog)
    vidVideo.attr('src', vlog_vid)
});