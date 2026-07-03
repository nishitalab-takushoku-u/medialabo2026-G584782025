b = document.querySelector('button#calc');
b.addEventListener('click', greeting);
function greeting() {
    left = document.querySelector('input[name="left"]')
    right = document.querySelector('input[name="right"]')

    sum=Number(right.value)+Number(left.value)

    p=document.querySelector('span#answer')
    p.textContent=sum;
}