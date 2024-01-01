//From Head

window.addEventListener('load', function(){
    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll('.pads div')
    const visual  = document.querySelector('.visual')
    const color = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];
    pads.forEach((pad,index) => {
        pad.addEventListener('click', ()=> {
            sounds[index].currentTime = 0
            sounds[index].play()
            makeBubble(index)
        })
    })

    const makeBubble = index => {
        const bubble = document.createElement('div')
        visual.appendChild(bubble)
        bubble.style.backgroundColor = color[index]
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationend', ()=>{
            visual.removeChild(bubble)
        })
    }
})




//From Video Tutorial

// window.addEventListener('load', () => {
//     const sounds = document.querySelectorAll('.sound')
//     const pads = document.querySelectorAll('.pads div')
//     const visual = document.querySelector('.visual')
//     const colors = [
//         "#60d394",
//         "#d36060",
//         "#c060d3",
//         "#d3d160",
//         "#606bd3",
//         "#60c2d3"
//     ];
//
//     pads.forEach((pad, index) =>{
//         pad.addEventListener('click', () =>{
//             sounds[index].currentTime = 0;
//             sounds[index].play();
//             createBubble(index);
//         });
//     });
//
//     const createBubble = index =>  {
//         const bubble = document.createElement("div");
//         visual.appendChild(bubble);
//         bubble.style.backgroundColor = colors[index]
//         bubble.style.animation = 'jump 1s ease'
//         bubble.addEventListener('animationend', function() {
//             visual.removeChild(this);
//         });
//     };
// });
