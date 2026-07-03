b = document.querySelector('button#print');
b.addEventListener('click', greeting);
function greeting() {
    i = document.querySelector('input[name="shimei"]');
    shimei = i.value; 
    aisatu='こんにちは,'+shimei+'さん';
    p=document.querySelector('p#message')
    p.textContent=aisatu;
}
