module.exports = function check(str, bracketsConfig) {
    let s = str.split(''), arr = [], open = [], openIndex = 0, close = [], closeIndex = 0, sev = 0, eight = 0, vert = 0;
    for (let i = 0; i < bracketsConfig.length; i++) {
        open[i] = bracketsConfig[i][0];
        close[i] = bracketsConfig[i][1];
    }
    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] === '7'){
            sev++;
        } else if (s[i] === '8'){
            eight++;
        } else if (s[i] === '|'){
            vert++;
        }
        if (s[i] !== '|' && s[i] !== '7' && s[i] !== '8') {
            openIndex = open.indexOf(s[i]);
            if (openIndex !== -1) {
                arr.push(openIndex);
                continue;
            }
            closeIndex = close.indexOf(s[i]);
            if (closeIndex !== -1) {
                openIndex = arr.pop();
                if (closeIndex !== openIndex) {
                    return false;
                }
            }
        }
    }
    if(sev % 2 !== 0 || eight % 2 !== 0 || vert % 2 !== 0){
        return false;
    }
    return arr.length === 0;
}
