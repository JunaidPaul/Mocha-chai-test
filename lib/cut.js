exports = module.exports = {};

exports.reduce = function(args, length){
    var result = [];
    do{
        var counter =0;
        for(var i=0;i<length;i++){
            if (args[i]!=0){
                counter = counter+1;
            }
        }
        var temp = args[0];
        for(var i=0;i<length;i++){
            if(temp<args[i]&& temp!=0){
                continue;
            }
            else {
                if (args[i]==0){
                    continue;
                }
                else {
                    temp=args[i];
                }
            }
        }
        for(var i=0;i<length;i++){
            if(args[i]!=0){
                args[i]=args[i]-temp;
            }
        }
        result.push(counter);

    }while(temp!=0);
    var options=[];

    for(var i=0;i<result.length;i++){
        if(result[i]==0){
            continue;
        }
        else {
           options.push(result[i]);
        }
    }

    return options;

}