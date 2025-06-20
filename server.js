const {$require,_dirname}=require('vsystem@server/hooks/useInit')(require('module'));
const {join}=require('path');

require('vsystem@server/hooks/useConfig')().then(config=>{
    console.log('Using',config);
    require('vsystem@server/hooks/useHttp')(config.service)
        .native({
            hi(){
                return 'hi';
            },
        })
        .proxy(require('vsystem@server/hooks/useREST')(join(_dirname,'restfull')));
});