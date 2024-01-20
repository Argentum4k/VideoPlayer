function showVid(){
    const video = document.getElementById('player')
    const link = document.getElementById('link')
    console.log(video)
    video.setAttribute('src', link.value)
    console.log(video)
}
