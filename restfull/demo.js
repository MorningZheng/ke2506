const useHttpProcess = require('net@tools/useHttpProcess');


const { spawn } = require('child_process');

const javaArgs = ['Hello', '你好']; // 第一个参数是类名，后面是传给 Java 的参数

const javaProcess = spawn('D:\\Program Files\\jdk-17.0.14\\bin\\java.exe', ['-jar','C:\\Users\\zheng\\Downloads\\sby_keke.jar'], {
    cwd: __dirname, // 设置工作目录为当前文件夹
    // stdio: 'inherit', // 直接继承主进程的 stdin/stdout/stderr
});

// javaProcess.on('close', (code) => {
//     console.log(`Java process exited with code ${code}`);
// }).stdout.on('data',buf=>{
//     console.log(buf.toString())
// });

module.exports=$require=>{
    const {bin} = $require('@config');

    const hToPdf = bin['html-pdf'].java ? useHttpProcess(
        // `${bin['html-png'].java} -jar ${bin['html-png'].jar}`
        bin['html-pdf'].java,
        ['-jar', bin['html-pdf'].jar],
    ).run(buf => {
        const txt = buf.toString().trim();
        const rs = /serve:http:\/\/(\d+\.\d+\.\d+\.\d+):(\d+)\b/ig.exec(txt);
        if (rs) {
            console.log('Ready',rs[0]);
            return {host: rs[1], port: rs[2]};
        }
    }) : {
        post(url, data) {
            // console.log(data);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify(data),
            }).then(rs => rs.text());
        },
        ready() {
            return true;
        },
    };

    return {

    };
}